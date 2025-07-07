
// alert("Linked")
const addBtn = document.getElementById('add-btn')
const todoInput = document.getElementById('todo-input')

const todoItemsContainer = document.getElementById('todo-items-container')


addBtn.addEventListener('click', () => {
    const value = todoInput.value
    // console.log('User Entered',value)

    const li = document.createElement('li') //creates an li tag
    li.innerText = value //`sets the text of the li tag to the value entered by the user
    // console.log(li)

    const delButton = document.createElement('button') //creates a delete button
    delButton.innerText = 'Delete' //sets the text of the delete button

    delButton.addEventListener('click', function(){
        li.remove() //removes the li tag when the delete button is clicked
    })

    li.appendChild(delButton) //appends the delete button to the li tag

    
    
    todoItemsContainer.appendChild(li) //appends the li tag to the todoItemsContainer
    todoInput.value = '' //clears the input field after adding the todo items

})  