const http = require("http");

const data = require("./data/inventory");

http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {"Content-Type": "text/json"});
        res.end(JSON.stringify(data));
    }
    else if(req.url === '/instock'){
        res.writeHead(200, {"Content-Type": "text/json"});
        let inStock = data.filter(item => {
            return item.avail === 'In stock';
        })
        res.end(JSON.stringify(inStock));

    }
    else if(req.url === '/onorder'){
        res.writeHead(200, {"Content-Type": "text/json"});
        let onOrder = data.filter(item => {
            return item.avail === 'On backorder';
        })
        res.end(JSON.stringify(onOrder));

    }

}).listen(3000);

console.log("Server listening on port 3000");
