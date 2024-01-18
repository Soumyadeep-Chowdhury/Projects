let todoList = [
  {
    item : 'abcd' , 
    dueDate : '29-11-2023',
  },

  {
    item : 'efgh' , 
    dueDate : '29-11-2023',
  }
];
displayItems();

localStorage.setItem('todoList', JSON.stringify(todoList));

let retrieveTodoList = JSON.parse(localStorage.getItem('todoList'));

console.log(retrieveTodoList);

function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item : todoItem , dueDate : todoDate});
  inputElement.value = '';

  displayItems();
}

function displayItems(){
  let containerElement = document.querySelector('.todo-container');

  let newHtml = '';

  for (let i=0;i<todoList.length;i++){

    let {item , dueDate} = todoList[i];

    newHtml += ` 
        <span> ${item}</span>
        <span> ${dueDate}</span>
        <button class = "button-delete" onclick="todoList.splice(${i},1);
        displayItems();">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}