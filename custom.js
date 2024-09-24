const arr = [1, 2, 3, 4, 5]

//customMap
Array.prototype.customMap = function(callback) {
  const result = [];
  // 'this' refers to the array on which customMap is called
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this)); // push the result of callback into the result array
  }
  return result;
}


//customFilter
Array.prototype.customFilter = function(predicate) {
    const result = []; // Initialize an empty array to hold the filtered results
    for (let i = 0; i < this.length; i++) {
        if (predicate(this[i], i, this)) { // Check if the current element meets the condition
            result.push(this[i]); // If it does, add it to the result array
        }
    }
    return result; // Return the filtered array
};


//customReduce
// Adding customReduce method to Array's prototype
Array.prototype.customReduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
};



// Adding customSlice to Array prototype
Array.prototype.customSlice = function(start, end) {
    // Create a new array to hold the result
    let result = [];
    
    // If 'end' is not provided, set it to the array's length
    if (end === undefined) {
        end = this.length;
    }
    
    // Loop through the array from start to end and push the values to result
    for (let i = start; i < end; i++) {
        result.push(this[i]);
    }
    
    return result;
}


//customSplice
Array.prototype.customSplice = function (start, deleteCount, ...items) {
    let arrCopy = [...this];  // Create a shallow copy of the array
    let leftPart = arrCopy.slice(0, start);  // Get the part before the insertion point
    let rightPart = arrCopy.slice(start);    // Get the part after the insertion point
    return [...leftPart, ...items, ...rightPart];  // Return a new array with the items inserted
}



//customPush
Array.prototype.customPush = function(...args) {
    // Use a loop to push each argument to the array
    for (let i = 0; i < args.length; i++) {
        this[this.length] = args[i];
    }
    // Return the new length of the array
    return this.length;
}



//customPop
Array.prototype.customPop = function() {
    if (this.length === 0) {
        return undefined;  // return undefined if the array is empty
    }
    const lastElement = this[this.length - 1]; // get the last element
    this.length = this.length - 1;  // remove the last element from the array
    return lastElement;  // return the removed element
}

console.log(arr.customMap(x => x * 2)); 
console.log(arr.customFilter(x => x % 2 === 0));
console.log(arr.customReduce((acc, cur) => acc + cur, 0));


console.log(arr.customSlice(1, 3)); 
console.log(arr.customSplice(2, 0, 6));
console.log(arr.customPush(6, 7));
console.log(arr.customPop());


