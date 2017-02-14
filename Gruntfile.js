'use strict';

module.exports =  function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          size: [{
            width: 400
          }, {
            width: 1200
          }]
        },

        files: [{
          expand: true,
          src: ['*.{png,jpg}'],
          cwd: 'Images/',
          dest: 'dist/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);
};
