//=====================Steam=====================

const fs = require('fs');
const server = require('http').createServer();

let fileName = './bobRossIpsumBig.txt';

server.on('request', (req, res) => {
    const fileStremHandle = fs.createReadStream(fileName);
    fileStremHandle.pipe(res);
});

server.listen(8080, ()=>{
  console.log('server is up');
});

// //=====================Chuck=====================
//
// const fs = require('fs');
// const server = require('http').createServer();
//
// let fileName = './bobRossIpsumBig.txt' ;
//
// server.on('request', (req, res) => {
//     fs.readFile(fileName, (err, data) => {
//         if (err) throw err;
//         res.end(data);
//     });
// });
//
// server.listen(8080, ()=>{
//     console.log('server is up');
// });
//

