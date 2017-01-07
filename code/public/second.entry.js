var App = require("app42");

var Cols = require("grid").Cols;

var $ = window.$ = require("jquery");

var homepage = require("./homepage");
var AppView = require("./AppView");

var app = App({
	home: homepage,
	init: function(){
		this.loadPages(require.context("./", true, /\.page\.js$/));
	},
	render: function(){
		this.view = AppView({
			app: this
		});
	}
});