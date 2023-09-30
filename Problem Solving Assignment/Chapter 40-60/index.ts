// 1.	Write a Code that runs twice and does nothing. The counter i has already been declared and assigned 0.

for (var i = 0; i < 2; i++) {
  console.log(i);
}

// 2.	Code that looks for "pig" in the array. When it finds it, an alert displays saying, "Found it!" Use the length of the array as the loop limiter. Break out of the loop when it's found.
var animals = ["horse", "ox", "cow", "pig", "duck"];
for (var i = 0; i < animals.length; i++) {
  if (animals[i] == "pig") {
    console.log("Found it!");
    break;
  }
}
// 3.	Code to use a while & do while loop to print the numbers from 1 to 10.
var i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
// 4.	To use a while loop to ask the user for a number and then print that number back to them.
var i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
// 5.	To use a while loop to check if a number is even or odd.
var i = 4;
while (i <= 10) {
  if (i % 2 == 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
  i++;
}
// 6.	Create a guessing game where the user has to guess a number between 1 and 100.

// 7.	 Use a while & do-while loop to create a countdown timer?
var i = 10;
while (i > 0) {
  console.log(i);
  i--;
}
