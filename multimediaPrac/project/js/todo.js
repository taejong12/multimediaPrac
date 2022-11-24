const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

//해야할 일을 저장
function saveToDos() {
    // console.log(toDos.value);
    // console.log(toDos);
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // console.log(localStorage.getItem(TODOS_KEY));
}

//해야할 일을 삭제
function deleteToDo(event) {
    console.log(event.target);
    event.target.closest('li').remove();
    
    for(var i=0;i<toDos.length;i++){
        console.log(toDos);
        if(String(toDos[i].id)===event.target.closest('li').id){
            console.log(toDos.splice(i,1));
            saveToDos();
            break;
        };
    }

    // let toDosid=0;
    // for(var i=0;i<toDos.length;i++){
    //     console.log(toDos[i].id);
    //     toDosid=toDos[i].id;
    // }
    // console.log(toDosid);
    // console.log(event.target.closest('li').id);

    // var toDosStr=String(toDosid);
    // console.log(toDosStr);

console.log(toDos);
    // console.log(toDos.filter(toDos=>toDosid==event.target.closest('li').id));
    // console.log(toDos.id);

    // if (toDos.find(obj => obj.id == event.target.closest('li').id)) {
       

    // }

   // event.target.parentElement.remove();

}

//해야할 일 출력
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "ⓧ";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

//해야할 일을 객체로 생성 저장을 호출
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    console.log(toDos);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//화면 최초 로드시 이전의 해야할 일을 화면에 표시
const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    // console.log(parsedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}