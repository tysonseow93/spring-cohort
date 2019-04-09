const http = require('http');
const fs = require('fs');
const path = require('path');

let server = http.createServer((req, res)=>{

    if(req.url === "/"){
        fs.readFile('./public/index.html', 'utf8', (err, html) =>{
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(html);
        });
    }
    else if(req.url.match(/.css$/)){
        let cssPath = path.join(__dirname, 'public', req.url);
        let fileStream = fs.createReadStream(cssPath, 'utf8');

        res.writeHead(200, {'content-type': 'text/css'});
        fileStream.pipe(res);

    }
    else if(req.url.match(/.jpg$/)){
        let jpgPath = path.join(__dirname, 'public', req.url);
        let fileStream = fs.createReadStream(jpgPath);

        res.writeHead(200, {'content-type': 'image'});
        fileStream.pipe(res);
    }
    else{
        res.writeHead(404, {'content-type': 'text/plain'})
        res.end('404 file not found')
    }



}).listen(3000);

console.log(`listening on port ${server.address().port}`);