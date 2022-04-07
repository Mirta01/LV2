import dajSlucajanBroj from './slucajanBroj.js';

var aBrojevi = [5,5,5];
var aBezPonavljanja = [];

while(aBrojevi.length != 50){
    aBrojevi.push(dajSlucajanBroj(1, 20));
}

for (let index = 0; index < aBrojevi.length; index++) {
    if (!aBezPonavljanja.includes(aBrojevi[index]))
    {
        aBezPonavljanja.push(aBrojevi[index]);
    }
}

console.log(aBrojevi);
console.log(aBezPonavljanja);