var View = require("view42");
var Page = require("page42");

module.exports = Page({ // or just Page(function(){}) ???
	content: function(){
		// subpage here?  Page({ route: "str" })  || test("str", fn(){})

		View.h1("The Vision");

		View.p("I'm going to reveal some truths about software development.  You probably already know these things, they're not new, or debatable really.  The thing is, nobody has collected them into a single place to say, hey, here's the problem(s), let's fix them.");

		View.p("I'm not really happy about exposing these things, so blatantly.  If there's one thing I learned from business school, it's the concept of a competitive advantage.  By sharing your competitive advantage with the community, you throw away your advantage and level the playing field.");

		View.p("I'm doing this because I need to be persuasive, and generate momentum.  Once I get a certain amount of momentum, I'll pull this information.  I don't think it should take long to realize that the truth in this vision.  But, I've been saying these things for years, with no success.  Mostly in separate, unorganized venues, so I'm not surprised nobody has taken me seriously.")
	}
});