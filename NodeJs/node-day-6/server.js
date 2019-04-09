const net = require('net');
const fs = require('fs');

let clientArray = [];
let counter = 0;
let chatLog = [];


let server = net.createServer(client => {
    counter++;
    client.chatUserNumber = counter;
    clientArray.push(client);
    client.setEncoding('utf8');
    client.write(`Welcome to the chat\n`);
    fs.appendFile('./chatLog.txt', `Server: Welcome to the chat\n`);

    clientArray.forEach(user => {
        if(clientArray.length === 1){
            chatLog.push(`Guest${client.chatUserNumber}: has joined`);
            console.log(chatLog);
            fs.appendFile('./chatLog.txt', `Guest${client.chatUserNumber}: has joined\n`);

        }if(user !== client){
            user.write(`Guest${client.chatUserNumber}: has joined`);
            console.log(chatLog);
            fs.appendFile('./chatLog.txt', `Guest${client.chatUserNumber}: has joined\n`);

        }
    });

    client.on('data', data =>{
        clientArray.forEach(user => {
            if(user !== client){
                user.write(`Guest${client.chatUserNumber}: ${data}`);
                chatLog.push(`Guest${client.chatUserNumber}: ${data}`);
                console.log(chatLog);
                fs.appendFile('./chatLog.txt',`Guest${client.chatUserNumber}: ${data}`);
            }else{
                fs.appendFile('./chatLog.txt',`Guest${client.chatUserNumber}: ${data}`);
            }
        });

    });

    client.on('close', () => {
        console.log(clientArray.length);
        clientArray.splice((client.chatUserNumber-1), 1);
        console.log(clientArray.length);
        clientArray.forEach(user => {
            if(user !== client){
                user.write(`Guest${client.chatUserNumber}: had left`);
                chatLog.push(`Guest${client.chatUserNumber}: had left`);
                console.log(chatLog);
                fs.appendFile('./chatLog.txt', `Guest${client.chatUserNumber}: had left\n`);
            }
        });

    });



}).listen(5000);

console.log('Listening on port 5000');


