var View = require("view42");
var logo = require("./lew.logo.svg.str.js");
var $ = require("jquery");
var $logo = $(logo)

var Header = module.exports = View.extend({
	name: "Header",
	tag: "header",
	addClass: "main",
	content: function(){
		var app = this.app;

		$logo.click(function(){
			app.home.activate();
		});

		View(function(){
			this.addClass("logo-wrap");
			$logo.appendTo(this.$el);
		});
		for (var i = 0; i < app.pages.length; i++){

		}

		View({
			tag: "nav",
			addClass: "main",
			content: function(){
				// View("LEW42");
				// View("home").click(function(){
				// 	app.home.activate();
				// }.bind(this));
				View("test").click(function(){
					app.test.activate();
				}.bind(this));

				View("tools").click(function(){
					app.tools.activate();
				});

				View("grids").click(function(){
					app.test.view1.grid.route.activate();
				});

				View("typography").click(function(){
					app.test.view1.typography.route.activate();
				});

				View("theme").click(function(){
					app.test.view1.sandbox.route.activate();
				});
			}
		});
	}
});