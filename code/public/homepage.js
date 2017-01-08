var Page = require("page42");
var View = require("view42");

var homepage = module.exports = Page({
	name: "home",
	content: function(){
		View("this is the homepage");
	}
});