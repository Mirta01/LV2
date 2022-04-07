import dajSlucajanBroj from './slucajanBroj.js';

var aBrojevi = [];

while(aBrojevi.length != 3){
    aBrojevi.push(String(dajSlucajanBroj(10, 100))
        .split('')
        .map(Number).pop());
}

console.log(aBrojevi);
if (aBrojevi[0] == aBrojevi[1] || aBrojevi[0] == aBrojevi[2] || aBrojevi[1] == aBrojevi[3])
{
    console.log("\x1b[32m%s\x1b[0m", "true");
}
else
{
    console.log("\x1b[31m%s\x1b[0m", "false");
}
 


