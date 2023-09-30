// Chapter 1(Alerts)
// 1.Alert these following (individually): I.First NameII.Last NameIII.EmailIV.Phone NumberV.Password
// 2.Correct this statement: alert"You're learning JavaScript!";
// 3.Code an alert statement displaying any message you like.
let firstName: string = "Ahmad";
let lastName: string = "Alghazali";
let email: string = "ahmadsaboor020@gmail.com";
let phoneNumber: string = "03001234567";
let password: string = "123456789";
alert(firstName);
alert(lastName);
alert(email);
alert(phoneNumber);
alert(password);
// Q2
alert("You're learning JavaScript!");
// Q3
alert("This is my first alert");

// Chapter 2 (Variables for string)
// 1.Declare any variable in the camelCase format.
let myName: string = "Ahmad";

// 2.Declare a variable of your choice without defining it. Then, in a second statement, assign it a string of your choice.
let myAge: string;
myAge = "20";
// 3.Declare the variable teamName and Alert your Team name.
let teamName: string = "Pakistani";
alert(teamName);
// 4.This statement has already been coded. var bestMan = "Charlie";Assign the variable a new string
let bestMan: string = "Charlie";
bestMan = "Ahmad";

// Chapter 3(Variables for numbers)
// 1.Declare a variable “caseQty”
var caseQty = 1;
// 2.Assign to the variable caseQty, which has already been declared, the value 144.
caseQty = 144;
// 3.Rewrite this statement so the variable can be used in a math operation.var num = "9";
var num = 9;
// 4.In one statement declare a variable. In a second statement assign it the sum of 2 numbers.
var sum = 2 + 2;
// 5.What is the value of orderTotal?var merchTotal = 100;var shippingCharge = 10;var orderTotal = merchTotal + shippingCharge;Try it yourself.
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
console.log(`The total amount payable on this purchase is ${orderTotal}`);
// 6.In the first statement declare a variable and assign it a number. In the second statement, change the value of the variable by adding it together with a number
var num = 1;
num = num + 1;

// Chapter 4(Variable names Legal and Illegal)
// 1.Correct this statement.var product cost = 3.45;
var productCost = 3.45;
// 2.Rewrite this using camelCase.var Nameofband;
var nameOfBand;
// 3.In a single statement declare a legally-named variable and assign a number to it.
var num = 1;
// 4.Declare a variable that is a combination of your first and last names. Use camelCase.
var firstName1 = "Ahmad";
var lastName1 = "Saboor";
// 5.List the legal and Illegal Variables.
// Legal Variables
var firstName3 = "Ahmad";
var lastName3 = "Saboor";
var age3 = 20;
var address3 = "Karachi";
// Illegal Variables
// var 1firstName="Ahmad";
// var last-name="Saboor";
// var age@=20;

// Chapter 5(Math Expression I)
// 1.What is the nameand symbol of the arithmetic operator that gives you the remainder when one number is divided by another?
//  Percent  Symbol %
// 2.What is the value of num?var num = 20 % 6;
var num = 20 % 6;
console.log(num);

// 3.In a single statement, declare the variable largeNum and assign it the result of 1,000 multiplied by 2,000.
var largeNum = 1000 * 2000;
console.log(largeNum);
// 4.Assign to a variable the value represented by one variable subtracted from the value represented by another variable5.
var num1 = 5;
var num2 = 10;
var num3 = num2 - num1;
// Assign to a variable the remainder when one number is divided by another. The variable hasn't been declared beforehand. Make up the variable name.
var num4 = 10 % 3;
// 6.Code an alert that displays the result of a multiplication on 2 numbers.
alert(2 * 2);

// Chapter 6(Math Expression II)
// 1.Code a short form of x = x + 1; Use either of the two legal expressions.
var x = 1;
x++;
// 2.If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression?
let v: number = 100;
v--;

// 3.var x = 50;var y = x++;What is the value of y?
// 51
// 4.var y = 50;var z = --y;What is the value of z?
// 49
// 5.In a single statement, decrement num and assign its original value to newNum.
var num = 1;
var newNum = --num;
// 6.In a single statement add 1 to a variable and assign its original value to another variable.
var num = 1;
var newNum = num++;

// 7.Assign a number value to a variable.Increment the variable.Display the new value in an alert
var num = 1;
num++;

// Chapter 7(Math Expression III)
// 1.var calculatedNum = 2 + (2 * 6);What is the value of calculatedNum?
// 13

// 2.var calculatedNum = (2 + 2) * 6;What is the value of calculatedNum?
// 24
// 3.var calculatedNum = (2 + 2) * (4 + 2);What is the value of calculatedNum?
// 24

