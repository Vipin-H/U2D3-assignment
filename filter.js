let arr = [1, 2, 3, 4, 5]; //input assigned in form of array

//take the input & give output of only even numbers by using filter operation
let out = arr.filter(function(ele){
    return ele%2 == 0;
}) // arr.filter(function(ele){ -> takes input from array named arr, each element is taken into function & performs operation declared inside function, returns value to variable out

//print the value stored in variable out
console.log(out);