const addTaskBtn = document.getElementById('add-task-btn')

const todoBoard = document.getElementById('todo-board')
addTaskBtn.addEventListener('click', ()=> {
    const input = prompt('What is the task?')
    if(!input) return


    const taskCard = document.createElement('p')
    taskCard.classList.add('item')
    taskCard.innerText = input
    taskCard.setAttribute('draggable', true)

    todoBoard.appendChild(taskCard)

})

// const allBoards = document.getElementsByClassName('board')
const allBoards = document.querySelectorAll('.board')
const allItems = document.querySelectorAll('.item')

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

