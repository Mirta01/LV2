import dajSlucajanBroj from './slucajanBroj.js';
import * as http from 'http';

var str = "";
var nBroj = 0;

for (let index = 0; index < 10; index++)
{    
    nBroj = dajSlucajanBroj(10, 100);
    str += String( nBroj + "\n" )
}

var nPort = 8000;
console.log('Pokretanje servera na portu '+nPort);
http.createServer(function(request, response)
{
response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
response.write(str);
response.end();
}).listen(nPort);
