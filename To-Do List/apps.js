//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.onclick = create;
todoList.onclick = performAction;



var data;

function create(e){
    data = todoInput.value;
    e.preventDefault();
    console.log(data);
    data = data.trim();

    if(data != ""){

var newDiv = document.createElement('div');
newDiv.classList.add("todo");

var newLi = document.createElement('li');
newLi.classList.add("todo-item");
newLi.innerText = data;
newDiv.appendChild(newLi);

var cmpltbtn = document.createElement("button");
cmpltbtn.classList.add("cmpltBtn");
cmpltbtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
newDiv.appendChild(cmpltbtn);

var deletebtn = document.createElement("button");
deletebtn.classList.add("deleteBtn");
deletebtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
newDiv.appendChild(deletebtn);

todoList.appendChild(newDiv);
todoInput.value = "";}
else
{
    alert("box cannot be blank");
}
}


function performAction(e){
    var item = e.target;
    console.log(item);
    
    if(item.classList[0] == "cmpltBtn")
    {
        var parent = item.parentElement;
        parent.classList.toggle('todo-done');
    }
    if(item.classList[0] == "deleteBtn")
    {
        var parent = item.parentElement;
        parent.remove();
    }
}