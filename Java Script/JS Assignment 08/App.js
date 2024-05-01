function calculateTotalAndAverage() {
    let studentName = document.getElementById('studentName').value;
    let maths = parseInt(document.getElementById('maths').value);
    let physics = parseInt(document.getElementById('physics').value);
    let aemistry = parseInt(document.getElementById('aemistry').value);
    let english = parseInt(document.getElementById('english').value);
    let biology = parseInt(document.getElementById('biology').value);

    if (isNaN(maths) || isNaN(physics) || isNaN(aemistry) || isNaN(english) || isNaN(biology)) {
        alert('Please enter valid marks for all subjects');
        return;
    }

    let total = maths + physics + aemistry + english + biology;
    let average = total / 5;
    let grade = '';

    if (average >= 80) {
        grade = 'A+';
    } else if (average >= 70) {
        grade = 'A';
    } else if (average >= 60) {
        grade = 'B';
    } else if (average >= 50) {
        grade = 'C';
    } else if (average >= 40) {
        grade = 'D';
    } else {
        grade = 'FAIL';
    }

    document.getElementById('studentNameDisplay').innerText = studentName;
    document.getElementById('totalMarks').innerText = total;
    document.getElementById('averageMarks').innerText = average.toFixed(2);
    document.getElementById('grade').innerText = grade;
    document.getElementById('resultSection').style.display = "block";
}

// =======> Q:1Write a program that takes a character (number or string)
// in a letiable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

//  let n = prompt("aeck your number", "Type your number here");
//  n = parseInt(n);
//  if (isNaN(n))
//     {
//     alert("The input cannot be parsed to a number");
//     }
//  else
//     {
//     if (n == 0)
//        {
//        alert("The number is zero");
//        }
//     else if (n%2)
//        {
//        alert("The number is odd");
//        }
//     else
//        {
//        alert("The number is even");
//        }
//     }

// =======>     Q:2 Write a JavaScript program that accept two integers and
//              display the larger. Also show if the two integers are equal.

// let a = prompt("Enter Alphabat lowercase or uppercase  ", "Like A or a")
// if (a >= "A" && a <= "Z") {
//     alert(a + " is an UpperCase Character ");
// }
// else if (a >= "a" && a <= "z")
// {
//    alert(a +
//         " is an LowerCase Character " );
// }
// else {
//     alert(a +
//         " is not an alphabetic Character");
// }


// let a = prompt("Enter Number 1");
// let b = prompt("Enter Number 2");

// if (a > 0 && b > 0 && a > b) {
//     alert("The larger number is " + a);
// } else if (a > 0 && b > 0 && a < b) {
//     alert("The larger number is " + b);
// } else if (a === b && a > 0 && b > 0) {
//     alert("Both numbers are equal!")
// } else {
//     alert("Please add an integer!");

// }

//   =======>          Q:3 Write a program that takes input a number from user &
//              state whether the number is positive, negative or zero.

// let a = prompt(" Check the number is positive, negative or zero.");

// if (a > 0)
//     alert("The Numbe is Positive");
// else if (a == 0) {
//     alert("The Numbe is Zero")
// }
// else {
//     alert("The Numbe is Negative")
// }


//=======>  Q : 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise


// let a = prompt(" Enter Vowel");

// if (a == 'v' || a == 'o' || a == 'w' || a == 'e' || a == 'l') {
//     alert("The character is a Vowel");
// }
// else {
//     alert("The character is a Consonant")
// }


//=======>  5. Write a program that
// a. Store correct password in a JS letiable.

// let a = prompt("Please enter your password  <password is sajid> ");
// if(a === "sajid"){
//     alert("Password is Correct")
// }
// else{
//     alert("Incorrect password")
// }


//=======> 6 This if/else statement does not work. Try to fix it:


// let greeting;
// let hour = 13;
// if (hour < 18) {
//     alert (greeting = "Good day");

// }    else{
// hour = "Good evening";
//}


//=======>  7. Write a program that takes time as input from user in 24
//hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements


let a = prompt("Enter the time based on 24 hours like 19, 23, 24");
let time = (
    (a === "0") ? "12 AM" :
    (a === "1") ? "1 AM" :
    (a === "2") ? "2 AM" :
    (a === "3") ? "3 AM" :
    (a === "4") ? "4 AM" :
    (a === "5") ? "5 AM" :
    (a === "6") ? "6 AM" :
    (a === "7") ? "7 AM" :
    (a === "8") ? "8 AM" :
    (a === "9") ? "9 AM" :
    (a === "10") ? "10 AM" :
    (a === "11") ? "11 AM" :
    (a === "12") ? "12 PM" :
    (a === "13") ? "1 PM" :
    (a === "14") ? "2 PM" :
    (a === "15") ? "3 PM" :
    (a === "16") ? "4 PM" :
    (a === "17") ? "5 PM" :
    (a === "18") ? "6 PM" :
    (a === "19") ? "7 PM" :
    (a === "20") ? "8 PM" :
    (a === "21") ? "9 PM" :
    (a === "22") ? "10 PM" :
    (a === "23") ? "11 PM" :
    (a === "24") ? "12 PM" :
    "Enter Correct Time"
);

alert("Time is " + time);
