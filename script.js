// slecting overlay,popup-box,button
var overlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var button = document.getElementById("add-popup-button");

//addin event listener to button
button.addEventListener("click", function () {
  overlay.style.display = "block";
  popupbox.style.display = "block";
});

//select concel button
var cancelBtn = document.getElementById("cancel");

//adding event listener to concel button
cancelBtn.addEventListener("click", function (event) {
  event.preventDefault();
  overlay.style.display = "none";
  popupbox.style.display = "none";
});

//selectinh container and addbook and book title,book author and book description
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var bookTitle = document.getElementById("book-title-input");
var bookAuthor = document.getElementById("book-author-input");
var bookDesc = document.getElementById("book-description-input");

// adding event listener to add button
addbook.addEventListener("click", function (event) {
  event.preventDefault();

  var div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = ` <h2>${bookTitle.value}</h2>
         <h5>${bookAuthor.value}</h5>
         <p>${bookDesc.value}</p>
       
          <button onclick="Del(event)">Delete</button>`;
  container.appendChild(div);

  overlay.style.display = "none";
  popupbox.style.display = "none";
});

function Del(event){
   event.target.parentElement.remove();
}