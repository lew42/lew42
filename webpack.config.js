var globule = require("globule");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// all LESS stylesheets, imported via require("./something.less"), 
// will be bundled into a single /code/public/styles.css
var extractLESS = new ExtractTextPlugin("styles.css");

// create an entry point for any file ending in 'entry.js'
var entry = {};

/*  Examples

Matched files, their entry names, and their output path/filename.bundle.js:

1) ./code/public/entry.js (default entry point)
--> entryName:  ""   // strips "entry.js" and "./code/public", see file search below
--> output.path + entryName + output.filename  ("output" is given to module.exports below)
--> ./code/public/ + "/" + bundle.js
==> ./code/public/bundle.js

2)  ./code/public/path/to/entry.js
-->  entryName: "/path/to/"
==> ./code/public/path/to/bundle.js

3)  ./code/public/something.entry.js
-->  entryName: "/something."
==> ./code/public/something.bundle.js

4) 	./code/public/path/to/something.entry.js
-->  entryName: "/path/to/something."
==> ./code/public/path/to/something.bundle.js

*/
var files = globule.find("./code/public/**/*entry.js").forEach(function(filePath){
	var entryName = filePath
			.replace("entry.js", "")
			.replace("./code/public", "");

	entry[entryName] = filePath;
});

module.exports = {
	// devtool: "inline-source-map",
	entry: entry,
	output: {
		path: "./code/public/",
		filename: "[name]bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.less$/,
				loader: extractLESS.extract("css-loader?sourceMap!less-loader?sourceMap")
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader?limit=20000&mimetype=application/font-woff&name=/[hash].[ext]"
			},
			{
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "file-loader"
			}
		]
	},
	plugins: [
		extractLESS
	]
};