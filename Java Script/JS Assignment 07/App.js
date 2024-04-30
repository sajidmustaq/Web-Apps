//Q:1 Write a program to take “city” name as input from user.
//If user enters “Karachi”, welcome the user like this:
//“Welcome to city of lights”

var city = prompt("please enter your city name").trim().toLowerCase();
// if (city == "karachi") {
//     document.write('Welcome to the city of lights');
// }
// else if (city !== "karachi") {
//      document.write("Enter City Namen in Lower Case")
// }
let cityName =
  city == "karachi" ? "Welcome to the city of lights" : "Enter Only Karachi ";
document.write("<br>" + cityName);

// Q:2 Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter your Gender please").trim().toLowerCase();

// if (gender == "male") {
//      document.write('Good Morning Sir');
// }
// else if (gender == "female") {
//      document.write("Good Morning Ma’am")
// }
// else ( document.write("Enter gender  in Lower Case"))

let resultGender = gender == "male" ? "Good Morning Sir" : "Good Morning Ma’am";

document.write("<br>" + resultGender);

// Q:3Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

var fuel = prompt("Enter Fuel litres in like 1 litre or 0.50 litre")
  .trim()
  .toLowerCase();
// if (fuel < "0.50") {
//     document.write("Please refill the fuel in your car")
// }
// else if (fuel > "0.50") {
//     document.write("Good Fuel")
// }

// else ( document.write("Enter in numeric"))

let fuellitter =
  fuel < "0.50" ? "Please refill the fuel in your car" : "Good Fuel";
document.write(fuellitter);

// Q:4 Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// traffic signal

var traffic_signal = prompt("Enter Color Red , Yellow Or Green")
  .trim()
  .toLowerCase();
// if (traffic_signal == "red") {
//   alert("Must Stop");
// } else if (traffic_signal == "yellow") {
//   document.write(" Ready to move ");
// } else if (traffic_signal == "green") {
//   document.write("Move now");
// } else document.write("Enter Traffic Light Color In Lower Case");



let traffic_light = traffic_signal=="red"? document.write("Must Stop") :traffic_signal=="yellow"? document.write(" Ready to move "):traffic_signal == "green"?document.write("Move now")

// const score = 45;

// const scoreRating =
//   score > 70
//     ? "Excellent"
//     : score > 50
//     ? "Average"
//     : score > 40
//     ? "Fair"
//     : "Do better";

// console.log(scoreRating);
// "Fair"
//Q:5 Run this script, & check whether alert message would be
//    displayed or not. Record the outputs.

var a = 4;

if (++a === 5) {
  alert("given condition for variable a is true");
}
var b = 82;
if (++b === 83) {
  alert("given condition for variable b is true");
}
var c = 12;
if (++c === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (c < 14) {
  alert("condition 3 is true");
}
if (c !== 14) {
  alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}
if ("car" < "cat") {
  alert("car is bigger than cat");
}

//Q:6 Write a program to take input the marks obtained in three
//subjects & total marks. Compute & show the resulting
//percentage on your page. Take percentage & compute
//grade as per following table:

var totalMarks = Number(prompt("Enter The Total Marks"));
var obtainedMarks = Number(prompt("Enter The Obtained Marks"));
var percentage = (obtainedMarks / totalMarks) * 100;

document.write("<h1> Mark Sheet </h1>");
document.write("Total marks is  :" + totalMarks + "<br>");
document.write("Marks obtained is :" + obtainedMarks + "<br>");
document.write("Ppercentage is :" + percentage + "<br>");
if (percentage <= 100 && percentage >= 80) {
  document.write("Grade : A-One" + "<br>");
} else if (percentage <= 79 && percentage >= 70) {
  document.write("Grade : A" + "<br>");
} else if (percentage <= 69 && percentage >= 40) {
  document.write("Grade : B" + "<br> " + "You Need  to Improve");
} else {
  document.write("Fail" + "<br>");
}

var day = 1;

switch (day) {
  case 0:
    document.write("Today is Monday");
    break;

  case 1:
    document.write("Today is Tuesday");
    break;
}
document.write("<br>");
var a = confirm("Are You Ready");
if (a) {
  document.write("Thanks");
} else {
  document.write("Sorry");
}
