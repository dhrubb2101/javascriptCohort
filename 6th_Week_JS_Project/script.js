const addTaskBtn = document.getElementById('add-task-btn')

const todoBoard = document.getElementById('todo-board')

// function attachDragEvents(target){
//      target.addEventListener('dragstart', ()=> {
//         target.classList.add('flying')
//     })
//     target.addEventListener('dragend', ()=> {
//         target.classList.remove('flying')
//     })

// } 
//since code was repeating i made a function for it

addTaskBtn.addEventListener('click', ()=> {
    const input = prompt('What is the task?')
    if(!input) return


    const taskCard = document.createElement('p')
    taskCard.classList.add('item')
    taskCard.innerText = input
    taskCard.setAttribute('draggable', true)

    // attachDragEvents(taskCard)
    //we have called here taskCard because we want to attach drag events to this newly created taskCard
    //jo bhi naya task add hoga uske sath drag events bhi attach ho jayenge

    //ab humne function bana diya hai to ab hum yaha pe directly function call kar denge
    taskCard.addEventListener('dragstart', ()=> {
        taskCard.classList.add('flying')
    })
    taskCard.addEventListener('dragend', ()=> {
        taskCard.classList.remove('flying')
    })
    todoBoard.appendChild(taskCard)

})

// const allBoards = document.getElementsByClassName('board')
const allBoards = document.querySelectorAll('.board')
const allItems = document.querySelectorAll('.item')

    // allItems.forEach(attachDragEvents)
allItems.forEach(item => {
    item.addEventListener('dragstart', ()=> {
        item.classList.add('flying')
    })
    item.addEventListener('dragend', ()=> {
        item.classList.remove('flying')
    })
})

allBoards.forEach(board => {
    board.addEventListener('dragover', ()=>{
        const flyingElement = document.querySelector('.flying')
        console.log(board, 'Kuch toh mere upar se gya', flyingElement)

        board.appendChild(flyingElement)
    })
})

