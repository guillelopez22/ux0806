var student = require('../schemas/libro');



exports.e
createLibro
updateLibro
deleteLibro
buscartodoL
todoLibro},
buscarLibro
marcarLibro
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