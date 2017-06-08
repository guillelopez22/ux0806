var mongoose = require('mongoose');

var LibroSchema = new mongoose.Schema({
  name : String,
  genero: String,
  autor: String,
  añoPublicacion: String,
  editorial: String,
  descripcion: String,
  keywords: [String],
  total: Number,
  disponibles: Number
});

module.exports = mongoose.model('Libro', LibroSchema);
