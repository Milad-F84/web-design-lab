//DOM NODES
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const root = document.getElementById("root");
let editableItemId = null;
let TODOS = [
  {
    id: 0,
    text: "football",
    isDone: false,
  },
  {
    id: 1,
    text: "volleyball",
    isDone: false,
  },
];

//FUNCTIONS
function addTodo() {
  const inputVal = input.value;
  const newId = Math.floor(Math.random() * 10000000);

  const newTodo = {
    id: newId,
    text: inputVal,
    isDone: false,
  };
  TODOS.push(newTodo);
  input.value = "";
  render();
}
render();

function render() {
  const template = TODOS.map((todo) => {
    if (todo.id === editableItemId) {
      return `
        <li>
        <input id="editInput" type="text" value="${todo.text}"></input>
        <button onclick="sumbitTodo(${todo.id})">SUMBIT</button>
        </li>
        `;
    }
    return `
    <li>
    ${todo.text}
    <button onclick="deleteTodo(${todo.id})">DELETE</button>
    <button onclick="editTodo(${todo.id})">EDIT</button>
    </li>
    `;
  }).join("");
  root.innerHTML = template;
}
function deleteTodo(todoId) {
  const newTodos = TODOS.filter((todo) => todo.id != todoId);
  TODOS = newTodos;
  render();
}
function editTodo(todoId) {
  editableItemId = todoId;
  render();
}
function sumbitTodo(todoId) {
    const inputEdit = document.getElementById("editInput");
    const newTodos = TODOS.map((todo) => {
        if(todo.id === todoId){
            return{
                ...todo,
                text: inputEdit.value,
            };
        }else{
            return todo;
        }
    });
    TODOS = newTodos;
    editableItemId = null;
    render()
}

//EVENT
input.addEventListener("keypress", (evt) => {
  if (evt.key === "Enter") {
    addTodo();
  }
});
