const container = document.getElementById('container')

document.querySelector('button').addEventListener('click', userPrompt)

function userPrompt(){
    let size = 101
    while(size > 100){
        size = prompt("Size of the grid?")
        console.log(size)
    }    

    createGrid(size)
}

function createGrid(size){
    document.querySelector('#container').style.width = `${24*size+2}px`
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            let newDiv = document.createElement('div')
            newDiv.className = 'box'
            container.appendChild(newDiv)
        }    
    }

    let boxes = document.getElementsByClassName('box')
    boxes = Array.from(boxes)
    boxes.forEach(box => {
        box.addEventListener('mouseenter',function(){
            box.style.backgroundColor = `rgb(${getRandom()},${getRandom()},${getRandom()})`
        })
    });
    
    // boxes.forEach(box => {
    //     box.addEventListener('mouseleave',function(){
    //         box.style.backgroundColor = 'white'
    //     })
    // });
}

function getRandom(){
    let n = Math.floor(Math.random() * 255)
    return n
}