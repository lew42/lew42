var test = require("test42");
var util = require("util42");
var is = util.is;

var $ = require("jquery");
var assert = test.assert;

var Base1 = require("./Base1");

test("Base1", function(){
	test("basic", function(){
		var base = Base1();
		assert(base instanceof Base1);
		assert(base.constructor === Base1);
	});
});