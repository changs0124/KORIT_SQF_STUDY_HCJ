let todoList = [];

let emptyTodo = {
    id: 0,
    content: "",
    date: ""
};

let todo = {
    ...emptyTodo
};

function handleTodoInputKeyDown(e) {
    if(e.keyCode === 13) {
        handleTodoOkClick();
    }
};

function handleTodoOkClick(e) {
    if(isBlank(document.querySelector(".todo-input"))) {
        alert("내용을 입력하세요");
        return;
    }
    addTodo();
    clearTodoInput();
};



function addTodo() {
    const todo = {
        id: 0,
        content: document.querySelector(".todo-input"),
        date: transformDate(new Date())
    }
    
};

function clearTodoInput() {
    const todoInput = document.querySelector(".todo-input");
    todoInput.value = "";
    todoInput.focus();
};

function isBlank(input) {
    // "".replace("-", "");
    return !input.value.replaceAll(" ", "");
};

function transformDate(date) {
    // JS에서 month는 0 ~ 11 => +1을 해줘야 한다.
    const dayList = ["일", "월", "화", "수", "목", "금", "토"];
    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}.(${dayList[date.getDay()]}) ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}