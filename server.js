var net = require('net')
var HOST = '127.0.0.1'
var PORT = 6969
var n = 0
var answer = Math.floor(Math.random() * 3);
net.createServer((sock) => {
    console.log('Connected: ' + sock.remoteAddress + ':' + sock.remotePort)
    sock.on('data', (data) => {
        if(n==0){
            sock.write('OK')
            n++
        }
        else if(n > 0 && n < 6){
            if(data == answer){
                sock.write('Bingo')
                console.log(answer)
                sock.on('close',(data) => {
                    console.log(data)
                    n=0;
                })
                
            }
            else{
                sock.write('Wrong')
                n++
            }
        }
       
    })
}).listen(PORT, HOST)
console.log('Server listening')