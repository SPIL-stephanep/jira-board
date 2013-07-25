var express = require('express'),
    app = express(),
    server = require('http')
        .createServer(app)
        .listen(8081);

app.get('/', function(req, res) {
    res.send('jira board');
});
