const $button = document.querySelector('#sidebar-toggle');
const $wrapper = document.querySelector('#wrapper');

$button.addEventListener('click', (e) => {
  e.preventDefault();
  $wrapper.classList.toggle('toggled');
});

let createClassButton = document.getElementById('creat-class');
let dropdownContent = document.getElementById('myDropdown');
// Add a click event listener to the button
createClassButton.addEventListener('click', function () {
  // Toggle the visibility of the dropdown content
  dropdownContent.classList.toggle('myDropdownshow');

});

let createClassButtonTwo = document.getElementById('removeCard');
let dropdownContentTwo = document.getElementById('myDropdownTwo');

createClassButtonTwo.addEventListener('click', function () {
  // Toggle the visibility of the dropdown content
  dropdownContentTwo.classList.toggle('myDropdownshowTwo');

});


// form container show

let creatClassbtn = document.getElementById('creatMyClass');
let formContainer = document.getElementById('classFormContainer');
creatClassbtn.addEventListener('click', () => {
  formContainer.classList.add('form-containershow');
  dropdownContent.classList.remove('myDropdownshow');
});
// close button
var btnClose = document.getElementById('btnClose');
btnClose.addEventListener('click', () => {
  formContainer.classList.remove('form-containershow');
});

var classFormContainer = document.getElementById('classFormContainer');

// card create
let creatCardbtn = document.getElementById('creat-card-btn');
creatCardbtn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  event.stopPropagation(); // Stop the event from reaching other listeners

  let className = document.getElementById('className').value;
  let batchInput = document.getElementById('batch').value;
  let teacherName = document.getElementById('teacherName').value;

  createAndAppendCard(className, batchInput, teacherName);
  displayContentWrapper();
});

function createAndAppendCard(className, batch, teacherName) {
  var newCard = document.createElement('div');
  newCard.className = 'col-12 col-md-6 col-lg-4 card-box';
  newCard.innerHTML =  `
    <div class="card">
      <div class="box-top">
        <a href="">${className}</a>
        <span><i id="removeCard" class="fa-solid fa-ellipsis-vertical"></i></span>
        <p>${batch}</p>
        <p>${teacherName}</p>
      </div>
      <div class="card-body">
        <img src="logo1.jpg" alt="" />
        <p class="card-text">
          This is a longer card with supporting text below as a
          natural lead-in to additional content. This content is a
          little bit longer.
        </p>
      </div>
      <div class="card-footer">
        <i class="fa-regular fa-folder-closed"></i>
        <i class="fa-regular fa-id-badge"></i>
      </div>
    </div>
  `;
  var cardCreatContainer = document.querySelector('.row.row-cols-2.row-cols-md-6.g-4');
  cardCreatContainer.appendChild(newCard);
  console.log("Card created");
  formContainer.classList.remove('form-containershow');
 
  let removeCard=document.getElementById("remove-Card")
  removeCard.addEventListener("click",()=>{
    cardCreatContainer.removeChild(cardCreatContainer.firstElementChild)
    dropdownContentTwo.classList.remove('myDropdownshowTwo');
    })
}


function displayContentWrapper() {
  var cardContainer = document.getElementById('card-container');
  if (cardContainer) {
    cardContainer.style.display = 'block';
  }
}
