var libro = require('../schemas/libro');




exports.buscartodoLibro = {
  handler:function(request,reply){
    var libro = libro.find({'Id':request.param.id});
    return reply(libro);
  }
}

exports.todoLibro = {
  handler:function(reply){
    var libro = libro.find({});
    return reply(libro);
  }
}

exports.buscarLibro = {
  handler:function(reply){
    var libro = libro.find({});
    return reply(libro);
  }
}

exports.marcarLibro = {
  handler:function(request,reply){
    var libro = libro.find({'Id':request.param.id});
    if(!err){
      libro.disponibles= request.payload.disponibles;
    }
    return reply(libro);

exports.createLibro = {
  handler: function(request, reply){
    var newLibro = new libro({
      name: request.payload.name, 
      genero: request.payload.genero,
      autor: request.payload.autor,
      añoPublicacion: request.payload.añoPublicacion,
      editorial: request.payload.editorial,
      descripcion: request.payload.descripcion,
      keyword: request.payload.keyword,
      total: request.payload.total,
      disponibles: request.payload.disponibles
    });
    newLibro.save();
    console.log('libro saved');
    return reply('ok');
  }
}
exports.updateLibro = {
  handler: function(request, reply){
    User.findOne({'Id': request.params.Id}, function(err, libro){
      if (!err) {
        libro.name = request.payload.name, 
        libro.genero = request.payload.genero,
        libro.autor = request.payload.autor,
        libro.añoPublicacion = request.payload.añoPublicacion,
        libro.editorial = request.payload.editorial,
        libro.descripcion = request.payload.descripcion,
        libro.keyword = request.payload.keyword,
        libro.total = request.payload.total,
        libro.disponibles = request.payload.disponibles
        libro.save(libro);
        console.log('updated');
        return reply('ok');
      }
    });

  }
}
exports.deleteLibro = {
  handler: function (request, reply) {
    User.findOne({ 'Id': request.params.Id }, function (err, libro) {
      if (!err && user) {
        libro.remove();
        console.log('it has been done');
        return reply('ok');
      }
    });
  }
}


