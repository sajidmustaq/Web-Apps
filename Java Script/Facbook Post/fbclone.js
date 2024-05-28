



// popup js
let popupForm = document.getElementById("popupForm");

function openForm() {
  document.getElementById("popupForm").style.display = "block";
}
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}

// post Creation
 
let creatBtn = document.getElementById("Creat-btn");
creatBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let cradInner = document.getElementById("cradInner");
  let newCard = document.createElement("div");
  let postName = document.getElementById("name").value;
  let postWrite = document.getElementById("cardbdy-p1").value;
  let fileInput = document.getElementById("files"); 
  let popupForm = document.getElementById("popupForm");
  
  // Check if a file is selected
    let file = fileInput.files[0];
    let imageURL = URL.createObjectURL(file); // Get the URL of the selected image

    newCard.classList.add("col-md-4");
    newCard.innerHTML = `
      <div class="card mb-4 shadow-sm">
        <img src="${imageURL}" class="card-img-top" alt="Post Image">
        <h3 id="posterName">${postName}</h3>
        <p id="car-p1">5 hour ago <i class="fa-solid fa-user-group"></i></p>
        <p id="card-p2"></p>



        // popup js
        let popupForm = document.getElementById("popupForm");
        
        function openForm() {
          document.getElementById("popupForm").style.display = "block";
        }
        function closeForm() {
          document.getElementById("popupForm").style.display = "none";
        }
        
        // post Creation
         
        let creatBtn = document.getElementById("Creat-btn");
        creatBtn.addEventListener("click", (e) => {
          e.preventDefault();
          let cradInner = document.getElementById("cradInner");
          let newCard = document.createElement("div");
          let postName = document.getElementById("name").value;
          let postWrite = document.getElementById("cardbdy-p1").value;
          let fileInput = document.getElementById("files"); 
          let popupForm = document.getElementById("popupForm");
          
          // Check if a file is selected
            let file = fileInput.files[0];
            let imageURL = URL.createObjectURL(file); // Get the URL of the selected image
        
            newCard.classList.add("col-md-4");
            newCard.innerHTML = `
              <div class="card mb-4 shadow-sm">
                <img src="${imageURL}" class="card-img-top" alt="Post Image">
                <h3 id="posterName">${postName}</h3>
                <p id="car-p1">5 hour ago <i class="fa-solid fa-user-group"></i></p>
                <p id="card-p2"></p>
                <div class="card-body">
                  <p class="card-text" id="cardbdy-p1">${postWrite}</p>
                  <hr>
                  <br>
                  <p id="cardbdy-p2"><i class="fa-solid fa-thumbs-up"></i>
                  <i class="fa-solid fa-heart"></i>
                  Your Friends and Other</p>
                  <p id="cardbdy-p3">15 comments</p>
                  <hr>
                  <i class="fa-solid fa-thumbs-up"></i> Like
                  <i class="fa-regular fa-message"></i> Comments
                  <hr>
                </div>
              </div>
            `;
        
            cradInner.appendChild(newCard);
            popupForm.style.display = "none";
            popupForm.reset(); // Reset the form
        });
        
        
        let logout=document.getElementById("logout")
        logout.addEventListener("click",()=>{
          window.location.href="index.html"
        })
        <div class="card-body">
          <p class="card-text" id="cardbdy-p1">${postWrite}</p>
          <hr>
          <br>
          <p id="cardbdy-p2"><i class="fa-solid fa-thumbs-up"></i>
          <i class="fa-solid fa-heart"></i>
          Your Friends and Other</p>
          <p id="cardbdy-p3">15 comments</p>
          <hr>
          <i class="fa-solid fa-thumbs-up"></i> Like
          <i class="fa-regular fa-message"></i> Comments
          <hr>
        </div>
      </div>
    `;

    cradInner.appendChild(newCard);
    popupForm.style.display = "none";
    popupForm.reset(); // Reset the form
});


let logout=document.getElementById("logout")
logout.addEventListener("click",()=>{
  window.location.href="index.html"
})