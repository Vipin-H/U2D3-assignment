function sumDivisibleBy3Or5(arr) {
    return arr.reduce((acc, curr) => {
      if (curr % 3 === 0 || curr % 5 === 0) {
        return acc + curr;  // Add the number to the accumulator if divisible by 3 or 5
      }
      return acc;  // Otherwise, return the current accumulator value
    }, 0);  // Initialize the accumulator to 0
  }
  
  // Example usage:
  const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
  const result = sumDivisibleBy3Or5(numbers);
  console.log(result);
  