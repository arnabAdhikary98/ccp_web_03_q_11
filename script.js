const heading = document.getElementById("main-heading");
const paragraphs = document.getElementsByTagName("p");
const containerDiv = document.querySelector(".container");


heading.textContent = "Welcome to the DOM World!";

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "blue";
}

containerDiv.style.backgroundColor = "yellow";