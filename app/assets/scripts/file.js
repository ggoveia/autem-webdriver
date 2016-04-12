var ipc = require('ipc');
var excelReader = require('../app/excelReader.js');

$( ".btnProcess" ).click(function() {
    
 var fileDirectory = '/Users/Giuliane/AutemWebDriver/test/fileWithData.xlsx';
        
 var array = excelReader.reader(fileDirectory, ['id', 'numServico', 'valor'], 1);
    
 //get all excelFiles
 
//  var i1 = {id:"22730309", numServico:"1", valor:"70,00"};
//  var i2 = {id:"22734147", numServico:"1", valor:"70,00"};
//  var i3 = {id:"22741833", numServico:"1", valor:"70,00"};
//  var i4 = {id:"22741395", numServico:"1", valor:"70,00"};
 
//  var testObject = [i1,i2,i3,i4];
 
 //processItens
 ipc.send('process-itens', array);

});

