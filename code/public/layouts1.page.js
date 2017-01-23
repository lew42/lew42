var Page = require("page42");
var View = require("view42");

require("./layout-tests.less");

var LayoutTest = View.extend({
	name: "LayoutTest"
})

module.exports = Page(function(){
	this.addClass("layout-test-page");

	LayoutTest(function(){
		var grid;
		View.h3(".grid").click(function(){
			grid.toggleClass("break");
		});
		grid = View(function(){
			this.addClass("grid");
			View("left");
			View("right");
		})
	});

	LayoutTest(function(){
		var grid;
		View.h3(".grid.three").click(function(){
			grid.toggleClass("break");
		});
		grid = View(function(){
			this.addClass("grid three");
			View("left");
			View("center");
			View("right");
		});
	});

	LayoutTest(function(){
		var grid;
		View.h3(".grid > .third/.thirds").click(function(){
			grid.toggleClass("break");
		});
		grid = View(function(){
			this.addClass("grid");
			View("left").addClass("third");
			View("right").addClass("thirds");
		});
	});

	LayoutTest(function(){
		var grid;
		View.h3(".grid > .thirds/.third").click(function(){
			grid.toggleClass("break");
		});
		grid = View(function(){
			this.addClass("grid");
			View("left").addClass("thirds");
			View("right").addClass("third");
		});
	});


});