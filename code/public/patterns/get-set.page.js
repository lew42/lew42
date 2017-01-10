var Page1 = require("page42");
var View = require("view42");

var pre = View.extend({
	tag: "pre"
})

var get_set = module.exports = Page1({
	content: function(){
		View.h1("Get/Set Pattern");

		View("page.name:" + this.name);

		View({
			tag: "pre",
			content: 
						"obj.something() // --> returns\n"+
						"obj.something('value') // --> set"
		});

		View.p("Can be implemented with a standard function:");

		pre("obj.something = function(value){\n" + 
			  "\tif (is.def(value)){\n" + 
			  "\t\tthis._something = value;\n" +
			  "\t}\n" +
			"}");

		View.h2("Bleh - that will get old fast..");

		View.p("Just use github gists - code formatting, editing, version control, forking, comments @ github, etc...");
	}
});