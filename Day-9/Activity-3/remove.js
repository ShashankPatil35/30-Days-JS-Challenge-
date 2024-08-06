const divElement = document.getElementById('Divhai');
const RemoveButton = document.getElementById('RemoveElement');

RemoveButton.addEventListener('click',()=>{
    if(divElement){
        divElement.remove();
    }
});

const LiElement = document.getElementById('LiHai');
const LiButton = document.getElementById('RemoveLi');

LiButton.addEventListener('click',()=>{
    if(LiElement){
        const children = LiElement.children;
        if(children.length>0){
            LiElement.removeChild(children[children.length-1]);
        }
    }
});
