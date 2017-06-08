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
  }
}
