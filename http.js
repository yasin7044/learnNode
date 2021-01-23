const http = require('http')
const { chunk } = require('lodash')
// const hostname = "127.0.0.1"
// const port = 3000

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader('content-type','text/plain');
//     res.end('Welcone to Http Server') //to help end resond process
// })

// server.listen(port,hostname,()=>{
//     console.log(`Server Running At http://${hostname}:${port}`)
// })
// console.log(http)
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
http.get('http://jsonplaceholder.typicode.com/todos/1',res=>{
    // console.log(res)'
    let data=''
    res.on('data',()=>{
        console.log(data)
    })
    res.on('end',()=>{
        console.log(data)
    })
})



