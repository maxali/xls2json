# xls2json
Excel to JSON

Simple wrapper of https://github.com/SheetJS/js-xls library

# Install

    npm install https://github.com/maxali/xls2json.git

# Usage

    var xls = require('xls2json');
    var file = xls.readFile('list.xls');
    
    // set work sheet
    file.selectSheet(1); // worksheet index or name
    
    // log json representation of 
    console.log( file.toJSON() ); 

or

    var myjson = require('xls2json')('test.xls').toJSON();
