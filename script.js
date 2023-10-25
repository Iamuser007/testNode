const express = require('express');
const app = express();

const port = 3030;

app.get('/', (req, res) => {
	res.send('hello');
}).listen(port, () => {
	console.log('hey there');
})

module.exports = app;