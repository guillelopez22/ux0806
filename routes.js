var libroController = require('./controllers/libroController');

exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API biblioteca, Biblioteca')}}},
	{method: 'POST', path: '/biblioteca/agregarlibro', config: libroController.createLibro},
  {method: 'PUT', path: '/biblioteca/update/{id}', config: libroController.updateLibro},
	{method: 'DELETE', path: '/biblioteca/delete/{id}', config: libroController.deleteLibro},
	{method: 'GET', path: '/biblioteca/buscar/{id}', config: libroController.buscartodoLibro},
	{method: 'GET', path: '/biblioteca/all', config: libroController.todoLibro},
	{method: 'GET', path: '/biblioteca/buscar', config: libroController.buscarLibro},
	{method: 'PUT', path: '/biblioteca/prestado/{id}', config: libroController.marcarLibro}
];
