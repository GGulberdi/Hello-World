var http = require ('http');

const host='localhost';
const port=5000;
let student= 'This is Student Page'
let admin="This is Admin Page"

var server = http.createServer(function(req, res){
    // res.writeHead(200, {'Content-type':'text/plain'});
    res.writeHead(200,{'Content-Type':'Application/json'})

    switch(req.url){
    case '/':
    res.writeHead(200)
    res.end('This is Home PAge');
    break;
    case '/student':
    res.writeHead(200)
    res.end(student);
    break
    case '/admin':
    res.writeHead(200)
    res.end(admin);
    break
    case '/data':
    res.writeHead(200)
    res.write(JSON.stringify({ message: "This is a message from web server!"}))
    res.end();
    break
    default:
            res.writeHead(404);
        res.end(JSON.stringify({error:'Resourse not found'}))
    }
})

//Listen the server
server.listen(port,host,()=>{
    console.log(`Server is running on http://${host}:${port}`)
});

