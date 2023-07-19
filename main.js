const container = document.getElementById('container')

for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        let newDiv = document.createElement('div')
        newDiv.className = 'box'
        container.appendChild(newDiv)
    }    
}