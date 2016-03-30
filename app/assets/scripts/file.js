var excelReader = require('../app/excelReader.js');

document.getElementById('fileinput').addEventListener('change', function(){
    var file = this.files[0];
    
    var fileDirectory = '/home/renan.aragao/job/autem-webdriver/autem-webdriver/test/fileWithData.xlsx';
        
    var array = excelReader.reader(fileDirectory, ['id', 'name', 'lastName'], 1);
    
    $("#spnFile").html(JSON.stringify(array));
    
}, false);
