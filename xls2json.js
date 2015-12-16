
function xls(filename) {
	var self = {};
	var xls = require('xlsjs');
	self.workbook = null;
	self.sheet = null;

	self.readFile = function(filename) {
		self.workbook = xls.readFile(filename);		
		self.sheetNames = self.workbook.SheetNames;
	}

	self.readFile(filename);

	self.selectSheet = function(sheet) {
		sheet = (typeof sheet == "string" || typeof sheet == "number") ? sheet : 0;
		self.sheet = self.workbook.Sheets[self.workbook.SheetNames[sheet]];
		return self;
	};

	self.toJSON = function(filename, sheetnr) {

		if(filename) self.readFile(filename);
		if(sheetnr) self.selectSheet(0);
		if(!self.sheet) self.selectSheet(0);

		var data = xls.utils.sheet_to_json(self.sheet);

		return data;
	};	

	self.uttak = self.toJSON().filter(function(item, i){
		return !!item.Uttak;
	});
	
	self.innskudd = self.toJSON().filter(function(item, i){
		return !!item.Innskudd;
	})
	
	return self;
}
module.exports = xls;
