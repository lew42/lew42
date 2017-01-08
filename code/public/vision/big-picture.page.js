var View = require("view42");
var Page = require("page42");

module.exports = Page({ // or just Page(function(){}) ???
	content: function(){
		// subpage here?  Page({ route: "str" })  || test("str", fn(){})

		View.h1("Big Picture");

		View.p("On the universal timeline, World War II happened a few seconds ago.  After the end of which, segregation and racism ran rampant for decades.  Few people realize how close we are to another world war.  Or another black plague.");

		// I need sections...
		View.p("I need a new job.  It's crazy to think about the job market.  Where should I work?  What will I do there?  How much will I get paid?  When these questions are asked directly after the paragraph above, it really puts things into perspecive.");

		View.p("I want to make a company.");
		View.p("I want something to pass onto my children.");
		View.p("I want to make user interfaces + hardware.");
		View.p("HTML, CSS, and JavaScript are not the answer.");
	}
});