// 4.var calculatedNum = ((2 + 2) * 4) + 2;What is the value of calculatedNum?Note: Try all the above equations yourself.
// 18
// 5.Write a statement that assigns to cost the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 56.
const myAnswer: number = (2 + 2) * (4 + 10);
console.log(myAnswer);

// 6.Write a statement that assigns to units the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 20.
const myAnswer1: number = 2 + 2 * 4 + 10;
console.log(myAnswer1);
// 7.Write a statement that assigns to pressure the result of 4 / 2 * 4, clarified with parentheses, producing 5.
const myAnswer2: number = 4 / (2 * 4);
console.log(myAnswer2);

// Chapter 8 (Concatenating Text Strings)
// 1.var num = "2" + "2";What is the value of num? Include quotation marks.
// 22
// 2.message = ("Hello," + "Dolly");What is the value of message? (Include the quotation marks.)Alert the statement
// "Hello, Dolly"
// 3.alert("33" + 3);What message displays in the alert box?
// 333
// 4.Write an alert that displays the concatenation of the two parts of "Pakistan Zindabad".
// alert("Pakistan"+"Zindabad")
// 5.Write a statement that assigns to a variable the concatenation of a string with a number6.Assign
// strings to two variables. Then concatenate them and assign the result to a third variable.
var firstName5: string = "Ahmad";
var lastName5: string = "Saboor";
var fullName5: string = firstName5 + lastName5;
console.log(fullName5);

// Chapter 10 (if statments)
// 1.var city = "Karachi"if (city = "Karachi") {console.log("The City OF Lights")Correct the above statement:Also try this statement by yourself
var city: string = "Karachi";
if (city == "Karachi") {
  console.log("The City of Lights");
}
// 2.This is the first line of an if statement:if (x === y) {Complete the statement. If the condition is true, display a box that asks the user value of z? and assign it to another variable.
var x: number = 1;
var y: number = 1;
if (x == y) {
  var z: number = 2;
}
// 3.Code an if statement that tests if ZipCode is "10010" so, Alert that "Karachi". if not then alert ("Please write correct city")
var zipCode: string = "10010";
if (zipCode == "10010") {
  alert("Karachi");
}
// 4.Code an if statement. Test whether a variable has a particular numerical value. If so, assign a new value to that variable, as in x = 1
var num: number = 1;
if (num == 1) {
  num = 2;
}

// Chapter 11(Comparison Operators)
// 1.Code the first line of an if statement that tests whether one variable is unequal to another.(Use !)
var num1: number = 1;
var num2: number = 2;
if (num1 != num2) {
  console.log("Not Equal");
}
// 2.Code the first line of an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by anothervariable.
var num3: number = 1;
var num4: number = 2;
if (num3 >= num4) {
  console.log("Greater than");
}

// 3.Code an if statement. Test whether a variable is unequal to a particular number. If so, assign a number to that variable.
var num5: number = 1;
if (num5 != 2) {
  num5 = 3;
}

// 4.Code an if statement that tests whether a number is unequal to a different number. If the condition is true (it will be), display a congratulations alert.
var num6: number = 1;
var num7: number = 2;
if (num6 != num7) {
  alert("Congratulations");
}
// Chapter 12 (if...else and else if statements)
// 1.Code an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by another variable. If so, display an alert. If not, display a different alert.
var num8: number = 1;
var num9: number = 2;
if (num8 >= num9) {
  alert("Greater than");
} else {
  alert("Less than");
}
// 2.Write a program usingif else and else if statement which take marks from user. And the program will calculate your percentage and  give you grade A/C to Your percentage. (MARKSHEET)
var marks: number = 80;
if (marks >= 80) {
  alert("A+");
} else if (marks >= 70) {
  alert("A");
} else if (marks >= 60) {
  alert("B");
} else if (marks >= 50) {
  alert("C");
} else if (marks >= 40) {
  alert("D");
} else {
  alert("Fail");
}

// 3.This is the if statement that begins the code.if (a === 10) {alert("a is 10");}If a isn't 10, display an alert that says The correct value of a is____Note: Try this by yourself
var a: number = 10;
if (a != 10) {
  alert("The correct value of a is 10");
}

// 4.Prompt the user to enter a city.If the city is Karachi, display an alert acknowledging it is Karachi.If not, check to see if it's Lahore.If it is, display an alert acknowledging it's Lahore.Otherwise, display a different alert.
var city1: string = "Karachi";
if (city1 == "Karachi") {
  alert("Karachi");
} else if (city1 == "Lahore") {
  alert("Lahore");
} else {
  alert("Other");
}

