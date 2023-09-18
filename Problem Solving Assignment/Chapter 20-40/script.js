// Type the characters that are missing from this code.var allLower = userInput.toLowerCase;Note: Correct this statement by yourself.
var userInput = "AHmad Saboor";
var allLower = userInput.toLowerCase();
console.log(allLower);
//2- Convert the string represented by x to lower-case and assign the result to the same variable.
var x = "I am AHmad Saboor";
console.log(x.toLowerCase());
// 3.Convert the string represented by yto upper-case and assign the result to the same variable.
var y = "Our Name is our Entity";
console.log(y.toUpperCase());
// 4.Convert the string represented by a variable to lower-case and assign the result to a second variable that hasn't been declared beforehand.
var firstVariable = "Not USed BEfore";
var secondVariable = firstVariable.toLowerCase();
console.log(secondVariable);
// 5.Convert the string represented by an array element to lower-case and assign it to a variable that hasn't been declared beforehand.
var array = ["ahmad", "ali", "SuBhan", "talha"];
var arrayElement = array[2].toLowerCase();
console.log(arrayElement);
console.log(array);
// 6.Display in an alert the upper-case version of the string represented by a variable.
// alert(y)
// 7.var cityName = “kaRacHi”;Convert the string represented by a cityNamein Capitalisation is the writing of a word with its first letter in uppercase and the remaining letters in lowercase.
var cityName = "kaRacHi";
console.log(cityName.charAt(0).toLocaleUpperCase() + cityName.slice(1).toLocaleLowerCase());
// Chapter 22-25
// "captain" has been assigned to variable “sameWords”. You want to slice "ap" out of it.
var sameWords = "captain";
var sliceword = sameWords.slice(1, 3);
console.log(sliceword);
// 2.The number of characters in the string will be assigned to the variable.
var lengthOfVariable = sameWords.length;
// 3.The string "elephant" has been assigned to the variable animal. Slice the four middle characters out of the string and assign it to the variable seg, which hasn't been declared beforehand.
var animal = "elephant";
var seg = animal.slice(4, 5);
console.log(seg);
// 4.Find the number of characters in the string represented by a variable and assign the number to a second variable.
var myName12 = "AHmad lorem ipsum";
var second = myName12.length;
console.log(second);
// 5.In a first statement measure how many characters there are in a string represented by a variable. In a second statement slice all but the first characterand last 3 characters of the string and assign it to a second variable that hasn't been declared beforehand.
var characterCollection = "AHmad Saboor is a Name ";
var characterCollectionSlice = characterCollection.slice(0, 1) +
    characterCollection.slice(characterCollection.length - 4);
console.log(characterCollectionSlice);
// 6.var text = "To be or not to be.";var indx = text.indexOf("be");What is the value of indx?
var text = "To be or not to be.";
var indx = text.indexOf("be");
console.log(indx);
// 7.var text = "To be or not to be.";var indx = text.lastIndexOf("be");What is the value of indx?Note: Try the above both examples by yourself.
var text1 = "To be or not to be.";
var indx1 = text1.lastIndexOf("be");
console.log(indx1);
// 8.Find the index of the first character of the last instance of "go" in the string represented by the variable text and assign the number to the variable indx, which hasn't been declared beforehand.
var text2 = "go go gophers";
var indx2 = text2.lastIndexOf("go");
console.log(indx2);
// 9.Code the first line of an if statement that tests whether a segment with an index represented by indexNum exists in a string
var indexNum = 2;
var text3 = "AHmad Saboor";
if (text3.charAt(indexNum)) {
    console.log("Yes");
}
else {
    console.log("No");
}
// .10.In this string"abcde", what character is at index 2?(Use charAt)
var text4 = "abcde";
console.log(text4.charAt(2));
// 11.Find the 10th character in the string represented by text and assign it to the variable cha, which hasn't been declared beforehand.
var text5 = "abcdefghij";
var cha = text5.charAt(10);
console.log(cha);
// // 12.Find the last character in the string represented by str and assign it to x, which hasn't been declared beforehand.
var str = "abcdefghij";
var x1 = str.charAt(str.length - 1);
console.log(x1);
// 13.Find the the 5th character in a string represented by input and assign it to cha, which hasn't been declared beforehand.
var input = "abcdefghij";
var cha2 = input.charAt(5);
console.log(cha2);
// 14.Code the first line of an if statement that tests whether the 3rd character of a string represented by a variable is a particular character.
var text6 = "abcdefghij";
var partichularWord = "a";
if (text6.charAt(3) === partichularWord) {
    console.log("YEs");
}
else {
    console.log("No");
}
// 15.Code a for loop that cycles through all the characters of a string represented by a variable and assigns each character to an element of an array that has been declared beforehand.
var charArray = [];
for (var i = 0; i < text6.length; i++) {
    charArray.push(text6[i]);
}
console.log(charArray);
// 16.In a string represented by str replace the first instance of "1" with "one" and assign the revised string to newStr, which hasn't been declared beforehand.
var str1 = "1,2,3,4,5,6,7,8,9";
var newStr = str1.replace("1", "One");
console.log(newStr);
// 17.If you want all instances replaced, enter 3 characters that need to appear in this statement.var y = x.replace("a", "z");
var str2 = "a,b,c,d,w,e,f,a";
var newStr2 = str2.replace(/a/g, "z");
console.log(newStr2);
