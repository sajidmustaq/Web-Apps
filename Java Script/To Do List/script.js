var inputElement = document.getElementById("input");
var addButton = document.getElementById("add");
var paraDiv = document.querySelector(".para");

// Load tasks from local storage on page load
window.onload = function () {
  var savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    paraDiv.innerHTML = savedTasks;
    setupDeleteButtons(); // Reattach delete button event listeners
  }
};

addButton.addEventListener("click", () => {
  var inputValue = inputElement.value;
  if (inputValue === "") {
    alert("Please Enter Task");
  } else {
    var newPara = document.createElement("p");
    newPara.textContent = inputValue;

    // Delete button
    var delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete-button");

    delBtn.addEventListener("click", () => {
      paraDiv.removeChild(newPara);
      updateLocalStorage();
    });

    paraDiv.appendChild(newPara);
    newPara.appendChild(delBtn);
    inputElement.value = "";

    // Save tasks to local storage
    updateLocalStorage();
    setupDeleteButtons(); // Reattach delete button event listeners
  }
});

function updateLocalStorage() {
  var tasks = paraDiv.innerHTML;
  localStorage.setItem("tasks", tasks);
}

function setupDeleteButtons() {
  var deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      var parentPara = button.parentElement;
      paraDiv.removeChild(parentPara);
      updateLocalStorage();
    });
  });
}
