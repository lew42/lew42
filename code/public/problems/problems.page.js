var Page1 = require("page42");
var View = require("view42");

var pre = View.extend({
	tag: "pre"
})

module.exports = Page1({
	content: function(){
		View.h1("Web Problems");

		View.h3("ES6, Babel, JSX, transpiling, etc");

		View.h3("Lack of necessary features:");
		View("- Templating");
		View("- Persistence");
		View("- WYSIWYG");
		View("- Version control");
		View("- Routing");
		View("- Authentication");

		View.h3("Lack of focus");
		View.p("Everyone uses a different stack.  The 'leaders' (your TJs, googlers(osmani/sohrus/irish), that Babel guy, the npm guy, etc.)), aren't helping the problem.");

		View.p("Well, that's not completely true, but nobody is trying to simplify the industry to make it easier.  And, frankly, it's for the best.");

		View.p("If it were easy to make an awesome webapp, then web developers wouldn't be necessary.");
	}
});