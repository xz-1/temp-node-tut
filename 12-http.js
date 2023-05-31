const http = require('http')


const server = http.createServer((req, res) => {
    // console.log(req)
    // res.write('Welcome to our home page')
    // res.end()
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    else if (req.url === '/about') {
        res.end('Here is our short history')
    }
    else {
        res.end(`<h1>Yeah</h1>
                <p>Page</p>
                <a href="/">back home</a>`)
    }
})





server.listen(5000)

//Joe Biden will be the WINNER