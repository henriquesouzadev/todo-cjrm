const formAddTodo = document.querySelector('.form-add-todo')
const inputSearchTodo = document.querySelector('.form-search')
const todosContainer = document.querySelector('.todos-container')
const deleteTodo = document.querySelectorAll('.delete')

const addTodo = (inputValue) => {
   if (inputValue.length) {
      todosContainer.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
         <span>${inputValue}</span>
         <i class="far fa-trash-alt" data-trash="${inputValue}"></i>
      </li>`

      formAddTodo.reset()
   }
}

const removeTodo = (clickedElement) => {
   const trashDataValue = clickedElement.dataset.trash
   const todo = document.querySelector(`[data-todo="${trashDataValue}"]`)
   
   if (trashDataValue) {
      todo.remove()
   }
}

const filterTodo = (inputValue, todos) => {
   todos.forEach((item) => {
      const todoText = item.textContent.toLowerCase()
      const isMatchedTodo = todoText.includes(inputValue) 

      if (!isMatchedTodo) {
         item.classList.remove('d-flex')
         item.classList.add('d-none')
      } else {
         item.classList.remove('d-none')
         item.classList.add('d-flex')
      }
   })
}

const addItemOnTodoList = (event) => {
   event.preventDefault()
   
   const inputValue = event.target.add.value.trim()
   addTodo(inputValue)
}

const removeItemFromTodoList = (event) => {
   const clickedElement = event.target
   removeTodo(clickedElement)
}

const filterItemsOnTodoList = (event) => {
   event.preventDefault()

   const inputValue = event.target.value.trim().toLowerCase()
   const todos = Array.from(todosContainer.children) 

   filterTodo(inputValue, todos)
}

formAddTodo.addEventListener('submit', addItemOnTodoList)

todosContainer.addEventListener('click', removeItemFromTodoList)

inputSearchTodo.addEventListener('input', filterItemsOnTodoList)