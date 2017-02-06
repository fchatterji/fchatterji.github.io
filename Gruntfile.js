module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    engine: 'gm',
                    sizes: [{
                        width: 800,
                        height: 600,
                        quality: 50
                    }, {
                        width: 1600,
                        height: 1200,
                        quality: 30
                    }, {
                        width: 400,
                        height: 300,
                        quality: 30
                    }],

                    aspectRatio: false
                },

                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'img_src/',
                    dest: 'img/'
                }]
            }
        },

        /* Clear out the images directory if it exists */
        clean: {
            dev: {
                src: ['img'],
            },
        },

        /* Generate the images directory if it is missing */
        mkdir: {
            dev: {
                options: {
                    create: ['img']
                },
            },
        },

        /* Copy the "fixed" images that don't go through processing into the images/directory */
        copy: {
            dev: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: 'img_src/fixed/*.{gif,jpg,png,svg}',
                    dest: 'img/'
                }]
            },
        },


        svgmin: {
            options: {
                plugins: [{
                    removeViewBox: false
                }]

            },
            dist: {
                files: {
                    'svg/*': 'svg_src/*'
                }
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            },
        }

    });


    grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images', 'svgmin', 'cssmin']);

};
