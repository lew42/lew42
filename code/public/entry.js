var Promise = require("promise-polyfill");

if (!window.Promise){
	window.Promise = Promise;
}

var App = require("app42");
var App2 = require("app42/App2");
var View = require("view42");
var Cols = require("grid").Cols;

var Logger = require("log42/v1");

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

		this.logr("hmm?");

		Header({
			app: this
		});

		this.main = View.Main();

		Footer();

		this.adminPanel = View(function(){
			View.Item({
				icon: "cubes",
				label: "ADMIN",
				btn: "close",
				behaviors: function(){
					this.btn.click(function(){
						app.adminPanel.hide();
					});
				}
			});
			this.contents = View(function(){
				// console.log("rendering global logger", app.logr.id);
				app.logr.render();
				// console.log("rendered global logger", app.logr.id);
			}).addClass("contents");
		}).addClass("admin-panel").appendTo("body");
	},
	logr: Logger()
});

app.logr.assignedTo(app, 'logr');