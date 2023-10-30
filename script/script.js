let todoInput = document.getElementById('todo-input');
let todoDisplay = document.getElementById('display-todo');
console.log("Script aded")
let storeddata = [];

window.onkeydown = (e)=>{
    if(e.key == 'Enter')
    {
        addtodo();  
    }
}
window.onload = () => {
    if (localStorage.getItem("todo")) {
        console.log("todo app")
        storeddata = Array.from(localStorage.getItem("todo").split(","));
        Array.from(storeddata).forEach(element => {
            if(element!="")
            {
                todoDisplay.innerHTML +=
                `
        <div class="todo-list">
            <li class="todo-list-item">${element}</li>
            <i class="fa-solid fa-trash" onclick="deletetodo(event.target)"></i>
        </div>`
            }
        });
            
    }
}
const addtodo = () => {
    if (todoInput.value != "") {
        todoDisplay.innerHTML +=
            `
        <div class="todo-list">
            <li class="todo-list-item">${todoInput.value}</li><i class="fa-solid fa-trash"
            onclick="deletetodo(event.target)"></i>
        </div>`
        storeddata.push(todoInput.value)
        todoInput.value = "";
        localStorage.setItem("todo", [storeddata])
    }
    else
        alert("Please Enter the Value")

}
const deletetodo = (item) => {
    console.log(item.parentElement.remove())
    storeddata = Array.from(localStorage.getItem('todo').split(","))
    storeddata.forEach(element => {
       
        if(item.previousElementSibling.innerHTML == element)
        {
            storeddata = storeddata.map((ele)=>{
                if(ele ==item.previousElementSibling.innerHTML)
                {
                    return "";
                }
                else
                    return ele
            });
        }
    });
    localStorage;localStorage.setItem("todo",storeddata)
} 
// setInterval(() => {
//     fetchstorage();
// }, 1000);