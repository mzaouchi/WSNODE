const fs = require('fs')

// console.log('Start')
// fs.readFile('./test.txt','utf8',function(err,data){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })
// console.log('Finish')
// fs.readFile('./test.txt',function(err,data){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data.toString())
//     }
// })

// console.log('Start')
// console.log(fs.readFileSync('./test.txt','utf8'))
// console.log('Finish')

const http = require('http')

http.createServer((req,res)=>{
    res.write('<h1>Assad</h1>')
    res.end()

}).listen(5000, console.log('Server is running'))