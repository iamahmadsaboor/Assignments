// Type the characters that are missing from this code.var allLower = userInput.toLowerCase;Note: Correct this statement by yourself.
let userInput: string = "AHmad Saboor";
let allLower: string = userInput.toLowerCase();
console.log(allLower);
//2- Convert the string represented by x to lower-case and assign the result to the same variable.
let x: string = "I am AHmad Saboor";
console.log(x.toLowerCase());

// 3.Convert the string represented by yto upper-case and assign the result to the same variable.
let y: string = "Our Name is our Entity";
console.log(y.toUpperCase());
// 4.Convert the string represented by a variable to lower-case and assign the result to a second variable that hasn't been declared beforehand.
let firstVariable: string = "Not USed BEfore";
let secondVariable: string = firstVariable.toLowerCase();
console.log(secondVariable);
// 5.Convert the string represented by an array element to lower-case and assign it to a variable that hasn't been declared beforehand.
let array: string[] = ["ahmad", "ali", "SuBhan", "talha"];
let arrayElement: string = array[2].toLowerCase();
console.log(arrayElement);
console.log(array);

// 6.Display in an alert the upper-case version of the string represented by a variable.
// alert(y)
// 7.var cityName = “kaRacHi”;Convert the string represented by a cityNamein Capitalisation is the writing of a word with its first letter in uppercase and the remaining letters in lowercase.
let cityName: string = "kaRacHi";
console.log(
  cityName.charAt(0).toLocaleUpperCase() + cityName.slice(1).toLocaleLowerCase()
);

// Chapter 22-25
// "captain" has been assigned to variable “sameWords”. You want to slice "ap" out of it.
let sameWords: string = "captain";
let sliceword: string = sameWords.slice(1, 3);
console.log(sliceword);

// 2.The number of characters in the string will be assigned to the variable.
let lengthOfVariable: number = sameWords.length;
// 3.The string "elephant" has been assigned to the variable animal. Slice the four middle characters out of the string and assign it to the variable seg, which hasn't been declared beforehand.
let animal: string = "elephant";
let seg: string = animal.slice(4, 5);
console.log(seg);

// 4.Find the number of characters in the string represented by a variable and assign the number to a second variable.
let myName12: string = "AHmad lorem ipsum";
let second: number = myName12.length;
console.log(second);

// 5.In a first statement measure how many characters there are in a string represented by a variable. In a second statement slice all but the first characterand last 3 characters of the string and assign it to a second variable that hasn't been declared beforehand.
let characterCollection: string = "AHmad Saboor is a Name ";
let characterCollectionSlice: string =
  characterCollection.slice(0, 1) +
  characterCollection.slice(characterCollection.length - 4);
console.log(characterCollectionSlice);

// 6.var text = "To be or not to be.";var indx = text.indexOf("be");What is the value of indx?
let text: string = "To be or not to be.";
let indx: number = text.indexOf("be");
console.log(indx);

// 7.var text = "To be or not to be.";var indx = text.lastIndexOf("be");What is the value of indx?Note: Try the above both examples by yourself.
let text1: string = "To be or not to be.";
let indx1: number = text1.lastIndexOf("be");
console.log(indx1);

// 8.Find the index of the first character of the last instance of "go" in the string represented by the variable text and assign the number to the variable indx, which hasn't been declared beforehand.
let text2: string = "go go gophers";
let indx2: number = text2.lastIndexOf("go");
console.log(indx2);
// 9.Code the first line of an if statement that tests whether a segment with an index represented by indexNum exists in a string
let indexNum: number = 2;
let text3: string = "AHmad Saboor";
if (text3.charAt(indexNum)) {
  console.log("Yes");
} else {
  console.log("No");
}

// .10.In this string"abcde", what character is at index 2?(Use charAt)
let text4: string = "abcde";
console.log(text4.charAt(2));

// 11.Find the 10th character in the string represented by text and assign it to the variable cha, which hasn't been declared beforehand.
let text5: string = "abcdefghij";
let cha: string = text5.charAt(10);
console.log(cha);
// // 12.Find the last character in the string represented by str and assign it to x, which hasn't been declared beforehand.
let str: string = "abcdefghij";
let x1: string = str.charAt(str.length - 1);
console.log(x1);

