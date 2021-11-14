const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const ADDTODO = "addedTodo";
let todos = [];

function saveTodos() {
  localStorage.setItem(ADDTODO, JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
  
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value; //input의 value를 새로운 변수에 복사
  todoInput.value = ""; //todoInput값 비우기
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodoList = localStorage.getItem(ADDTODO);

if (savedTodoList !== null) {
  const parsedTodos = JSON.parse(savedTodoList);
  todos = parsedTodos; //이전에 저장된 todo 사라지지 않게 복원
  parsedTodos.forEach(paintTodo);
}