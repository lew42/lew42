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

		var route = this.route;
		View(function(){
			this.addClass("child-routes");
			route.each(function(route){
				View(function(){
					this.addClass("flex test-item");
					View(route.part);
					View.Icon("angle-right");
					this.click(function(){
						route.activate();
					});
				});
			});
		});
		// View("parent: " + this.parent.name);
		Test.route = this.route;
		this.route.remainder = this.route.remainder || [];
		// console.log("TestPage.remainder", this.route.remainder, this.route);
		this.req(this.key);
	}
});


var fillSparseRoutes = function(route){
	route.each(function(rt){
		// console.group(rt.name, rt.routes);
		if (rt.routes.length){
			if (!rt.page){
				// console.log("rt.name:", rt.name);
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
		// console.groupEnd(rt.name);
	});
};

var testPage = module.exports = Page({
	set_app: function(app){
		this.app = app;
		this.app.loadTests(require.context("../", true, /\.tests\.js$/), this.route, TestPage);

		fillSparseRoutes(this.route);

	},
	content: function(){
		// this.addClass("test");
		var testPage = this;

		View({tag: "section"}, function(){
			this.addClass("paper");
	
			View("Back").click(function(){
				testPage.route.parent.activate();
			});
	
			View.h1("test");
	
			View(function(){
				this.addClass("auto-grid");
				testPage.route.each(function(route){
					View(function(){
						this.addClass("flex test-item " + route.part);
						View(route.part);
						View.Icon("angle-right");
						this.click(function(){
							route.activate();
						});
					})
				});
			});
		});
	}
});