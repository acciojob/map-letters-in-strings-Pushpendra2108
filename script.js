//your JS code here. If required.
function mapLetters(word) {
    const result = {};
    
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      
      // Check if the letter already exists in the result
      if (!result[letter]) {
        result[letter] = []; // Initialize with an empty array
      }
      
      // Add the current index to the array
      result[letter].push(i);
    }
    
    return result;
  }