// Chapter 13(Testing sets of conditions)
// 1.Code the first line of an if statement that tests whether both are true: a has the same value as b and c has the same value as d.
var a: number = 1;
var b: number = 2;
var c: number = 3;
var d: number = 4;
if (a == b && c == d) {
  console.log("True");
}

// 2.Code the first line of an if statement that tests whether either or both are true: a has the same value as b or c doesn't have the same value as d.
var a1: number = 1;
var b1: number = 2;
var c1: number = 3;
var d1: number = 4;
if (a1 == b1 || c1 != d1) {
  console.log("True");
}
// 3.Code the first line of an if statement that tests whether I.nameis either "Hamza" or "Arsalan".II.age is Less than 60.
var name2: string = "Hamza";
var age: number = 20;
if (name2 == "Hamza" || age < 60) {
  console.log("True");
}
// 4.Declare two variables and assign them number values.If the first variable is less than the second variable or greater than the second variable, display an alert.
var num10: number = 1;
var num11: number = 2;
if (num10 < num11 || num10 > num11) {
  alert("True");
}
// 5.Declare 2 variables. Assign one of them your first name and the other one your last name.Code 2 prompts, asking for your first and your last name.If your answers match the two variables, display an alert.
// var firstName6:string="Ahmad";
// var lastName6:string="Saboor";
// var firstName7:string=prompt("Enter your first name");
// var lastName7:string=prompt("Enter your last name");
// if(firstName6==firstName7 && lastName6==lastName7){
//     alert("True")
// }

// Chapter 14 (If statements nested)
// 1.Code an ifstatement enclosing a nested if. If password is not empty, then check if password is not greater than 5  , then display an alert that says "Password must be greater than 5" if greater than 5 then Alert "OK".
var password1: string = "12345";
if (password1 != "") {
  if (password1.length > 5) {
    alert("OK");
  } else {
    alert("Password must be greater than 5");
  }
}
// 2.Try this statement by yourselfif (a === 1) {if (c === "Max") {alert("OK");}}
// let a:number=1
// let c:string="max"
// if(a===1){
//     if(c==="Max"){
//         alert("ok")
//     }
// }
// 3.Code the first line of an if statement that avoids the nesting above by testing for multiple conditions.if (a === 1) {if (c === "Max") {alert("OK");}}
var a2: number = 1;
var c2: string = "max";
if (a2 === 1 && c2 === "max") {
  alert("OK");
}

// 4.Declare two variables and assign them the same numbervalue.Test two conditions, using nested if statements. Test whether the first variable equals the second variable and also whether it is less than or equal to the second variable. If the test passes—and it will—display an alert message.
// var num12:number=1;
// var num13:number=1;
// if(num12==num13){
//     if(num12<=num13){
//         alert("True")
//     }
// }
// else{
//     alert("False")
// }

// Chapter 15 (ArrayI)
// 1.Declare an empty array.
var arr1: string[] = [];
// 2.Code an array with 1 string element
var arr2: string[] = ["Ahmad"];
// 3.var alphabet=["h","i","j","k"].Now print the letter “j” in alert using array index
var alphabet: string[] = ["h", "i", "j", "k"];
alert(alphabet[2]);

// 4.var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total length of array.
var alphabet1: string[] = ["h", "i", "j", "k", "l", "m", "n", "o"];
console.log(alphabet1.length);

// 5.Declare an array with one element and Add a second elementwith index in array.Create analert whose message is the new element
var arr3: string[] = ["Ahmad"];
arr3[1] = "Saboor";
alert(arr3[1]);

// Chapter 16 (Array II)
// 1.Code an array with 1 string element.Add an additional element to the array using push.Create an alert whose message is the last element.
var arr4: string[] = ["Ahmad"];
arr4.push("Saboor");

// 2.var Alphabet=["h","i","j","k"]Remove the last element from the array Alphabet.
var alphabet2: string[] = ["h", "i", "j", "k"];
alphabet2.pop();
// 3.var Alphabet=["h","i","j","k"]Add a new element, a number, to the end of an array.
var alphabet3: string[] = ["h", "i", "j", "k"];
alphabet3.push("1");

// Chapter 16 (Array III)
// 1.var sizes = ["S", "M", "XL", "XXL", "XXXL"].Remove the first element of an array.
var sizee: string[] = ["S", "M", "XL", "XXL", "XXXL"];
sizee.shift();

