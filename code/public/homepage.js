var Page = require("page42");

var homepage = module.exports = Page({
	name: "home",
	render: function(){
		console.log("homepage.render");
	}
});