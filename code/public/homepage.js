var Page = require("page42");
var View = require("view42");

require("./homepage.less")

var homepage = module.exports = Page({
	name: "home",
	content: function(){
		var app = this.app;
		for (var i = 0; i < app.pages.length; i++){
			(function(i){
				View(app.pages[i].name).click(function(){
					app.pages[i].activate();
				});
			})(i);
		}


	}
});