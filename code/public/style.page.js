var View = require("view42/v8");
var Page = require("page");
// var Page = require("page42");

var P = View.P, Img = View.Img, H1 = View.H1, H2 = View.H2, H3 = View.H3, H4 = View.H4, H5 = View.H5, H6 = View.H6, Button = View.Button, Section = View.Section, Article = View.Article, Main = View.Main, Nav = View.Nav, Header = View.Header, Footer = View.Footer, Menu = View.Menu, Pre = View.Pre, Code = View.Code, Ul = View.Ul, Ol = View.Ol, Li = View.Li, Em = View.Em, Strong = View.Strong, Span = View.Span, Blockquote = View.Blockquote;

module.exports = Page({
	title: "Styles",
	desc: "Style guide, take 1.",
	content: function(){
		var sub = this.addSubPage("sub", Page({
			title: "Sub",
			desc: "This is a sub page.",
			content: function(){
				View({
					one: View("one"),
					two: View("two")
				})
			}
		}));

		H1("Sub").click(function(){
			sub.activate();
		});
	}
});