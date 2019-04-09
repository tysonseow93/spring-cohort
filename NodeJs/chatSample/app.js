const path = require('path');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 4000;

app.use('/', express.static(path.join(__dirname, 'public')));

// app.get('/',  (req, res) => {
//     res.sendFile(__dirname +'/public/index')
// });

let clientCount = 0;
io.on('connection', (socket) => {
    clientCount++;
    console.log(`connected ${clientCount}`);
    const addedClient = false;

    // Listens and handle the 'new message' event

    socket.on('disconnect', () =>{
        clientCount--;
        console.log(`a user disconnected. Total ${clientCount}`);

    });
    socket.on('new message', (data) => {
        console.log(`message ${data}`);
        // we tell the client to execute 'new message'
        socket.broadcast.emit('new message', {
            message: data
        });
    });

});



http.listen(port, () => {
    console.log(`listening of port ${port}`)
});