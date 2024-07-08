let todoText = document.querySelector(".todoText");
let addTodoBtn = document.querySelector(".addTodoBtn");
let todos = document.querySelector(".todos");


addTodoBtn.addEventListener("click", () => {
  if (todoText.value === "") {
    alert("You Must Write Somthing... !");
    todoText.focus();
  }
  else {

    let newTodoHTML = `
     <div class="todo">
        <p>${todoText.value}</p>
        <ion-icon name="close-outline" class="deleteBtn"></ion-icon>
      </div>
    `;


    todos.innerHTML += newTodoHTML;
    saveTodos();
    addEventListeners();
    addToggleEvent()
  }
});


function addEventListeners(e) {
let deleteBtns = document.querySelectorAll(".deleteBtn");
  deleteBtns.forEach((e, i) => {
    e.addEventListener("click", () => {
      e.parentElement.remove();
      saveTodos();
    })
  })
}

function addToggleEvent(){
  let todo = document.querySelectorAll(".todo");
  todo.forEach((el,i)=>{
    el.addEventListener("click",(e)=>{
      if(e.target.classList.contains("deleteBtn")){
        return
      }
      el.classList.toggle("active")
      saveTodos();
    })
  })
}

function getTodos() {
  let todoss = localStorage.getItem("todos");
  if (todos) {
    todos.innerHTML = todoss;
  }
  else {
    return false
  }
}

function saveTodos() {
  let savedTodos = localStorage.setItem("todos", todos.innerHTML);
};

window.addEventListener("load", () => {
  getTodos();
  addEventListeners();
  addToggleEvent();
})

//    <!-- <div class="todo">
//    <p>task 1 here</p>
//    <ion-icon name="close-outline" class="deleteBtn"></ion-icon>
//  </div>

//  <div class="todo active">
//    <p>task 1 here</p>
//    <ion-icon name="close-outline" class="deleteBtn"></ion-icon>
//  </div>

//  <div class="todo">
//    <p>task 1 here</p>
//    <ion-icon name="close-outline" class="deleteBtn"></ion-icon>
//  </div> -->