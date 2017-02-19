var Page = require("page42");
var View = require("view42");

var Section = View.extend({
	tag: "section",
	name: "Section"
});
Section.prototype.$el.removeClass("section");

var Paper = Section.extend({
	name: "Paper"
});

var Content = View.extend({
	name: "Content"
})

var logo = require("./lew.logo.svg.str.js");
var $ = require("jquery");
var $logo = $(logo)

module.exports = Page({ name: "home" }, function(){
	var app = this.app;
	Paper(function(){
		View(function(){
			this.addClass("content-squeeze");
			View.h1("lew42");
			View.p("This website is powered by a jQuery-based, webpack-bundled, front-end-framework that I built-myself.").addClass("intro");
		});
	});

	// Paper(function(){
	// 	View(function(){
	// 		this.addClass("content-squeeze");

	// 		View.h3("Maybe this should stay white");
	// 	});
	// });

	View(function(){
		this.addClass("bg-orange");

		View(function(){
			this.addClass("auto-grid llh");

			View(function(){
				View.h2("easy")
			});
			View(function(){
				View.h2("peasy");
			});
			View(function(){
				View.h2("framework");
			});
		});
	});

	View(function(){
		this.addClass("split-wrap");
		Paper(function(){
			this.addClass("split");
			View(function(){
				this.addClass("auto-grid");
				View(function(){
					View.h3("It's a work in progress");
					View.p("So don't look too closely.  I've been fighting to make flexbox work, with mixed results.");
				});
				View(function(){
					View.h3("4k monitors, anyone?");
					View.p("I really want a monitor with 4k resolution (but I don't have one yet).  What does that mean for responsive web design?");
				});
			});
		});
	});

	Paper(function(){
		this.addClass("nuts");
		View(function(){
			this.addClass("content-squeeze")
			View.h3("TODO").addClass("tt-u ta-c");
			View.Ul(function(){
				View.Li("Build a proper TODO system, version controlled and everything");
				View.Li("Just writing a list might be enough..");
				View.Li("Move track inside a real .config fn.  Base and BasicMods don't need to be tracked...  Having a real .track method that can be overridden will be helpful for displaying new modules.");
			});
		});
	});

	View(function(){
		this.addClass("split-fire global-squeeze");

		View(function(){
			this.addClass("auto-grid");

			View(function(){
				this.addClass("dark-card");

				View.h3("Employment Status:").addClass("orange");
				View.h3("Unemployed").addClass("white");

				// View.p("But, with a little TLC, it should work pretty well").css("color", "#ccc");

				// View("Button in orange, text in white").addClass("btn");
			});

			View(function(){
				this.addClass("right");

				View(function(){
					this.addClass("inner");
					View.h3("The best decision you'll ever make.");

					View(function(){
						this.addClass("tar");
						View("Hire me &nbsp;&nbsp;", View.Icon("angle-right").removeClass("fa-fw")).addClass("cta");
					});
				});

			});
		});
	});
});