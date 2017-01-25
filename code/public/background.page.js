var Page = require("page42");
var View = require("view42");

require("./background.less");

var LayoutTest = View.extend({
	name: "LayoutTest"
})

module.exports = Page(function(){
	this.addClass("background-page")

	View(function(){}).addClass("inner");

	View(function(){
		this.addClass("s-one grid three pad-c ");

		View(function(){
			View.h1("I need to hurry up.");
		});

		View(function(){
			View.h1("Not sure if I should end a title with a period")
		});

		View(function(){
			View.h1("What else can I do here?")
		});
	});

	View(function(){
		this.addClass("s-two p-centered");

		View.h1("Let's hope this is padded properly");
		View.p().filler("2-4s");

		View(function(){
			this.addClass("grid three spaced zg");

			View(function(){
				View.Icon("beer").addClass("fa-3x");
				View.h3().filler("3-5w");
				View.p().filler("1-3s");
			});

			View(function(){
				View.Icon("camera-retro").addClass("fa-3x").css("float", "left");
				View.h3("Remember");
				View.p("I can put any FontAwesome icon behind the contents.  Just use z-indexes and :before pseudo selector, like FA does.");
			});

			View(function(){
				View.Icon("bank").addClass("fa-3x");
				View.h3().filler("3-5w");
				View.p().filler("1-3s");
			});
		});
	});

	View(function(){
		this.addClass("s-three");

		View(function(){
			this.addClass("dark-card");

			View.h3("First message in orange").addClass("orange");
			View.h3("Second message in white").addClass("white");

			View("Button in orange, text in white").addClass("btn");
		});
	});
});