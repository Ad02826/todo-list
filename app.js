// app.js
function addTodo() {
    const input = document.getElementById('todoInput');
    const todoText = input.value.trim();
    if (todoText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
    <span>${todoText}</span>
    <button onclick="removeTodo(this)">删除</button>
  `;
    document.getElementById('todoList').appendChild(li);
    input.value = '';
}

function removeTodo(button) {
    button.parentElement.remove();
}