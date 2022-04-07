var aPolje = [];
var i = 7;


while (aPolje.length < 50)
{
    if (i % 7 == 0) {
        aPolje.push(i);
    }
    i++;
}

var aParniBrojevi = [];

aPolje.forEach(function(broj) 
{
    if(broj % 2 == 0)
    {
        aParniBrojevi.push(broj);
    }
});

console.log(aParniBrojevi);