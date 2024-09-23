function swapFirstAndLast(arr) {
    return arr.map(str => {
      if (str.length < 2) return str;  // If the string has less than 2 characters, return it as is
      const firstChar = str[0];  // Get the first character
      const lastChar = str[str.length - 1];  // Get the last character
      return lastChar + str.slice(1, -1) + firstChar;  // Swap the first and last characters
    });
  }
  
  // Example usage:
  const strings = ['hello', 'world', 'this', 'is', 'an', 'example', 'array', 'of', 'strings'];
  const swappedStrings = swapFirstAndLast(strings);
  console.log(swappedStrings);
  