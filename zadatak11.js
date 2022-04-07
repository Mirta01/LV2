import * as http from 'http';
import * as fs from 'fs';

var filePath = "./osobe.json";
var nPort = 8000;

console.log('Pokretanje servera na portu '+nPort);

http.createServer(function(request, response)
{
    response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    response.write(fs.readFileSync(filePath));
    response.end();
}).listen(nPort);
