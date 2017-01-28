var Page = require("page42");
var View = require("view42");

require("../background.less");

module.exports = Page(function(){
	this.addClass("tools-page");

	View.h1("Toolbox");

	View.p("Evernote, Spotify, Sublime, LESS, git/github, Echo, ...?");

	View.p("Somewhere in the Evernote page, talk about my note taking madness?");

	View.p("I need sub pages...  Having to create a real page will just get ridiculously bloated.  And, I should probably make JSON for managing the sub pages, to be sure to loop through the data, rather than copy+paste");
});