
//Red phase failing test case
const { countVowels } = require("./countVowels");  


test("counts vowels in strings correctly", () => {
  expect(countVowels("hello")).toBe(2); //'e' and 'o'
  expect(countVowels("world")).toBe(1);  // 'o'
  expect(countVowels("")).toBe(0);       // empty string
  expect(countVowels("AEIOU")).toBe(5); // all are vowels
  expect(countVowels("bcdfg")).toBe(0);   //they are not vowels
});
