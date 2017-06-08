var student = require('../schemas/libro');

exports.createLibro = {
handler: function(){
  console.log("lol");
  }
}

exports.updateLibro = {

}

exports.deleteLibro = {

}

exports.buscartodoLibro = {
  handler:function(request,reply){
    reply(console.log("estamos adentro"));
  }
}

exports.todoLibro = {

}

exports.buscarLibro = {

}

exports.marcarLibro = {

}

exports.getStudents = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin', 'regular']
  },
  handler: function(request, reply){
    var students = student.find({});
    reply(students);
  }
}

exports.createStudent = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin']
  },
  handler: function(request, reply){
    var newStudent = new student({
      name: request.payload.name,
      account: request.payload.account
    });
    newStudent.save();
    console.log('student saved');
    return reply('ok');
  }
}
