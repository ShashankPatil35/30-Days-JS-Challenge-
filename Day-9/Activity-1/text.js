const myElement = document.getElementById("main-heading");
const ChangeTextButton = document.getElementById("ChangeTextButton");

ChangeTextButton.addEventListener('click',()=>{
    myElement.textContent = "This is New Text";
});
const paragraph = document.querySelector(".para");
const ChangeColorButton = document.getElementsByClassName("ChangeColor")[0];
ChangeColorButton.addEventListener('click',()=>{
    paragraph.style.backgroundColor = "lightblue";
});
    