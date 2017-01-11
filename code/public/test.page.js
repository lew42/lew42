var Page = require("page42");
var View = require("view42");
var Test = require("test42");

var TestPage = Page.extend({
	name: "TestPage",
	content: function(){
		View("Back").click(function(){
			this.route.parent.activate();
		}.bind(this));
		View.h1(this.name);
		// View("parent: " + this.parent.name);
		Test.route = this.route;
		this.route.remainder = this.route.reminder || [];
		this.req(this.key);
	}
});


var fillSparseRoutes = function(route){
	route.each(function(rt){
		if (rt.routes.length){
			if (!rt.page){
				rt.page = Page({
					app: rt.parent.page.app,
					route: rt,
					content: function(){
						View("Back").click(function(){
							this.route.parent.activate();
						}.bind(this));
						View.h1(this.name);
						this.route.each(function(route){
							View(function(){
								this.addClass("flex test-item");
								View(route.part);
								View.Icon("angle-right");
								this.click(function(){
									route.activate();
								});
							});
						});
					}
				});
			}
			fillSparseRoutes(rt);
		}
	});
};

var testPage = module.exports = Page({
	set_app: function(app){
		this.app = app;
		this.app.loadTests(require.context("../", true, /\.tests\.js$/), this.route, TestPage);

		fillSparseRoutes(this.route);

	},
	content: function(){
		View("Back").click(function(){
			this.route.parent.activate();
		}.bind(this));
		this.addClass("test");
		var testPage = this;
		View.h1("test/");
		this.route.each(function(route){
			View(function(){
				this.addClass("flex test-item " + route.part);
				View(route.part);
				View.Icon("angle-right");
				this.click(function(){
					route.activate();
				});
			})
		});
	}
});

/*
If each .test.js file exports a test page, then we don't need to make one...

Currently, page.route comes from the app's loadPage fn, and the route is just a parentRoute.add("path");

If page.addPage(page) checks page for a string route, it could replace the string with a real route..


page.add("route") --> returns new page with route?
page.add({})
*/