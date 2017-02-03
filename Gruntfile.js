module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
      sass: {
        dist: {
          files: {
            'src/css/app.css' : 'src/scss/app.scss'
          }
        }
      },


      watch: {
        css: {
          files: '**/*.scss',
          tasks: ['sass']
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', ['sass']);

};
