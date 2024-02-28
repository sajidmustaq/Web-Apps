var qaObjects = [
  {
    question: "What does HTML stand for?",

    a: "HyperText Markup Language",
    b: "HyperText Makeup Language",
    c: "HighText Markup Language",
    d: "HyperText Markup Leveler",
    correctAnswer: "a",
  },
  {
    question: "What does CSS stand for?",

    a: "Computer Style Sheets",
    b: "Cascading Style Syntax",
    c: "Creative Style System",
    d: "Cascading Style Sheets",
    correctAnswer: "d",
  },
  {
    question: "How is JavaScript typically embedded in an HTML document?",

    a: "<js> tag",
    b: "<javascript> tag",
    c: "<script> tag",
    d: "<style> tag",
    correctAnswer: "c",
  },
  {
    question: "What is the purpose of the 'box-sizing' property in CSS?",

    a: "Controls the background size of an element",
    b: "Defines the shadow size around an element",
    c: "Specifies the sizing behavior of the content box",
    d: "Sets the border size of an element",
    correctAnswer: "c",
  },
];

let index = 0;
let quesBox = document.getElementById("quesBox");

let loeadQuestion = () => {
  let data = qaObjects[index];
  quesBox.innerText = `${index + 1}) ${data.question}`;
  
};

loeadQuestion();

// Accessing individual Q&A with options
// for (var i = 0; i < qaObjects.length; i++) {
//   console.log("Question " + (i + 1) + ": " + qaObjects[i].question);
//   console.log("Options:");
//   console.log("a. " + qaObjects[i].options.a);
//   console.log("b. " + qaObjects[i].options.b);
//   console.log("c. " + qaObjects[i].options.c);
//   console.log("d. " + qaObjects[i].options.d);
//   console.log("Correct Answer: " + qaObjects[i].correctAnswer);
//   console.log("\n");
// }
