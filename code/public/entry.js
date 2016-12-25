require("./styles.less"); // --> styles.css, via npm "extract-text-webpack-plugin"
require("lorem");
require("./styles.less");
var Router = require("route42/Route3/Router3");

var view = require("view42");
var $ = require("jquery");

var test = require("test42");

var app = view.x(function(){
	var app = this;

	this.route = window.router = Router({
		// log: true
	});

	this.route.add("style")
	this.route.add("pkg42")
	var code = this.route.add("code")
		code.add("base42");
		code.add("log42");
		code.add("mod42");
		code.add("route42");
		code.add("test42");
		code.add("view42");
	this.route.add("topic")
	this.route.add("post")
	this.route.add("hire")
	this.route.add("me")

	// add routes
	var tests = require.context("../", true, /\.tests\.js$/);

	var test_route = this.route.add("test").then(function(){
		// load all
		// tests.keys().forEach(function(v){
		// 	tests(v);
		// });
	});


	var test_routes = function(requireContext, test_route) {
		var keys = requireContext.keys(), key;
		// console.log(keys);
		for (var i = 0; i < keys.length; i++){
			key = keys[i].replace("./", "").replace(".tests.js", "");

			test_route.add({
				name: key,
				path: key,
				label: key,
				key: keys[i],
				allowDefault: true,
				matchBeginning: true,
				expand: false
			}).then(function(){
				var route = this;
				this.remainder = this.remainder || [];
				test.route = this;
				// probably doesn't get captured anywhere...
				var v = view(function(){
					this.h3("Test: " + route.part);
					requireContext(route.key);
				});

				this.andThen(function(){
					return v.slideUp().$el.promise();
				});

				v.hide().appendTo("body").slideDown()
				return v.$el.promise();
			});
		}
		// keys.forEach(context); 
	};
	
	test_routes(tests, test_route);

	// collapses the /test/* routes
	test_route.each(function(route){
		route.expand = false;
	});

	this.route.matchAndActivate();
	this.route.render();
});

$(function(){
	app.prependTo("body").render();
});