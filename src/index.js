document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
 const form = document.getElementById('create-task-form')

 form.addEventListener('submit', (event) => {
  event.preventDefault()

  const input = document.getElementById('new-task-description')
  const task = input.value 

  buildToDo(task)

  input.value = ''
 })
})

function buildToDo(task) {
  const ul = document.getElementById('tasks')

  const li = document.createElement('li')
  li.textContent = task

  ul.appendChild(li)
 }