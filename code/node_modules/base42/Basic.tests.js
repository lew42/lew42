var test = require("test42");
var assert = test.assert;

var Base = require("./Basic");

test("create an instance", function(){
	var obj = new Base();
	console.log(obj);
});

var Ext;
test("no more useful than a regular object, until we extend with it", function(){
	Ext = Base.extend();
	// but, we have to add properties directly to the prototype, which isa little awkward/verbose

	Ext.prototype.prop = 5;
	Ext.prototype.jump = function(){
		console.log("Jumped", this.prop);
	};

	var ext = new Ext();
	ext.jump();
	ext.jump();
	ext.jump();
	ext.jump();
	ext.jump();
	ext.jump();
});

test("add init", function(){
	var Ext2 = Ext.extend();

	
});