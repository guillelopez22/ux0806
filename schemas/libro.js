var mongoose = require('mongoose');

var LibroSchema = new mongoose.Schema({
  Id: String,
  name : String,
  genero: String,
  autor: String,
  añoPublicacion: String,
  editorial: String,
  descripcion: String,
  keywords: [String],
  total: String,
  disponibles: String,
});

module.exports = mongoose.model('Libro', LibroSchema);
