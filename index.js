var kue = require('kue');
var express = require('express');
var ui = require('kue-ui');
var app = express();

// connect kue to appropriate redis, or omit for default localhost
kue.createQueue({
	redis: 'redis url',
	prefix: 'que_'
});

ui.setup({
	apiURL: '/api', // IMPORTANT: specify the api url
	baseURL: '/kue', // IMPORTANT: specify the base url
	updateInterval: 1000 // Optional: Fetches new data every 5000 ms
});

// Mount kue JSON api
app.use('/api', kue.app);
// Mount UI
app.use('/kue', ui.app);

app.listen(3000);
