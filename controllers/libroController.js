var libro = require('../schemas/libro');

exports.createLibro = {
  handler: function(request, reply){
    var newLibro = new libro({
      Id: request.payload.Id,
      name: request.payload.name,
      genero: request.payload.genero,
      autor: request.payload.autor,
      añoPublicacion: request.payload.añoPublicacion,
      editorial: request.payload.editorial,
      descripcion: request.payload.descripcion,
      keyword: request.payload.keyword,
      total: request.payload.total,
      disponibles: request.payload.disponibles,
    });
    newLibro.save();
    console.log('libro saved');
    reply('ok');
  }
}
exports.updateLibro = {
  handler: function(request, reply){
    libro.update({Id : request.params.Id},
      {
        Id:request.payload.Id,
        name : request.payload.name,
        genero : request.payload.genero,
        autor : request.payload.autor,
        añoPublicacion : request.payload.añoPublicacion,
        editorial : request.payload.editorial,
        descripcion : request.payload.descripcion,
        keyword : request.payload.keyword,
        total : request.payload.total,
        disponibles : request.payload.disponibles,
    }).exec();
    console.log('updated');
    reply('ok');
  }
}

exports.deleteLibro = {
  handler: function (request, reply) {
    libro.find({ Id : request.params.Id }).remove().exec();
    reply("ok");
  }
}

exports.buscarLibro = {
  handler:function(request,reply){
    var libros = libro.find({Id : request.params.Id});
    reply(libros);
  }
}

exports.todoLibro = {
  handler:function(request, reply){
    var libros = libro.find({});
    reply(libros);
  }
}

exports.advanceSearch = {
  handler:function(request,reply){
    var libro = libro.find({Id: request.params.Id, name: request.params.name});

    reply(libro);//falta
  }
}

exports.marcarLibro = {
  handler:function(request,reply){
    var libro = libro.find({Id : request.params.Id});
    if(!err){
      libro.disponibles= request.payload.disponibles;
    }
    reply(libro);
  }
}
