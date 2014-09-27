module.exports = function(grunt) {
 
  // Project configuration.
  grunt.initConfig({
    
    // Replace object
    replace: {
      build_replace: {
        options: {
          variables: {
            // Generate a truly random number by concatenating the current date with a random number
            // The variable name corresponds with the same in our HTML file
            'hash': '<%= ((new Date()).valueOf().toString()) + (Math.floor((Math.random()*1000000)+1).toString()) %>'
          }
        },
        // Source and destination files
        files: [
          {
            src: ['public/index.html'],
            dest: 'public/build/index.html'
          }
        ]
      }
    }
 
  });
  
  grunt.loadNpmTasks('grunt-replace');
 
  // Default task, you can obviously name this whatever you like
  grunt.registerTask('default', ['replace']);
 
};