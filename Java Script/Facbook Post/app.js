document.querySelectorAll('.dropdown-toggle').forEach(item => {
  item.addEventListener('click', event => {
      if (event.target.classList.contains('dropdown-toggle')) {
          event.target.classList.toggle('toggle-change');
      } else if (event.target.parentElement.classList.contains('dropdown-toggle')) {
          event.target.parentElement.classList.toggle('toggle-change');
      }
  })
});

let createPostButton = document.querySelector("#createPost");
createPostButton.addEventListener("click", () => {
  let postContainer = document.getElementById("cards_landscape_wrap-2");

  let newBox = document.createElement("div");
  newBox.classList.add("col-md-12", "mt-3");
  newBox.innerHTML = `
      <div class="card-flyer">
          <div class="text-box">
              <h1 class="card-title">Facebook Post</h1>
              <a href="#" class="card-text" id="createPost">Create Post</a>
          </div>
      </div>`;

  postContainer.appendChild(newBox);
});