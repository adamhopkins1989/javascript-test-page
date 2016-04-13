/*!
 * Adams Gruntfile
 * @author Adam
 */



(function() {
    'use strict';
}());


module.exports = function(grunt) {

    grunt.initConfig({

        // Project configuration
        pkg: grunt.file.readJSON('package.json'),

        // Compile Sass
        sass: {
            options: {
                sourceMap: true,
                sourceComments: false
            },
            dist: {
                files: {
                    'dist/css/app.css': 'dev/scss/app.scss'
                }
            }
        },

        // Copy html files
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'dev',
                    src: [
                        '**/*.html',
                        'images/{,*/}*.{png,jpg,gif}'
                    ],
                    dest: 'dist'
                }]
            }

        },

        // Watch and build
        watch: {

            sass: {
                files: 'dev/scss/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            },

            html: {
                files: ['dev/*.html'],
                tasks: ['copy'],
                options: {
                    livereload: true
                }
            },

            images: {
                files: ['dist/images/*.png'],
                tasks: ['copy:images'],
                options: {
                    livereload: true
                }
            }
        },

        concat: {
            options: {},
            dist: {
                src: ['dev/js/module1.js', 'dev/js/module2.js'],
                dest: 'dist/js/main.js'
            }
        },

        uglify: {
            options: {

            },
            dist: {
                files: {
                    'dist/js/main.min.js': 'dist/js/main.js'
                }
            }
        },

        //Browersync
        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
                        "dist/css/*.css",
                        "dist/*.html"
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./dist"
                    }
                }
            }
        }

    });

    // Load dependencies
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-browser-sync');

    // Run tasks
    grunt.registerTask('default', ['browserSync', 'sass', 'concat', 'uglify', 'copy', 'watch', ]);

};