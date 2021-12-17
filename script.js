// Taking Values
let mainBtn = document.getElementById('mainBtn')
let mainInput = document.getElementById('input')
let save = document.getElementById('save')
console.log(save);

// Cotainer Todo
let todo = document.getElementById('todo')

mainBtn.addEventListener('click', function(){
    // Creating Elements
    let todoList = document.createElement('div')
    todoList.setAttribute('class', 'todo-list');
    let todoInput = document.createElement('input')
    todoInput.setAttribute('class', 'todo-input')
    let deleteBtn = document.createElement('buttom')
    deleteBtn.setAttribute('id', 'delete')
    let editBtn = document.createElement('buttom')
    editBtn.setAttribute('id', 'edit')
    // Values
    todoInput.value = mainInput.value;
    todoInput.disabled = true;
    deleteBtn.innerHTML = 'Delete';
    editBtn.innerHTML = 'Edit';
    // Pushing Elements
    todoList.appendChild(todoInput)
    todoList.appendChild(editBtn)
    todoList.appendChild(deleteBtn)    
    // Push eletment to HTML
    todo.appendChild(todoList)
    mainInput.value = '';

    editBtn.addEventListener('click', function(){
        todoInput.disabled = false;
    })
    todoInput.addEventListener('focusout', function(){
        todoInput.disabled = true;
    })

    deleteBtn.addEventListener('click', function(){
        todoList.remove()
    })
})

