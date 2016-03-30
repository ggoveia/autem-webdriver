var Promise = require('bluebird'),
    fs      = require('fs'),
    path    = require('path');

exports.getFileDirectory = getFileDirectory;

function getFileDirectory (directory) {
    
    return new Promise(function (fulfill, reject) {
        
        fs.readdir(directory, function (err, files) {
            
            if(err){ 
                reject(err);
            }
            else {
                
                var directories = files
                .filter(function (file) {
                    
                    return path.extname(file) == '.xlsx'
                    
                })
                .map(function (file) {
                    
                    return directory + file;
                    
                })
                
                fulfill(directories);
                
            }

        });
        
    });
    
}