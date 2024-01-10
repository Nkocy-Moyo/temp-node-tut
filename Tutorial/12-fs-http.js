const http = require('http');

//create server
const server = http.createServer((req, res) => {
    // res.write('Welcome to our home page')
    // res.end()
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }else if(req.url === '/about'){
        res.end('Here is our short history')
    }else{
    // This is not advisable but it is possible
        res.end(`<h1>Opps</h1>
            <p>We cant seem to find the page you are looking for</p>
            <a href="/">Home Page</a>`)
    }
})

//setup port we will listen to
server.listen(5000)