module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-mocha');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-jscs');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');

    var userConfig = require('./build.configuration.js');

    var taskConfig = {
        pkg: grunt.file.readJSON('package.json'),

        clean: [
            '<%= dist_dir %>'
        ],

        concat: {
			options: {
			      separator: ';',
			    },
			    dist: {
			      src: ['src/*.js'],
			      dest: '<%= dist_dir %>/wdpr-angular-router.js',
			    },
            },
	    jscs: {
	        options: {
	            force: true,
	            config: '.jscsrc'
	        },
	        analyze: {
	            src: ['src/**/*.js']
	        }
	    },
		
		jshint: {
	        options: {
	            force: true,
	            jshintrc: '.jshintrc'
	        },
	        build: {
	            src: ['src/**/*.js']
	        }
	    },

	    karma: {
		    options: {
			    configFile: 'karma.configuration.js'
		    },
		    unit: {
			    runnerPort: 9101,
			    background: true,
			    port: 9877
		    },
		    continuous: {
			    singleRun: true
		    }
	    }
    };

    grunt.initConfig(grunt.util._.extend(taskConfig, userConfig));

    grunt.registerTask('test', ['karma']);
    grunt.registerTask('analyze', ['jscs', 'jshint']);
    grunt.registerTask('bundle', ['clean', 'concat']);
};
