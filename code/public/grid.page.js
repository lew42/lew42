var Page = require("page42");
var View = require("view42");

require("./background.less");
require("./grid-page.less");

var LayoutTest = View.extend({
	name: "LayoutTest"
});

var Switch = View.extend({
	autoRender: false,
	name: "Switch",
	content: function(){
		this.append(this.name);
		this.click(function(){
			this.clicker();
			this.switches.update();
		}.bind(this));
	},
	update: function(){
		if (this.switches.subject.hasClass(this.name))
			this.addClass("active");
		else 
			this.removeClass("active");
	},
	clicker: function(){
		this.switches.subject.toggleClass(this.name);
		this.switches.subject.removeClass(this.removals);
	}
})

var Switches = View.extend({
	name: "Switches",
	content: function(){
		if (!this.subject)
			console.error("no subject");

		for (var i = 0; i < this.switches.length; i++){
			this.switches[i].switches = this;
			this.switches[i].render();
		}
	},
	update: function(){
		for (var i = 0; i < this.switches.length; i++){
			this.switches[i].update();
		}
	}
})

var Section = View.extend({
	tag: "section",
	name: "Section"
});

var Paper = View.extend({
	tag: "article",
	name: "Paper"
});

var PaperTpl = Paper.extend(function(){
	// View.h3().filler("1s");
	// View.p().filler("2-4s");
});

var Cols = Section.extend({
	name: "Cols",
	addClass: "cols-2",
	make: function(n, arg){
		for (var i = 0; i < n; i++){
			this.addItem(arg);
		}
	},
	main: function(){
		this.removeClass("cols");

		if (this.doSwitches){

			this.switches = Switches({
				subject: this,
				switches: [
					Switch({ name: "one", removals: "two three four" }),
					Switch({ name: "two", removals: "one three four" }),
					Switch({ name: "three", removals: "one two four" }),
					Switch({ name: "four", removals: "one two three" }),

					Switch({ name: "limit" }),
					Switch({ name: "break" }),
				]
			});

			this.switches.$el.insertBefore(this.$el);

			View("add").addClass("switch").click(function(){
				this.addItem();
			}.bind(this)).prependTo(this.switches.$el)
		}

		this.content();
	},
	addItem: function(arg){
		var item = View(arg, function(){
			PaperTpl();
		}).appendTo(this.$el);
		item.click(function(){
			item.remove();
		});
	}
});

var Grid = Section.extend({
	name: "Grid",
	addClass: "grid-2 naked",
	removeClass: "grid",
	make: function(n, arg){
		for (var i = 0; i < n; i++){
			this.addItem(arg);
		}
	},
	main: function(){
		this.removeClass("grid");

		this.switches = Switches({
			subject: this,
			switches: [
				Switch({ name: "one", removals: "two three four" }),
				Switch({ name: "two", removals: "one three four" }),
				Switch({ name: "three", removals: "one two four" }),
				Switch({ name: "four", removals: "one two three" }),
				
				Switch({ name: "limit" }),
				Switch({ name: "space" }),
				Switch({ name: "pad" }),
			]
		});

		this.switches.$el.insertBefore(this.$el);

		View("add").addClass("switch").click(function(){
			this.addItem();
		}.bind(this)).prependTo(this.switches.$el)

		this.content();
	},
	addItem: function(arg){
		var item = PaperTpl(arg).appendTo(this.$el);
		item.click(function(){
			item.remove();
		});
	}
});

module.exports = Page(function(){
	this.addClass("grid-page stack-c-2rem").removeClass("grid");

	Section(function(){
		this.addClass("global-squeeze paper");

		View.h1("Cols");
		Cols({
				doSwitches: true
			},
			function(){
				this.make(5);
		});

		View.h1(".grid-2.naked");

		Grid(function(){
			// this.addClass("global-squeeze");
			this.make(5);
		});


		View.h1(".cols-2 nested");

		Cols(function(){
			Cols(function(){
				this.make(2, {
					addClass: "min-10"
				});
			});
			Cols(function(){
				this.make(2, {
					addClass: "min-20"
				});
			});
		});
		
	});

});