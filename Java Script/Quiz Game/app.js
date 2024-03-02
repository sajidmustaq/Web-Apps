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
let optionSelect = document.querySelectorAll(".option");
let total = qaObjects.length;
let right = 0;
let wrong = 0;

// Declare reset function here
let resetGame = () => {
index = 0;
right = 0;
wrong = 0;
loadQuestion();
};
let reset = () => {
optionSelect.forEach((input) => {
    input.checked = false;
    input.parentNode.className = "form-check"; // Reset the class
});
};
// function resetGame() {
//   index = 0;
//   right = 0;
//   wrong = 0;
//   loadQuestion();
// }

let loadQuestion = () => {
  if (index === total) {
      return endQuiz();
  }
  
  // reset(); // Now it won't throw a reference error
  
  let data = qaObjects[index];
  quesBox.innerText = `${index + 1}: ${data.question}`;

  optionSelect[0].nextElementSibling.innerText = data.a;
  optionSelect[1].nextElementSibling.innerText = data.b;
  optionSelect[2].nextElementSibling.innerText = data.c;
  optionSelect[3].nextElementSibling.innerText = data.d;
};

loadQuestion();

let submit = () => {
let data = qaObjects[index];
let ans = getAnswer();

// Check if 'data' is defined before accessing 'correctAnswer'
if (data && data.correctAnswer) {
    if (ans === data.correctAnswer) {
        right++;
    } else {
        wrong++;
    }
    index++;

    // Move the loadQuestion call outside the if statement
    loadQuestion();

    // Reset the background color for all options
    optionSelect.forEach((input) => {
        input.parentNode.className = "form-check";
    });
} else {
    console.error('Error: Unable to retrieve data for the current question.');
}
};



let getAnswer = () => {
let checkedRadio = document.querySelector(".option:checked");

if (checkedRadio) {
    return checkedRadio.value;
} else {
    // Handle the case where no radio button is checked, e.g., return a default value
    return null;
}
};


let endQuiz = () => {
document.getElementById("quesBox").innerHTML = `
  <h1>Quiz Completed</h1>
  <p id="correct">Correct Answers: ${right}</p>
  <p id="wrong">Wrong Answers: ${wrong}</p>
  <p>Thank you for completing the quiz!</p>
 
  <button  id="resetGame" onclick="resetGame()">Reset Game</button>`;
};


function sel(id) {
  var divs = document.getElementById("container").getElementsByTagName("div");
  for (var i = 0; i < divs.length; i++) {
      if (divs[i] != id) {
          divs[i].className = "form-check";
      }
  }
  id.className = "selitem";
}
