function boldText() {
    document.execCommand("bold", false, null);
  }
// function boldText()  {
//   const strongElement = document.createElement("strong");
//   const userSelection = window.getSelection();
//   const selectedTextRange = userSelection.getRangeAt(0);
//   selectedTextRange.surroundContents(strongElement);
// }
// function toggleBold() {
//   const selection = window.getSelection();
//   if (selection.rangeCount) {
//     const range = selection.getRangeAt(0);
//     const span = document.createElement("span");
//     span.style.fontWeight = "bold";
//     range.surroundContents(span);
//     selection.removeAllRanges();
//     selection.addRange(range);
//   }
// }

  function italicizeText() {
    document.execCommand("italic", false, null);
  }

  function underlineText() {
    document.execCommand("underline", false, null);
  }
  function alignLeft() {
    document.execCommand("justifyLeft", false, null);
  }

  function alignCenter() {
    document.execCommand("justifyCenter", false, null);
  }

  function alignRight() {
    document.execCommand("justifyRight", false, null);
  }

  function alignJustify() {
    document.execCommand("justifyFull", false, null);
  }

  function increaseFontSize() {
    var currentSize = parseInt(document.queryCommandValue('fontSize'),10) || 2;
    var newSize = currentSize + 1;
    if (newSize <= 200) {
      document.execCommand('fontSize', false, newSize.toString());
    }
  }

  function decreaseFontSize() {
  
    var currentSize = parseInt(document.queryCommandValue('fontSize'),10) || 2;
    var newSize = currentSize - 1;
    if (newSize >= 2) {
      document.execCommand('fontSize', false, newSize.toString());
    }
  }

  function highlightText() {
    const searchInput = document.getElementById('searchInner');
    const searchValue = searchInput.value.trim();
    const contentElement = document.querySelector('#editor');

    if (searchValue !== '') {
        const content = contentElement.textContent;
        const regex = new RegExp(searchValue, 'gi');
        const highlightedContent = content.replace(regex, (match) => `<span class="highlight">${match}</span>`
        );
        contentElement.innerHTML = highlightedContent;
    } else {
        contentElement.innerHTML = contentElement.textContent;
    }

}
