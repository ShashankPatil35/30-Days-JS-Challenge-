const para = document.getElementById('para');
const changetext = document.getElementById('changetext');

changetext.addEventListener('click',()=>{
    const newPara = 'I am a new Paragraph ......!!!!!!!!!!!!! etc';
    para.textContent = newPara;
});

const container = document.getElementsByClassName('container')[0];

container.addEventListener('mouseover',()=>{
    container.style.borderColor="green";
});

container.addEventListener('mouseout',()=>{
    container.style.borderColor="aquamarine";
});