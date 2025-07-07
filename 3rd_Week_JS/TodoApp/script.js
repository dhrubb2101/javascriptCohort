alert("Linked")
const addBtn = document.getElementById('add-btn')
const todoInput = document.getElementById('todo-input')

addBtn.addEventListener('click', () => {
    const value = todoInput.value
    console.log('User Entered',value)
})  