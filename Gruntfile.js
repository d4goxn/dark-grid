'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			files: [
				'<%= mochaTest.test.src %>',
				'server/src/**/*.js'
			],
			tasks: ['mochaTest']
		},
		mochaTest: {
			test: {
				options: {
					reporter: 'spec'
				},
				src: 'server/test/**/*.js'
			}
		},
		bower: {
			target: {
				rjsConfig: 'client/src/appConfig.js'
			}
		},
		express: {
			dev: {
				options: {
					script: 'server/start.js'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-bower-requirejs');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-express-server');

	grunt.registerTask('default', ['bower', 'mochaTest']);

	grunt.registerTask('serve', function() {
		grunt.log.writeln('Starting a web server...');
		require('./server').serve();
	});

	// TODO: Watch and restart Express (see https://npmjs.org/package/grunt-express-server)
	// TODO: dev, prod, test (for e2e) server environments
};
