var net = require('net');
var HOST = '127.0.0.1';
var PORT = 6969;
var stdin = process.openStdin()
var client = new net.Socket();
client.connect(PORT, HOST, function() {
   console.log('CONNECTED TO: ' + HOST + ':' + PORT);
   stdin.addListener('data', (a) => {
    client.write(a.toString().trim());
   })
});

client.on('data', function(data) {
   console.log('DATA: ' + data);
   if(data == 'Bingo'){
    client.destroy()
   }
  
});

// Add a 'close' event handler for the client socket
client.on('close', function() {
   console.log('Connection closed');
});
