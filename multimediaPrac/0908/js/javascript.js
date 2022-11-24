const item=document.querySelector('.item');

item.addEventListener('dragstart', dragStrat);

// function dragStrat(e){
//     console.log(e);
//     console.log(e.dataTransfer);
//     console.log(e.target, e.target.id);
//     e.dataTransfer.setData('text/plain',e.target.id);
// }

function dragStrat(e){
    console.log('Drag Start');
    console.log(e.target, e.target.id);
    e.dataTransfer.setData('text/plain',e.target.id);
    console.log(e.dataTransfer);
    setTimeout(()=>{
        e.target.classList.add('hide');   
    },1);
}

const boxes = document.querySelectorAll('.box');
console.log(boxes);

boxes.forEach(box=>{
    console.log(box);
    box.addEventListener('dragover', dragOverHandler);
    box.addEventListener('drop',dropHandler);
    box.addEventListener('dragenter', dragEnterHandler);
    box.addEventListener('dragleave', dragLeaveHandler);

});

function dragOverHandler(e){
    console.log('Drag Over');
    e.preventDefault(); // drop이 가능하다는 표시를 해줌
    e.target.classList.add('drag-over');
}

function dropHandler(e){
    console.log('Drop!');
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    console.log(id);
    const dragThing=document.getElementById(id);
    e.target.appendChild();
    e.target.classList.remove('drag-over');
    
}


function dragEnterHandler(e){
    console.log('Drag Enter');
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeaveHandler(e){
    console.log('Drag Leave');
    e.target.classList.remove('drag-over');
}