// 13.Find the the 5th character in a string represented by input and assign it to cha, which hasn't been declared beforehand.
let input: string = "abcdefghij";
let cha2: string = input.charAt(5);
console.log(cha2);

// 14.Code the first line of an if statement that tests whether the 3rd character of a string represented by a variable is a particular character.
let text6: string = "abcdefghij";
let partichularWord: string = "a";
if (text6.charAt(3) === partichularWord) {
  console.log("YEs");
} else {
  console.log("No");
}
// 15.Code a for loop that cycles through all the characters of a string represented by a variable and assigns each character to an element of an array that has been declared beforehand.
let charArray: string[] = [];
for (let i = 0; i < text6.length; i++) {
  charArray.push(text6[i]);
}

console.log(charArray);

// 16.In a string represented by str replace the first instance of "1" with "one" and assign the revised string to newStr, which hasn't been declared beforehand.
let str1: string = "1,2,3,4,5,6,7,8,9";
let newStr: string = str1.replace("1", "One");
console.log(newStr);

// 17.If you want all instances replaced, enter 3 characters that need to appear in this statement.var y = x.replace("a", "z");
let str2: string = "a,b,c,d,w,e,f,a";
let newStr2: string = str2.replace(/a/g, "z");
console.log(newStr2);

//1- Form a statement that rounds a number to the nearest integer.
let numberROunded: number = 23.5;
Math.floor(numberROunded);
console.log(numberROunded);

// 2.Round up a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.

let origNum: number = 23.4;
let roundNum: number = Math.ceil(origNum);
console.log(roundNum);

// 3.Round downa number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.
console.log(Math.floor(origNum));

// 4.Round a number represented by a variable and assign the result to a second variable that hasn't been declared beforehand
let whichNotAssigned: number = Math.round(origNum);
console.log(whichNotAssigned);

// 5.Round .5 to 0 and assign it to a variable that hasn't been declared beforehand.
let myChoices: number = Math.floor(0.5);
console.log(myChoices);

// Chapter 27(Random Numbers)

// 1.Convert a random number generated by JavaScript to a number in the range 1 to 50
console.log(Math.floor(Math.random() * (50 - 1 + 1) + 1));
// 2.Generate a random number and assign it to a variable that hasn't been declared beforehand.
const randNumber: number = Math.floor(Math.random() * 10 + 1);
// 3.You have to create a dice in JavaScript with the use of pseudo-random number.
function rollDice(): void {
  Math.floor(Math.random() * 6 + 1);
}
rollDice();
// 4.You have to create a toss (head/tail)in JavaScript with the use of pseudo-random number.\
function coinToss(): boolean {
  return Boolean((Math.random() * 1).toFixed()); //to convert decimal into int
}

// Chapter 28, 29(Converting Strings)
// 1.How do you convert a string toan integer in JavaScript?
// By Using Number.parseInt(string)
// 2.Write a JavaScript function to convert the string "123" to an integer.
function myFunction(ac: string) {
  Number.parseInt(ac);
}
myFunction("123");
// 3.How can you convert a string containing a decimal number to a floating-point number in JavaScript?
function strToFloat(str: any): number | undefined {
  return parseFloat(<any>str); //<any> is used for type casting
}

strToFloat("10");
// 4.How can you check if a string can be successfully converted to an integer or decimal in JavaScript before performing the conversion?

// 5.How can you convert a number to a string in JavaScript?
const numberValue: number = 42;
const stringValue: string = numberValue.toString();

// 6.Write a JavaScript function to convert the number 42 to a string.
function numberToString(): string {
  const numberValue: number = 42;
  return numberValue.toString();
}

const result: string = numberToString();
console.log(result);

// 7.Can you convert a string representing a decimal number (e.g., "3.14") to an integer in JavaScript? If so, how?

const decimalString: string = "3.14";
const integerValue: number = parseInt(decimalString);

console.log(integerValue);

// Chapter 30
// 1.Code a statement that rounds a number represented by num to 4 places,  converts  it  toa  string,  and  assigns  it  to  newNum,  which hasn't been declared beforehand
let num: number = 23.45678;
let newNum: string = num.toFixed(4);
console.log(newNum);

