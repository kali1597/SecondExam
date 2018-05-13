module.exports = function (grunt) {
    
    var option = grunt.option('config');
    var con = grunt.file.readJSON('option')




    grunt.loadNpmTasks('grunt-contrib-Jasmine');
    
        grunt.initConfig({
          
            JS: {
              src: 'js/*.js',
              dest: config.buildFolder
            
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

    
}    