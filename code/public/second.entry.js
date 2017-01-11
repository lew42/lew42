var App = require("app42");
var App2 = require("app42/App2");
var View = require("view42");
var Cols = require("grid").Cols;

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
		View("home").click(function(){
			this.home.activate();
		}.bind(this));

		View("test").click(function(){
			this.test.activate();
		}.bind(this));
	}
});