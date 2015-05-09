var http = require('http');
var url = require('url');
var fs = require('fs');

var g_data;
fs.readFile('data.json', 'utf8', function(err, str) {
	if (err) g_data = null;
	g_data = JSON.parse(str);
});

var server = http.createServer(function(req, resp) {
	req_url = url.parse(req.url, true);

	if (req_url.query['action'] == 'quiz') {
		var keys = Object.keys(g_data);
		var key = keys[Math.floor(Math.random() * keys.length)];
		var info = g_data[key];
		resp.writeHead(200, { 'Content-Type': 'application/json' });
		resp.write(JSON.stringify(info));
		resp.end();
	} else {

		resp.writeHead(200, { 'Content-Type': 'text/html' });
		fs.createReadStream('./assets/index.html').pipe(resp);
	};
});
server.listen(8080);
