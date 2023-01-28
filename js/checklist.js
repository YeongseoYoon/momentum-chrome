let todoList = document.querySelector('#todo-list');
const checkBox = todoList.querySelector("input[type='checkbox']");
const spanId = checkBox.nextElementSibling;
console.dir(spanId);

// const onchange = c => c.nextElementSibling.style.textDecoration = c.checked ? 'line-through' : 'none';
// Array.from(todoList.querySelectorAll('input[type="checkbox"]'))
//    .forEach(c => c.onchange = e => onchange(c));

checkBox.addEventListener('change', (event) => {
   if(checkBox.checked){
      spanId.style.textDecorationLine = "line-through"
   }else{
      spanId.style.textDecorationLine = "none"
   }
});