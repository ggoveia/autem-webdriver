var xlsx = require('node-xlsx');

exports.reader = reader;

function reader (fileName, properties, initialIndex) {
    
    initialIndex = initialIndex || 0;
    
    var dataXlsx = xlsx.parse(fileName);
    
    return dataXlsx[0].data.slice(initialIndex).map(function (data) {
        
        var newObj = {}
        
        properties.forEach(function (property, index) {
            
            newObj[property] = data[index];
            
        });
        
        return newObj;
        
    })    
        
};
