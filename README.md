# xls2json
Excel to JSON

Simple wrapper of https://github.com/SheetJS/js-xls library

    var xls = require('./xls2json.js');
    var file = xls.readFile('list.xls');
    
    // set work sheet
    file.selectSheet(1); // worksheet index or name
    
    // log json representation of 
    console.log( file.toJSON() ); 

or

    var myjson = require('xls2json')('test.xls').toJSON();
