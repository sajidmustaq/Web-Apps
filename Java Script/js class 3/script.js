let age = 15;
let siteVisit = 14;
let dob = 1990;
let visitorName = "John Doe";
let qty = 5;
let product = "T-shirts";
let storName = "XYZ";

alert("I am " + age + " years old");
alert("You have visited this site " + siteVisit + " times");

document.write("My birth Years is " + "<b>" + dob + "<br>" + "</b>" + " ");
document.write("Data type of my declared variable is " + typeof dob);
document.write(
  "<br>" +
    visitorName +
    " orderd  " +
    "<b>" +
    qty +
    " " +
    product +
    " On " +
    storName +
    "</b>" +
    ""
);

document.write("<b> </b>");
document.write("<br>");
document.write("VARIABLE NAMES: LEGAL & ILLEGAL");

document.write("<br>");

document.write("<br>");
document.write(
  "Variable names can only contain <b>letters, numbers,dollar signs</b> and  <b>underscores.</b> For example <b>$my_1stVariable</b>"
);
document.write("<br>");
document.write(
  "Variables must begin with a letter, dollar signs or underscores. <br> For example <b> $name, _name or name</b>"
);
document.write("<br>");
document.write("Variable names are case <b>case sensitive</b>");
document.write("<br>");
document.write("Variable names should not be JS <b>Keyword</b> ");
