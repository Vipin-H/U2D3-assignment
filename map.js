let inp = [1, 2, 3, 4]; //input is in form of array

//assigning map function to variable out
let out = inp.map(function(elem){
    return elem*2;
}) //inp.map(function(elem)) -> takes each element of array named inp, enters into function, starts performing action inside function & returns value to variable out 

//prints the value stored in form of array in variable out
console.log(out);