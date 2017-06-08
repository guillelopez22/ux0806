var libroController = require('./controllers/libroController');

exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API biblioteca, Biblioteca')}}},
	{method: 'POST', path: '/biblioteca/agregarlibro', config: libroController.createLibro},
  {method: 'PUT', path: '/biblioteca/update/{Id}', config: libroController.updateLibro},
	{method: 'DELETE', path: '/biblioteca/delete/{Id}', config: libroController.deleteLibro},
	{method: 'GET', path: '/biblioteca/buscar/{Id}', config: libroController.buscarLibro},
	{method: 'GET', path: '/biblioteca/all', config: libroController.todoLibro},
	{method: 'GET', path: '/biblioteca/buscar', config: libroController.advanceSearch},
	{method: 'PUT', path: '/biblioteca/prestado/{Id}', config: libroController.marcarLibro}
];
