var Page = require("page42");
var View = require("view42");

var homepage = module.exports = Page({
	name: "home",
	content: function(){
		var app = this.app;
		View("layouts1").click(function(){
			app.layouts1.activate();
		});
		View("layouts2").click(function(){
			app.layouts2.activate();
		});

		for (var i = 0; i < app.pages.length; i++){
			(function(i){
				View(app.pages[i].name).click(function(){
					app.pages[i].activate();
				});
			})(i);
		}
	}
});