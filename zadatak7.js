import dajSlucajanBroj from './slucajanBroj.js';

var aBrojevi = [];

while(aBrojevi.length != 200){
    aBrojevi.push(dajSlucajanBroj(150, 1500));
}

var max = aBrojevi[0];
var min = aBrojevi[0];

aBrojevi.forEach(function(broj) {
   if (broj > max) {
        max = broj;
   } 
   else if(broj < min){
        min = broj;
   }
});

console.log("Najveći broj je " + max + "\nNajmanji broj je " + min);