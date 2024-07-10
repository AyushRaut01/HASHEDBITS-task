// Q1) Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.

const states = ['Karnataka', 'Goa', 'Assam',"Bihar","Chhattisgarh","Goa","Gujarat","Haryana", "Himachal Pradesh","Jharkhand","Karnataka",
  "Kerala","Madhya Pradesh","Maharashtra", "Manipur","Meghalaya", "Mizoram","Nagaland", "Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu",
  "Telangana",'Uttar Pradesh', 'Andhra Pradesh'];

const statesWithoutVowels = states.filter(state => !(/[aeiouAEIOU]/.test(state[0])));

console.log("\n"+statesWithoutVowels +"\n");
// output
// [
//     'Karnataka',   'Goa',
//     'Bihar',       'Chhattisgarh',
//     'Goa',         'Gujarat',
//     'Haryana',     'Himachal Pradesh',
//     'Jharkhand',   'Karnataka',
//     'Kerala',      'Madhya Pradesh',
//     'Maharashtra', 'Manipur',
//     'Meghalaya',   'Mizoram',
//     'Nagaland',    'Punjab',
//     'Rajasthan',   'Sikkim',
//     'Tamil Nadu',  'Telangana'
//   ]

/*******************************************************************************************************************************/

// Q2) let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.

let str = "I love my India";

let words = str.split(" ");

let reversedWords = words.reverse();

let reversedStr = reversedWords.join(" ");

console.log(reversedStr +"\n");

// Output:
// India my love I
/*************************************************************************************************************************** */

// Q3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice

let string = "INDIA";

let charArray = string.split("");

let index = 3;

charArray.splice(index, 0, "ONES");

let newString = charArray.join("");

console.log(newString +"\n");
// Output: 'INDONESIA'
/**************************************************************************************************************************** */

// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

let string1 = 'This is a sample string with more than 20 characters';
let vowels = string1.match(/[aeiou]/gi);
let consonants = string1.match(/[bcdfghjklmnpqrstvwxyz]/gi);

console.log('Vowels:', vowels ? vowels.length : 0); //13
console.log('Consonants:', consonants ? consonants.length : 0 + "\n");//28
/**************************************************************************************************************************** */

// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

function correctfn(sentence, wrong, correct) {
  let regex = new RegExp("\\b" + wrong + "\\b", "gi");

  let correctedSentence = sentence.replace(regex, correct);

  return correctedSentence;
}

let originalSentence =
  "This is an example sentance with some misspelled words.";
let wrongWord = "sentance";
let correctWord = "sentence";

let correctedSentence = correctfn(originalSentence, wrongWord, correctWord);
console.log(correctedSentence+"\n");

// Output:
// This is an example sentence with some misspelled words.
/****************************************************************************************************************************** */

// Q6) inputArr = [1,2,3,9,10,7,5,4,3]
// answer = [9, 10, 7]
// User array.filter and return numbers greater than 5.
let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let answer = inputArr.filter((number) => number > 5);
console.log(answer+"\n");

// Output: [9, 10, 7]

/****************************************************************************************************************************** */

// Q7)
// const students = [
// { name: "Ram", scores: [80, 70, 60] },
// { name: "Mohan", scores: [80, 70, 90] },
// { name: "Sai", scores: [60, 70, 80] },
// { name: "Hemang", scores: [90, 90, 80, 80] },
// ];
// Output = [
// { name: "Ram", average: 70 },
// { name: "Mohan", average: 80 },
// { name: "Sai", average: 70 },
// { name: "Hemang", average: 85 },
// ];
// Use array.map and array.reduce.
const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];

const output = students.map((student) => {
  const totalScores = student.scores.reduce((sum, score) => sum + score, 0);
  const average = totalScores / student.scores.length;
  return { name: student.name, average: average };
});

console.log(output);



/************************************************************************************************************************************** */
// Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.

function repeatedSum(num) {
  while (num >= 10) {
      num = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  return num;
}

console.log(repeatedSum(456)); // Output: 6
/********************************************************************************************************************************* */

// Q9) Write a function to count the number of words in a paragraph.
function countWords(paragraph) {
    return paragraph.split(/\s+/).length;
}

console.log(countWords('Lorem ipsum dolor sit amet, consectetur adipiscing elit')); // Output: 8
/****************************************************************************************************************************************** */

// Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH
function reverseString(str) {
  return str.split("").reverse().join("");
}

const inputString = "Hello";
console.log(reverseString(inputString));
// Output: olleH

/******************************************************************************************************************************************** */

// Q.11 ans=  

function calculateAverages(students) {
  return students.map((student) => {
    // Get the values (marks) of each student object and calculate the average
    const marks = Object.values(student);
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const average = total / marks.length;

    // Return a new object with the student's name and their average
    return { average: average };
  });
}

// Example usage:
const input = [
  {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  },
  {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  },
  {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  },
];

console.log(calculateAverages(input));

// Output: [ { average: 64.2 }, { average: 64.2 }, { average: 64.2 } ]