var Page1 = require("page42");
var View = require("view42");

var $ = require("jquery");

var pre = View.extend({
	tag: "pre"
})

module.exports = Page1({
	deactivate: function(){
		$("html").removeClass("rem-test");
		return this.out();
	},
	content: function(){
		$("html").addClass("rem-test");
		View.h1("rem units");
		View.p("I think the problem here, is that we can't divide rem from em.  When we adjust rem, we adjust em.  But, we can adjust em without affecting rem... The problem is, to have a hierarchical flow of adjusted sizing, (ie, have a root font-size of Xvw, and then for every width adjustment (aka columns), we adjust that rem...) That's the same as just adjusting em?");

		View.p("Is there a way to split ems and rems?  If you use rems for typography, so you always reset the typography back to root rem size, and then use ems for layouts.. I think that solves the problem.").css("padding", "3%");

		View.p("The challenge here, is that any time 'em' are used, they'll be scaled proportionally to the viewport.  Also, we can't use px for font-sizing... It has to be rem.").css("padding", "3rem");

		View(function(){
			this.addClass("cols two");
			$(window).resize(()=>{
				if (this.$el.width() < 800){
					this.addClass("break");
				} else {
					this.removeClass("break");
				}
			});
			View().filler("2-4p").addClass("p-2em")
			View().filler("2-4p").addClass("p-2em")
		});
	}
});