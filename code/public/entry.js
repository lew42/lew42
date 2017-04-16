var Promise = require("promise-polyfill");

if (!window.Promise){
	window.Promise = Promise;
}

var $ = window.$ = require("jquery");


// require("less42"); // if you want better control over order - don't just suck it all in at once...
// we can @import it in pieces, within styles.less
require("../css/styles.less");

var App2, View, homepage, Header, Footer; 

App2 = require("app42/App2");
View = require("view42/v8");
homepage = require("./homepage");
Header = require("./header.js");
Footer = require("./footer.js");

var app = App2({
	name: "app",
	home: homepage,
	init: function(){
		this.loadPages(require.context("./", true, /\.page\.js$/), "page");
	},
	content: function(){
		var app = this;
		this.removeClass("app app2 page").attr("id", "app").attr("class", null);

		Header({
			app: this
		});

		this.mainer = View.Main();

		Footer();

		this.adminPanel = View(function(){
			this.tabs = View({
				content: function(){
					this.btn = View("close");
					this.icon = View("full");
					this.browse = View("browse");
					this.log = View("log");
				},
				behaviors: function(){
					this.btn.click(function(){
						app.adminPanel.hide();
					});
					this.icon.click(function(){
						app.adminPanel.toggleClass("fullscreen");
					});

					this.browse.click(function(){
						app.adminPanel.contents.hideAll();
						app.adminPanel.contents.browse.show();
					});
					this.log.click(function(){
						app.adminPanel.contents.hideAll();
						app.adminPanel.contents.log.show();
					});
				}
			}).addClass("tabbies");
			this.contents = View({
				content: function(){
					this.browse = View();
					this.log = View();
				},
				hideAll: function(){
					this.browse.hide();
					this.log.hide();
				}
			}).addClass("contents");

			this.contents.hideAll();
			this.contents.browse.show();
		}).addClass("admin-panel").appendTo("body");
	}
});

var track = require("track42");
track.app = app;

var Logger = require("log42/v4");
Logger.prototype.app = app;