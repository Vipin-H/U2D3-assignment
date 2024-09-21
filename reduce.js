let num = [5, 10, 15]; //input aassigned in form of array

//reduce function is perfromed to sum all values in array to reduce to single value

let out = num.reduce(function(acc, elem){
    return acc + elem;
},0)
//In above code, num.reduce(function(acc, elem){ -> it will take single value from array named num and add each values with accumulator where accumulator assigned with initial value },0)  and all total sum is returned to variable out

//Print the value stored in variable out
console.log(out); //output : 30