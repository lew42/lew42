#!/usr/bin/env node
// #!/usr/bin/env node --inspect --debug-brk

var path = require("path");
// var globule = require('globule');


var cwd = process.cwd();
console.log('cwd:', cwd);
console.log("filename", __filename);
console.log("dirname", __dirname);


var config = {
	context: cwd,
	devtool: 'inline-source-map',
	entry: path.resolve(__dirname, "entry.js"),
	output: {
		path: path.resolve(__dirname),
    	filename: "bundle.js"
  	}
};

process.chdir(cwd);

var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

var compiler = webpack(config, function(err, stats){
	// debugger;
});

var server = new WebpackDevServer(compiler, {
	inline: true,
	contentBase: __dirname
});

server.listen(8080, "localhost");