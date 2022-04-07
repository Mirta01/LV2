var broj = 1;

do{
    if (broj % 5 == 0 && broj % 7 == 0) {
        console.log('Broj '+ broj + ' je je djeljiv sa 5 i 7\n');
    }
    else if (broj % 5 == 0) {
        console.log('Broj '+ broj + ' je je djeljiv sa 5\n');
    }
    else if(broj % 7 == 0) {
        console.log('Broj '+ broj + ' je je djeljiv sa 7\n');
    }
    broj++;
}while (broj != 100);

console.log("Kraj");