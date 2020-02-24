//1
const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

//4
const TODOS_LS = "toDos";

//6
function paintToDo(text) {
  //console.log(text);
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  //span과 button을 li 안에 넣겠다는 말.
  toDoList.appendChild(li);
}

//5
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  //7
  toDoInput.value = "";
}

//3
function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  }
}

//2
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
