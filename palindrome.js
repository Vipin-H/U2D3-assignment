function findPalindromes(arr) {
    return arr.filter(str => {
      const reversedStr = str.split('').reverse().join('');  // Reverse the string
      return str === reversedStr;  // Check if the string is a palindrome
    });
  }
  
  // Example usage:
  const strings = ['racecar', 'hello', 'deified', 'world', 'level', 'programming', 'radar', 'civic', 'javascript'];
  const palindromes = findPalindromes(strings);
  console.log(palindromes);  // Output: ['racecar', 'madam', 'level']
  