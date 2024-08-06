const AddDivButton = document.getElementById('button');

AddDivButton.addEventListener('click',()=>{
    const divToAdd = document.createElement('div');


     divToAdd.textContent = 'This is new div appended to body!!';
    document.body.appendChild(divToAdd);
});

const AddLiButton = document.getElementById('buttonToLi');
AddLiButton.addEventListener('click',()=>{
    const LiToAdd = document.createElement('li');
    LiToAdd.textContent = 'List 5(new)';
    document.querySelector("ul").appendChild(LiToAdd);
    // document.body.appendChild(LiToAdd);
});

