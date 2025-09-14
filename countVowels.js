//Green Phase (minimal implementation)

function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

module.exports = { countVowels };

// Refactor code

function countVowels(str) {
  const vowels = "aeiou";
  return str.toLowerCase().split("").filter((char) => vowels.includes(char)).length;
}

module.exports = { countVowels };
