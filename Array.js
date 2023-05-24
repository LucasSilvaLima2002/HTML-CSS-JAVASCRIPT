let array = [2,31,123,12,6,23]

array.sort(function(a,b){
    return a - b;
})
array.push(1)

array.splice(1,2,10)

/*for (let valor in array) {
    console.log(`O valor atual é ${valor} e o indice é ${array[valor]}`);
}*/

const obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
  console.log(key); // Imprime: "a", "b", "c"
}

const array2 = [1, 2, 3];

for (let value of array2) {
  console.log(value); // Imprime: 1, 2, 3
}