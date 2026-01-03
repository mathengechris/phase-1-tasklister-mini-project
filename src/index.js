document.addEventListener("DOMContentLoaded", () => {
  // your code here

  function buildToDo(task) {
    const li = document.createElement("li");
    li.textContent = task;
    const tasklist = document.getElementById("tasks")
  }
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault()

    const taskInput = event.target["new-task-description"] . value;

    buildToDo(taskInput);

    event.target["new-task-description"].value = "";

  });
});
