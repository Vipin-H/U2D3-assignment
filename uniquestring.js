function uniqueString(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;  // If the string exists in the accumulator, increment the count, otherwise set it to 1
      return acc;
    }, {});  // Initialize the accumulator as an empty object
  }
  
  // Example usage:
  const strings = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
  const result = uniqueString(strings);
  console.log(result);  // Output: { apple: 3, banana: 2, orange: 1 }
  