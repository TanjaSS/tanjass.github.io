module.exports = function(grunt) {
  require('jit-grunt')(grunt);
  
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: false
        },
        files: {
          'css/style.css': 'less/style.less' // destination file and source file
        }
      }
    },
    watch: {
      styles: {
        files: ['less/*.less'], // which files to watch
        tasks: ['less', 'cssmin'],
        options: {
          nospawn: true
        }
      }
    },
    cssmin: {
      target: {
        files: {
          'css/style.min.css': [
            'css/fonts.css',
            'bower_components/bootstrap/dist/css/bootstrap.min.css',
            'vendor/slick/slick.css',
            'vendor/slick/slick-theme.css',
            'css/style.css'
          ]
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'cssmin', 'watch']);
}