let globalId = 0;
function addTodo(){
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const parent = document.getElementById('parent');

    parent.appendChild(createChild(title, description, globalId++))
}

function createChild(title, description, id){
    let parent = document.createElement('div');
    parent.setAttribute("id", id);
    let t = document.createElement('h5');
    let d = document.createElement('p');
    let b = document.createElement('button');
    t.innerHTML = title;
    d.innerHTML = description;
    b.innerHTML = 'Mark as Done';
    b.setAttribute('onclick', `markAsDone(${id})`);
    parent.appendChild(t);
    parent.appendChild(d);
    parent.appendChild(b);
    return parent;
}

function markAsDone(id) {
    const todo = document.getElementById(id);
    const btn = todo.children[2];
    btn.innerHTML = "done";
    todo.style.textDecoration = 'line-through';
}