//2 .In a single statement round a number represented by a variable to 2  places,  convert  it  to  a  string,  convert  it  back  to  a  number,  and assign it to the same variable.
let num1: number = 23.45678;
num1 = Number(num1.toFixed(2));
console.log(num1);

// 2Code  the  first  line  of  an  if  statement  that  tests  whether  the number  represented  by  num,  rounded  to  2  digits  and  converted to a string, has more than 4 characters in it.
let num2: number = 23.45678;
let num2String: string = num2.toFixed(2).toString();
if (num2String.length > 4) {
  console.log("Yes");
}

// 4.Assign a number with many decimal places to a variable.Code  an  alert  that  displays  the  number  rounded  to  2  decimal places and converted to a string.
let num3: number = 23.45678;
let num3String: string = num3.toFixed(2).toString();
console.log(num3String);

// Chapter 31 -34 Date
// 1.Code a statement that creates a new Date object and assigns it to dObj, which hasn't been declared beforehand.
let dObj: Date = new Date();
console.log(dObj);

// 2.Code astatement that creates a new Date object, converts it to a string, and assigns the string to dStr, which hasn't been declared beforehand
let dObj1: Date = new Date();
let dStr: string = dObj1.toString();
console.log(dStr);

// 3.Code a statement that extracts the day of the week from a Date object represented by d and assigns it to day, which hasn't been declared beforehand.
let d: Date = new Date();
let day: number = d.getDay();
console.log(day);

// 4.The day has been extracted from the Date object and assigned to d. The names of the days of the week have been assigned to the array dayNames. Alert the current day with array index.
let dayNames: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day1: number = d.getDay();
console.log(dayNames[day1]);
// 5.Extract all parts of theDateand Time and assign it to the variable whichhas not beendeclared beforehand.
let d1: Date = new Date();
let year: number = d1.getFullYear();
let month: number = d1.getMonth();
let date: number = d1.getDate();
let day2: number = d1.getDay();
let hour: number = d1.getHours();
let minute: number = d1.getMinutes();
let second1: number = d1.getSeconds();
let millisecond: number = d1.getMilliseconds();
let time: number = d1.getTime();
// 6.Code a statement that creates a Date object for the last day of the last month of 2020 and assigns it to later, which hasn't been declared beforehand.
let later: Date = new Date(2020, 11, 31);
console.log(later);

// 7.Create a Date object for the second day of the second month of 1992 and assign it to a variable that hasn't been declared beforehand
let secondDay: Date = new Date(1992, 1, 2);
console.log(secondDay);

// 8.Code a single statement that displays in an alert the milliseconds that elapsed between the reference date and the beginning of 1980.
let d2: Date = new Date(1980, 1, 1);
let d3: Date = new Date();
let diff: number = d3.getTime() - d2.getTime();
console.log(diff);

// 9.How do you change the year of a date in JavaScript?
let d4: Date = new Date();
d4.setFullYear(2020);
console.log(d4);
// 10.Write a JavaScript function to change the month of a given date to January.
let d5: Date = new Date();
d5.setMonth(0);
console.log(d5);
// 11.What is the method to change the day of the week for a specific date in JavaScript?
let d6: Date = new Date();
d6.setDate(1);
console.log(d6);
// 12.Write a JavaScript function to change the minutes of a given time to a specific value. (Value by prompt)
let d7: Date = new Date();
d7.setMinutes(1);
console.log(d7);

// 13.Write a JavaScript function to add a specific number of hours to a given time.
let d8: Date = new Date();
d8.setHours(1);
console.log(d8);

// 14.You have to createa age calculator in JavaScript
let d9: Date = new Date();
let birthYear: number = 1992;
let birthMonth: number = 1;
let birthDate: number = 2;
let birthDay: number = 1;
let birthHour: number = 1;
let birthMinute: number = 1;
let birthSecond: number = 1;
let birthMillisecond1: number = 1;
let birthTime: number = 1;
let birthDateObject: Date = new Date(
  birthYear,
  birthMonth,
  birthDate,
  birthDay,
  birthHour,
  birthMinute,
  birthSecond
);
