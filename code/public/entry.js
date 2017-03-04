var Promise = require("promise-polyfill");

if (!window.Promise){
	window.Promise = Promise;
}
var Logger = require("log42/v1");
var log = window.log = Logger({
	adopt: false,
	globalLogger: true,
});
log.becomeCaptor();
log.group("entry.js", function(){


var App = require("app42");
var App2 = require("app42/App2");
var View = require("view42/v8");
var Cols = require("grid").Cols;


// require("less42"); // if you want better control over order - don't just suck it all in at once...
// we can @import it in pieces, within styles.less
require("../css/styles.less");

var $ = window.$ = require("jquery");

var homepage = require("./homepage");
var AppView = require("./AppView");

var Header = require("./header.js");
var Footer = require("./footer.js");

var app = App2({
	name: "app",
	home: homepage,
	init: function(){
		this.loadPages(require.context("./", true, /\.page\.js$/), "page");
	},
	content: function(){
		var app = this;
		this.removeClass("app app2 page").attr("id", "app").attr("class", null);

		this.log("hmm?");

		Header({
			app: this
		});

		this.mainer = View.Main();

		Footer();

		this.adminPanel = View(function(){
			View({
				content: function(){
					this.btn = View("close");
					this.icon = View("full");
				},
				behaviors: function(){
					this.btn.click(function(){
						app.adminPanel.hide();
					});
					this.icon.click(function(){
						app.adminPanel.toggleClass("fullscreen");
					});
				}
			});
			this.contents = View(function(){
				app.log.logger.appLogger = true;
				app.log.logger.label = "app-logger";
				log.render(true);
			}).addClass("contents");
		}).addClass("admin-panel").appendTo("body");
	}
});

var track = require("track42");
track.app = app;

// app.log.logger.becomeCaptor();


$(function(){
	app.log("document.ready");
});

});