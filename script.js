let TodoList = [{
    item:'Buy milk',
    dueDate:'12/09/2023'
    },
    {
        item:'Go to college',
        dueDate:'3/04/2021'
    }
];
displayItem();
function addTodo(){
    let inputElement = document.querySelector('#input-Todo');
    let dateElement = document.querySelector('#todo-date');
    let TodoItem = inputElement.value;
    let todoDate = dateElement.value;
    console.log(TodoItem);
    TodoList.push({item:TodoItem,dueDate:todoDate});
    inputElement.value='';
    dateElement.value='';
    displayItem();
}
function displayItem(){
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for(let i=0;i<TodoList.length;i++){
        let item = TodoList[i].item;
        let dueDate =  TodoList[i].dueDate;
        newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button  class="delete-todo" onclick="TodoList.splice(${i},1);
        displayItem();">Delete</button>
        `;
    }
    containerElement.innerHTML=newHtml;
}