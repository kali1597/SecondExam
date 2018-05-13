module.exports = function (grunt) {
    
    var config = grunt.file.readJSON(grunt.option('config'||'config.json'));

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    
        grunt.initConfig({
          
            jasmine: {
                JS: {
                  src: 'js/*.js',
                  options: {
                    specs: 'spec/*.spec.js'
                  }
                }
              }
            });

        grunt.registerTask('generateIndex', function(){
            grunt.file.copy('index.html', config.buildFolder+'/index.html',{ 
                process: function(files){
                    return grunt.template.process(files,
                    {
                          data: {
                            appName:config.appName
                        }
                    });
                }
            });      
      });
      
      grunt.registerTask('genPg1', function(){
          grunt.file.copy('page1.html', config.buildFolder+'/page1.html',{ 
              process: function(files){
                  return grunt.template.process(files,
                  {
                        data: {
                          appName:config.appName
                      }
                  });
              }
          });      
      });
  
      grunt.registerTask('genPg2', function(){
          grunt.file.copy('page2.html', config.buildFolder+'/page2.html',{ 
              process: function(files){
                  return grunt.template.process(files,
                  {
                        data: {
                          appName:config.appName
                      }
                  });
              }
          });      
      });

      grunt.registerTask('build', ['genPg1','genPg2','generateIndex']);
    
    
    
};   