// 2.var sizes = ["S", "M", "XL", "XXL", "XXXL"].Add three number elements to the beginning of an array.
var sizee1: string[] = ["S", "M", "XL", "XXL", "XXXL"];
sizee1.unshift("1", "2", "3");
// 3.Declare an array with one element.Add a second element to the beginning of the array.Create an alert whose message is the new first element.
var arr5: string[] = ["Ahmad"];
arr5.unshift("Saboor");
alert(arr5[0]);
// 4.var sizes = ["S", "M", "XL", "XXL", "XXXL"].Insert "L" into the array between "M" and "XL".
var sizee2: string[] = ["S", "M", "XL", "XXL", "XXXL"];
sizee2.splice(2, 0, "L");
// 5.var sizes = ["S", "M", "XL", "XXL", "XXXL"].Copy the first 3 sizes of the array and put them into a new array, regSizes.
var sizee3: string[] = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes: string[] = sizee3.slice(0, 3);

// 6.var pets = ["dog", "cat", "ox", "duck", "frog"].Add 2 elements after "dog" and remove "cat", "ox", and "duck".
var pets: string[] = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 3, "cat", "ox", "duck");

// 7.var pets = ["dog", "cat", "ox", "duck", "frog"];Remove "cat" and "ox".
var pets: string[] = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2);
// 8.var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];Reduce it to "duck"and "frog" using slice.
var pets: string[] = ["dog", "cat", "ox", "duck", "frog", "flea"];
var pets1: string[] = pets.slice(3, 5);

// Chapter 17-20(for Loops)
// 1.Write a statement in which loop is to run 10 times.
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// 2.Code the first line of a for loop with the usual counter name, usual starting value, and usual increment. Run it 12 times using <= to specify how many loops.
for (let i = 0; i <= 12; i++) {
  console.log(i);
}
// 3.What are the 5 characters missing from this code, excluding any spaces that are missing? Type them in order, with no spaces or commas between them.
for (var i = 0; i < 100; i++) {
  console.log(i);
}

// 4.Code the first line of afor loop with a counter name that's not i. Code the usual starting value and usual increment. Run it 100 times using < to specify how many loops.
for (let j = 0; j < 100; j++) {
  console.log(j);
}

// 5.Code the first line of a for loop with the usual counter and the usual starting value. Run it 3 times using > to specify how many loops. Decrement it with each iteration.
for (let k = 3; k > 0; k--) {
  console.log(k);
}

// 6.The statement assigns the number of elements in the array to the variable.
var pets: string[] = ["dog", "cat", "ox", "duck", "frog", "flea"];
var pets12: number = pets.length;
// 7.Set a variable named“flag”with an initial Boolean value of your choice.
var flag: boolean = true;

// 8.Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array pets.
var pets2: string[] = ["dog", "cat", "ox", "duck", "frog", "flea"];
for (let i = 0; i < pets2.length; i++) {
  console.log(i);
}
// 9.Coding Exercise:Set a for loop to run 10 iterations.On the second iteration, display the counter in an alert. (It should be 1.)Break out of the loop.
for (let i = 0; i < 10; i++) {
  if (i == 1) {
    alert(i);
    break;
  }
}
// 10.Create an array which contains usernamesCode a prompt with the message "Enter first name". The user's response is assigned to firstName.Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array user names.Code an if statement that tests the presense of (user name) in an array.

// var userName:string[]=["Ahmad","Saboor","Ali"];
// var firstName8:string=prompt("Enter first name");
// for(let i=0;i<userName.length;i++){
//     if(firstName8==userName[i]){
//         alert("Welcome")
//     }
// }

// If user name matchAlert that "Enter". if not then alert ("Please write correct user name").
// 11.Complete this code to display an alert if a match isn't found.var matchFound = false;for (var i = 0; i < list.length; i++) {if (userInput === list[i]) {alert("Match found");matchFound = true;break;}};
// var matchFound:boolean=false;
// var list:string[]=["Ahmad","Saboor","Ali"];
// var userInput:string=prompt("Enter first name");
// for(let i=0;i<list.length;i++){
//     if(userInput==list[i]){
//         alert("Match Found")
//         matchFound=true;
//         break;
//     }
// }

// 12.var firstArr = [“a”, “b”, “c”, “d”, “e”, “f”];var secondArr = [1,2,3,4,5,6];Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array firstArr.In the scope of main loop Code the nested loop. Limit the number of nestedloops by the number of elements in the array secondArr.After that concatenatethe both loops.Expected Output:a1a2a3a4...f6
var firstArr: string[] = ["a", "b", "c", "d", "e", "f"];
var secondArr: number[] = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < firstArr.length; i++) {
  for (let j = 0; j < secondArr.length; j++) {
    console.log(firstArr[i] + secondArr[j]);
  }
}

// ================= THE END =================
