import dajSlucajanBroj from './slucajanBroj.js';

var aBrojevi = [];
var parni = 0;

while(aBrojevi.length != 100){
    aBrojevi.push(dajSlucajanBroj(50, 5000));
}

aBrojevi.forEach(function(broj) {
   if (broj % 2 ==0) {
       parni++;
   } 
});

console.log("Polje ima " + parni + " parnih brojeva.");