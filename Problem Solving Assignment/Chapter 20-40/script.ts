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


// 4.Round a number represented by a variable and assign the result to a second variable that hasn't been declared beforehand.
// 5.Round .5 to 0 and assign it to a variable that hasn't been declared beforehand.Chapter 27(Random Numbers)

// 1.Convert a random number generated by JavaScript to a number in the range 1 to 50
console.log(Math.random())
// 2.Generate a random number and assign it to a variable that hasn't been declared beforehand.
// 3.You have to create a dice in JavaScript with the use of pseudo-random number.
// 4.You have to create a toss (head/tail)in JavaScript with the use of pseudo-random number.
