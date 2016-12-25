/*
Beginner stuff is a great time to use expandable sections.
1)  Try to articulate well, but summarize the concept.
2)  If you don't understand, click to expand.


Link To:
Beginner's introduction to JavaScript
1) Variable types
2) Control statements: functions, conditionals
3) Logic: conditionals, comparisons

Team Treehouse:  If you'd like some additional training... but honestly I wouldn't recommend it.  

*/


// // 1
// var fn = function(){};

// // 2
// var obj = new fn();

// console.log(obj);
// typeof obj;
// for (var i in obj){
// 	console.log(i);
// }

// // 3
// var Constructor = function(){};

// // 4
// var instance = new Constructor();

// // 5
// var Product = function(){};

// // 6
// var product = new Product();

/*
A constructor is like a factory that makes `new` objects.
[Visualize a factory with a conveyor belt that delivers new ____] or
[Creature-like factory, and when you extend your hand ("asking for a new instance", )]
*/


// really, before making .extend and .init, it should just be:

var B = function(){};
B.prototype.property = 5;
B.prototype.method = function(){};

var Ext = function(){};
Ext.prototype = Object.create(B.prototype); // unnecessary, if B is always blank.  But, then you don't need a base class... we're assuming we want to add something to it...
Ext.prototype.constructor = Ext;


// and then...


var Base = function(){
	this.init();
	// and then...
	this.init.apply(this, arguments);
};

Base.extend = function(){
	var Ext = function(){};
	Ext.extend = this.extend;
	Ext.prototype = Object.create(this.prototype);
	Ext.prototype.constructor = this;
	return Ext;
};

Base.prototype.init = function(){};

module.exports = Base;