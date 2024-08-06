const image = document.getElementById('image');
const changeSrc = document.getElementById('ChangeSrcButton');
const toggleClassBtn = document.getElementById('ToggleClassButton');
const title = document.getElementById('title');
changeSrc.addEventListener('click',()=>{
    image.src = 'https://www.w3schools.com/w3images/mac.jpg';
});

toggleClassBtn.addEventListener('click',()=>{
    title.classList.toggle('highlight');
});

