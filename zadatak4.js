var sum = 0;
var num = [];


var i = 1;

while(num.length != 100)
{
    if(i % 2 != 0){
        sum += i;
        num.push(i);
        console.log(sum);
        console.log("ima ih " + num.length);
    }
    i++;
}