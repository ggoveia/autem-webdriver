var assert        = require('assert'),
    config        = require('../app/config.js'),
    fileProcessor = require('../app/fileProcessor.js');

describe('File Processor - ', function () {
    
    it('Should get directory files', function (done) {
        
        config.filesToBeProcessed = '/home/renan.aragao/job/autem-webdriver/autem-webdriver/test/';
        
        var filesDirectory = [];
        
        fileProcessor
        .getFileDirectory(config.filesToBeProcessed)
        .then(function (items) {
            
            filesDirectory = items;
                
            assert.equal(2, filesDirectory.length);

            assert.equal(config.filesToBeProcessed + 'fileWithData.xlsx', filesDirectory[0]);
            assert.equal(config.filesToBeProcessed + 'fileWithoutData.xlsx', filesDirectory[1]);
            
            done();
            
        })
        .catch(done);
        
    });
    
});