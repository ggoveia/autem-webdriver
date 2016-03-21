var assert = require('assert');
var excelReader = require('../app/excelReader.js');

describe('Excel Reader - ', function () {
    
    it('Should read excel', function () {
        
        var fileDirectory = '/home/renan.aragao/job/autem-webdriver/autem-webdriver/test/fileWithData.xlsx';
        
        var array = excelReader.reader(fileDirectory, ['id', 'name', 'lastName'], 1);
        
        assert.equal(3, array.length);
        
        assert.equal(78, array[0].id)
        assert.equal(89, array[1].id)
        assert.equal(56, array[2].id)
        
        assert.equal('renan', array[0].name)
        assert.equal('roberta', array[1].name)
        assert.equal('carlos', array[2].name)
        
        assert.equal('aragão', array[0].lastName)
        assert.equal('silva', array[1].lastName)
        assert.equal('souza', array[2].lastName)
        
    });
    
    it('Should read the excel from the index zero', function () {
        
        var fileDirectory = '/home/renan.aragao/job/autem-webdriver/autem-webdriver/test/fileWithData.xlsx';
        
        var array = excelReader.reader(fileDirectory, ['id', 'name', 'lastName']);
        
        assert.equal(4, array.length);
        
        assert.equal('id', array[0].id)
        assert.equal(78, array[1].id)
        assert.equal(89, array[2].id)
        assert.equal(56, array[3].id)
        
        assert.equal('name', array[0].name)
        assert.equal('renan', array[1].name)
        assert.equal('roberta', array[2].name)
        assert.equal('carlos', array[3].name)
        
        assert.equal('last name', array[0].lastName)
        assert.equal('aragão', array[1].lastName)
        assert.equal('silva', array[2].lastName)
        assert.equal('souza', array[3].lastName)
        
    });
    
    it('Must return an empty array if the file is emptyl', function () {
        
        var fileDirectory = '/home/renan.aragao/job/autem-webdriver/autem-webdriver/test/fileWithoutData.xlsx';
        
        var array = excelReader.reader(fileDirectory, ['id', 'name', 'lastName'], 1);
        
        assert.equal(0, array.length);
        
    });    

});
