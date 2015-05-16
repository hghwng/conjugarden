var http = require('http');
var url = require('url');
var fs = require('fs');

var g_data;
fs.readFile('data.json', 'utf8', function(err, str) {
	if (err) g_data = null;
	g_data = JSON.parse(str);
});

function show_word(key, resp)
{
	var info = g_data[key];
	resp.writeHead(200, { 'Content-Type': 'application/json' });
	if (info == undefined) {
        resp.write('{}');
    } else {
        resp.write(JSON.stringify(info));
    }
	resp.end();
}

var server = http.createServer(function(req, resp) {
	req_url = url.parse(req.url, true);

	if (req_url.query['action'] == 'quiz') {

		var keys = Object.keys(g_data);
		var key = keys[Math.floor(Math.random() * keys.length)];
		show_word(key, resp);

	} else if (req_url.query['action'] == 'query') {

		var key = req_url.query['word'];
		show_word(key, resp);

	} else {

		resp.writeHead(200, { 'Content-Type': 'text/html' });
		fs.createReadStream('./assets/index.html').pipe(resp);

	};
});
server.listen(8080);
