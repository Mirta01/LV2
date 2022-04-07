import dajSlucajanBroj from './slucajanBroj.js';

var aBrojevi = [];

while(aBrojevi.length != 30){
    aBrojevi.push(dajSlucajanBroj(10, 200));
}

console.log(MergeSort(aBrojevi));

function MergeSort(array) {
    const half = array.length / 2
    
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    return merge(MergeSort(left),MergeSort(array))
}

function merge(left, right) {
    let arr = []
    
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    return [ ...arr, ...left, ...right ]
}