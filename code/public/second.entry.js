var App = require("app42");
var App2 = require("app42/App2");
var View = require("view42");
var Cols = require("grid").Cols;

// require("less42"); // if you want better control over order - don't just suck it all in at once...
// we can @import it in pieces, within styles.less
require("../css/styles.less");

var $ = window.$ = require("jquery");

var homepage = require("./homepage");
var AppView = require("./AppView");


var RouteView = View.extend({
	name: "RouteView",
	addClass: "route",
	content: function(){
		var route = this.route;
		View(function(){
			this.append(route.part || "home");
			View.Icon("angle-right");
			this.addClass("flex");
			this.click(function(){
				route.activate();
			});
		});
		// View(function(){
		// 	this.route.each(function(route){
		// 		RouteView({
		// 			route: route
		// 		})
		// 	});
		// }.bind(this)).addClass("children");
	}
});

var app = App2({
	name: "app",
	home: homepage,
	// View: AppView,
	init: function(){
		this.loadPages(require.context("./", true, /\.page\.js$/), "page");
		// this.loadTests(require.context("../", true, /\.tests\.js$/));
		// this.logger();
		// this.route.logger();
	},
	content: function(){
		// this.nav = RouteView({
		// 	route: this.route
		// }).addClass("nav");
		var app = this;
		View.Bar({
			tag: "header",
			addClass: "main",
			content: function(){
				View("LEW42");
				View("home").click(function(){
					app.home.activate();
				}.bind(this));
				View("test").click(function(){
					app.test.activate();
				}.bind(this));

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