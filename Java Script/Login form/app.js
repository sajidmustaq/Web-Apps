// Get all input and textarea elements inside the form
var formInputs = document.querySelectorAll('.form input, .form textarea');

// Add event listeners for keyup, blur, and focus events to each input and textarea element
formInputs.forEach(function(input) {
  input.addEventListener('keyup', function(e) {
    var label = this.previousElementSibling;
    if (this.value === '') {
      label.classList.remove('active', 'highlight');
    } else {
      label.classList.add('active', 'highlight');
    }
  });

  input.addEventListener('blur', function(e) {
    var label = this.previousElementSibling;
    if (this.value === '') {
      label.classList.remove('active', 'highlight');
    } else {
      label.classList.remove('highlight');
    }
  });

  input.addEventListener('focus', function(e) {
    var label = this.previousElementSibling;
    if (this.value !== '') {
      label.classList.add('highlight');
    }
  });
});

// Get all tab links and add click event listener to each
var tabLinks = document.querySelectorAll('.tab a');
tabLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    var tab = this.parentNode;
    var tabs = tab.parentNode.children;
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }
    tab.classList.add('active');

    var target = this.getAttribute('href');
    var tabContents = document.querySelectorAll('.tab-content > div');
    tabContents.forEach(function(content) {
      if (content.id === target.substr(1)) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  });
});
