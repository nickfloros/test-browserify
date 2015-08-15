module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch : {
			scripts : {
				files : ['src/**/*.html'],
				tasks : ['copy']
			}
		},
		'http-server': {
			'dev': {
				root: 'dist/',
				port: 8282,
				showDir: false,
				runInBackground: true,
				ext: 'html'
			}
		},
		clean : {
			build : {
				src : ['dist']
			}
		},
		copy : {
			main : {
				files : [
					{
						src : ['src/*.html'],
						dest : 'dist/',
						filter : 'isFile',
						flatten : true,
						expand  : true
					}
				]
			}
		}	
	});

	// detault task 
	grunt.registerTask('default', ['clean','copy']);

	// development server
	grunt.registerTask('dev',['http-server','watch']);
};