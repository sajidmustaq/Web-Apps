function calculateTotalAndAverage() {
    var studentName = document.getElementById('studentName').value;
    var maths = parseInt(document.getElementById('maths').value);
    var physics = parseInt(document.getElementById('physics').value);
    var aemistry = parseInt(document.getElementById('aemistry').value);
    var english = parseInt(document.getElementById('english').value);
    var biology = parseInt(document.getElementById('biology').value);

    if (isNaN(maths) || isNaN(physics) || isNaN(aemistry) || isNaN(english) || isNaN(biology)) {
        alert('Please enter valid marks for all subjects');
        return;
    }

    var total = maths + physics + aemistry + english + biology;
    var average = total / 5;
    var grade = '';

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
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

//  var n = prompt("aeck your number", "Type your number here");
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

// var a = prompt("Enter Alphabat lowercase or uppercase  ", "Like A or a")
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


// var a = prompt("Enter Number 1");
// var b = prompt("Enter Number 2");

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

// var a = prompt(" Check the number is positive, negative or zero.");

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


// var a = prompt(" Enter Vowel");

// if (a == 'v' || a == 'o' || a == 'w' || a == 'e' || a == 'l') {
//     alert("The character is a Vowel");
// }
// else {
//     alert("The character is a Consonant")
// }


//=======>  5. Write a program that
// a. Store correct password in a JS variable.

// var a = prompt("Please enter your password  <password is sajid> ");
// if(a === "sajid"){
//     alert("Password is Correct")
// }
// else{
//     alert("Incorrect password")
// }


//=======> 6 This if/else statement does not work. Try to fix it:


// var greeting;
// var hour = 13;
// if (hour < 18) {
//     alert (greeting = "Good day");

// }    else{
// hour = "Good evening";
//}


//=======>  7. Write a program that takes time as input from user in 24
//hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements


var a = prompt("Enter the time based on 24 hours like 19 , 23 ,24  ");
if (a === "0") {
    alert("Time is 12 AM")
}
else if (a === "1") {
    alert("Time is 1 AM")
}
else if (a === "2") {
    alert("Time is 2 AM")
}
else if (a === "3") {
    alert("Time is 3 AM")
}
else if (a === "4") {
    alert("Time is 4 AM")
}
else if (a === "5") {
    alert("Time is 5 AM")
}
else if (a === "6") {
    alert("Time is 6 AM")
}
else if (a === "7") {
    alert("Time is 7 AM")
}
else if (a === "8") {
    alert("Time is 8 AM")
}
else if (a === "9") {
    alert("Time is 9 AM")
}
else if (a === "10") {
    alert("Time is 10 AM")
}
else if (a === "11") {
    alert("Time is 11 AM")
}
else if (a === "12") {
    alert("Time is 12 PM")
}
else if (a === "13") {
    alert("Time is 1 PM")
}
else if (a === "14") {
    alert("Time is 2 PM")
}
else if (a === "15") {
    alert("Time is 3 PM")
}
else if (a === "16") {
    alert("Time is 4 PM")
}
else if (a === "17") {
    alert("Time is 5 PM")
}
else if (a === "18") {
    alert("Time is 6 PM")
}
else if (a === "19") {
    alert("Time is 7 PM")
}
else if (a === "20") {
    alert("Time is 8 PM")
}
else if (a === "21") {
    alert("Time is 9 PM")
}
else if (a === "22") {
    alert("Time is 10 PM")
}
else if (a === "23") {
    alert("Time is 11 PM")
}
else if (a === "24") {
    alert("Time is 12 PM")
}
else {
    alert("Enter Correct Time")
}
