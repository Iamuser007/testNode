const http = require('http');
const app = require('./script.js');

function server(){
	http.createServer(app);
};

server();

module.exports = server;