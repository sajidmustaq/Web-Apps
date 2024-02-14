
var inputElement = document.getElementById("input");
var addButton = document.getElementById("add");
var paraDiv = document.querySelector(".para");

addButton.addEventListener("click", () => {
  var inputValue = inputElement.value;
  if (inputValue === "") {
    alert("Please Enter Task"); // Fixed typo in the alert message
  } else {
    var newPara = document.createElement("p");
    newPara.textContent = inputValue;
    
    // Delete button
    var delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete-button");

    delBtn.addEventListener("click", () => {
      paraDiv.removeChild(newPara);
    });

    paraDiv.appendChild(newPara);
    newPara.appendChild(delBtn);
    inputElement.value = "";
  }
});
