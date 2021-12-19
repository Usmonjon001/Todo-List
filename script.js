let mainInput = document.getElementById('input')
let submit = document.getElementById('mainBtn')
let todo = document.getElementById('todo')
let save = document.getElementById('save')

let localdata = []

submit.addEventListener('click', addTodo);

let data = JSON.parse(localStorage.getItem('todo'))

if(data){
    console.log(data);
    data.map(el => {
        addTodo(el)
    })
} else {
    console.log('Malumot Yo\'q');
}

function addTodo(value){
        save.disabled = false;
        let wrapperCard = document.createElement('div');
        wrapperCard.setAttribute('class', 'todo-list-item');
    
        let todoInput = document.createElement('input');
        todoInput.setAttribute('class', 'todoInput')
        
        
        todoInput.value =  mainInput.value ?  mainInput.value : value;
    
        let todoBtn = document.createElement('button')
        todoBtn.setAttribute('class', 'edit')
        todoBtn.innerHTML = 'Edit';
    
        let todoBtnDelete = document.createElement('button')
        todoBtnDelete.setAttribute('class', 'delete')
        todoBtnDelete.innerHTML = 'Delete';
    
        todoInput.disabled = true;
    
        todoBtn.addEventListener('click', function(){
            todoInput.disabled = false;
        })
    
    
        todoInput.addEventListener('focusout', function(){
            todoInput.disabled = true;
        })
    
        todoBtnDelete.addEventListener('click', function(){
            wrapperCard.remove()
        })
    
        
    
        wrapperCard.appendChild(todoInput);
        wrapperCard.appendChild(todoBtn);
        wrapperCard.appendChild(todoBtnDelete)
        todo.appendChild(wrapperCard)
        
    
        mainInput.value = '';
    
}



save.addEventListener('click', function(){
    let wrapperCard = document.getElementsByClassName('todo-list-item')
    let todoInput = document.getElementsByClassName('todoInput')
    localdata = []
    console.log(todoInput);
    if(todoInput.length == 0){
        alert('Hech qanday malumot kiritilmagan!')
    } else{
        for(el of todoInput){
            console.log(el.value);
            localdata.push(el.value);
        }
    }
    localStorage.setItem('todo', JSON.stringify(localdata))
    save.disabled = true;
})

