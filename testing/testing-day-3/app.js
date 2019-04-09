const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.status(200).send('hello world!')
});

app.get('/test', (req, res) =>{
    res.status(500).send({'message': 'an error has occurred!'});
});

let server = app.listen(3000, () => {
    console.log('listening on port 3000')
});

module.exports = server;