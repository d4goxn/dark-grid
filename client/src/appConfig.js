require.config({
	shim: {
		three: {
			exports: 'THREE'
		}
	},
	paths: {
		requirejs: '../lib/requirejs/require',
		'socket.io-client': '../lib/socket.io-client/lib/io'
	}
});

require(['three'], function(three) {
	'use strict';

	console.log('App config');
	console.log('three:', three);
});
