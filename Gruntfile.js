module.exports = function (grunt) {
	'use strict';

	// Load all grunt tasks
	require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );

	// Project configuration
	grunt.initConfig( {
		pkg: grunt.file.readJSON( 'package.json' ),

		concat: {
			dist: {
				src : ['app/assets/js/src/*.js'],
				dest: 'app/assets/js/build/production.js'
			}
		},

		jshint: {
			all: ['app/assets/js/src/*.js']
		},

		uglify: {
			build: {
				src : 'app/assets/js/build/production.js',
				dest: 'app/assets/js/build/production.min.js'
			}
		},

		sass: {                              // Task
			dist: {                            // Target
				options: {                       // Target options
					style: 'compressed'
				},
				files  : [{
					expand: true,
					cwd   : 'app/assets/scss/',
					src   : ['*.scss'],
					dest  : 'app/assets/css/',
					ext   : '.css'
				}]
			}
		},

		watch: {
			css    : {
				files  : ['app/assets/scss/**/*.scss', 'app/assets/scss/*.scss'],
				tasks  : ['sass'],
				options: {
					debounceDelay: 500
				}
			},
			scripts: {
				files  : ['app/assets/js/src/*.js'],
				tasks  : ['concat', 'uglify', 'jshint'],
				options: {
					spawn: false
				}
			}
		}
	} );

	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-scss-lint' );

	// Default task.
	grunt.registerTask( 'default', ['concat', 'uglify', 'jshint'] );

	grunt.util.linefeed = '\n';
};