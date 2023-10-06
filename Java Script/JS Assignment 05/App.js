
//Q :1 Write a program that take two numbers & add them in a new variable. Show the result in your browser.

//  plus
// var plus1 =Number(prompt("Enter The First Amount for Addition" ))
// var plus2 =Number(prompt("Enter The Second Amount Addition" ))
// var addition = plus1+plus2;
// document.getElementById("Answers").textContent="The Answers is :" + addition;

// // Subtraction

//  var subs1 =Number(prompt("Enter The First Amount for Subtraction" ))
//  var subs2 =Number(prompt("Enter The Second Amount for Subtraction" ))
// var subtraction = subs1-subs2;
// document.getElementById("Answers").textContent="The Answers is :" + subtraction;


//  // Multiplication
// var mul1 =Number(prompt("Enter The First Amount for Multiplication" ))
//  var mul2 =Number(prompt("Enter The Second Amount for Multiplication" ))
// var multiplication = mul1*mul1;
// document.getElementById("Answers").textContent="The Answers is :" + multiplication;

//  // 	Division

//  var div1 =Number(prompt("Enter The First Amount for Division" ))
//  var div2 =Number(prompt("Enter The Second Amount for Division" ))
// var division = div1/div2;
// document.getElementById("Answers").textContent="The Answers is :" + division;

// // Modulus (Reminder)

//  var mod1 =Number(prompt("Enter The First Amount for Reminder" ))
//  var mod2 =Number(prompt("Enter The Second Amount for Reminder" ))
//  var Reminder = mod1%mod2;
// document.getElementById("Answers").textContent="The Answers is :" + Reminder;


//Q :2Do the following using JS Mathematic Expressionsa. Declare a variable.


// var myQ2 ;
// document.write("Value after variable declaration is:" + "<br>")

// myQ2 = 5;

// document.write("Initial value:" + myQ2 +"<br>")

// myQ2++;
// document.write("Increment the variable:" + myQ2 +"<br>")

// myQ2+=7;
// document.write("Value after addition is:" + myQ2 +"<br>")

// myQ2--;
// document.write("Value after decrement is:" + myQ2 +"<br>")

// remainder =myQ2%6;
// document.write("The remainder is:" + remainder +"<br>")



// Q:4 Cost of one movie ticket is 600 PKR. Write a script to store


// var num1 = 600;
// var num2 = 5;
// var multiplication = num1*num2 ;
// document.write("The total cost of buying 5 tickets of Movie :" + multiplication +"PKR")


// Q:5 Write a script to display multiplication table of any number in your browser. E.g

// var table =prompt("Please Enter Any Numbr","10")

// document.write("Table Of "+ table+"<br>")
// document.write(table +"x"+ 1  +"=" +table*1+"<br>")
// document.write(table +"x"+ 2  +"=" +table*2+"<br>")
// document.write(table +"x"+ 3  +"=" +table*3+"<br>")
// document.write(table +"x"+ 4  +"=" +table*4+"<br>")
// document.write(table +"x"+ 5  +"=" +table*5+"<br>")
// document.write(table +"x"+ 6  +"=" +table*6+"<br>")
// document.write(table +"x"+ 7 +"=" +table*7+"<br>")
// document.write(table +"x"+ 8 +"=" +table*8+"<br>")
// document.write(table +"x"+ 9  +"=" +table*9+"<br>")
// document.write(table +"x"+ 10  +"=" +table*10+"<br>")


// Q:6 The Temperature Converter:

// var celsiusTemp = 25;
// var fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;
// document.write(celsiusTemp + "\xB0F is" + fahrenheitTemp + "\xB0C" + "<br>")


// var fahrenheitTemp2 = 70;
// var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5 / 9;
// document.write(fahrenheitTemp2 + "\xB0C is" + celsiusTemp2 + "\xB0F");


//Q :7 Write a program to implement checkout process of a shopping cart system for an e-commerce website.
// Store the following in variables


// var itme1 =650
// var quantityItem1 =3
// var itme2 =100
// var quantityItem2 =7
// var shipping = 100

// var total = (itme1*quantityItem1) +(itme2*quantityItem2)+(shipping);
// document.write("<h1> Shopping Cart </h1>")
// document.write("Price of item 1 is :" + itme1 + "<br>")
// document.write("quantity of item 1 is  :" + quantityItem1 + "<br>")
// document.write("Price of item 2 is :" + itme2 + "<br>")
// document.write("quantity of item 2 is  :" + quantityItem2 + "<br>")
// document.write("Shipping charges is  :" + shipping + "<br> <br> <br>")
// document.write("Total Cost of Your Orderd  :" + total + "<br>")

//Q :8 Store total marks & marks obtained by a student in 2
//variables. Compute the percentage & show the result in
// your browser


// var totalM =980
// var markO =804


// var percentage = (markO/totalM*100);
// document.write("<h1> Mark Sheet </h1>")
// document.write("Total marks is  :" + totalM + "<br>")
// document.write("Marks obtained is :" + markO + "<br>")
// document.write("Ppercentage is :" + percentage + "<br>")

//Q :9 Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.


//  var usdRate =104.80
//  var quantityUsd =10
//  var saudiRate =28
//  var quantitySaudi =25


// var totalCurrency = (usdRate*quantityUsd) +(saudiRate*quantitySaudi) 


// document.write("<h1> Currency In PKR </h1>" +"<br>")
// document.write("Total currency In Pkr  :" + totalCurrency )

//Q :10 The Age Calculator:

//  var currentYear =2023
//  var birthYear =1990



// var totalAge = (currentYear-birthYear) 


// document.write("<h1> Age Calculator </h1>" +"<br>")
// document.write("Current year is  :" + currentYear +"<br>")
// document.write("Birth year  :" + birthYear +"<br>")
// document.write(" Your Age is  :" + totalAge +"<br>")


//Q :10 The Lifetime Supply Calculator:

var currentAge = 15; var maximumAge = 65;
var estimated = 3;

var totalSnacks = (maximumAge - currentAge) * 3

document.write("<h1> The Lifetime Supply Calculator: </h1>" + "<br>")
document.write("Favorite snack  : Chocolate Chip"+"<br>")
document.write("Current Age  is  : 15 "+"<br>")
document.write("Estimated Maximum Age  : 65 "+"<br>")
document.write("Amount  Of Snacks per day  : 3"+"<br>")
document.write("You will need" + totalSnacks + " to last you until the ripe old age of 65." + "<br>")