let todoList = document.querySelector('#todo-list');
const checkBox = todoList.querySelectorAll("input[type='checkbox']");

const onchange = c => c.nextElementSibling.style.textDecoration = c.checked ? 'line-through' : 'none';
Array.from(todoList.querySelectorAll('input[type="checkbox"]'))
   .forEach(c => c.onchange = e => onchange(c));
