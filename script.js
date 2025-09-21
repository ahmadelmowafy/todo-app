const addBtn = document.getElementById("add-task");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const deleteAllBtn = document.getElementById("delete-all");

function toggleDeleteAllButton() {
  deleteAllBtn.style.display = taskList.children.length > 0 ? "block" : "none";
}

function createTaskItem(text) {
  const li = document.createElement("li");
  li.textContent = text;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
    toggleDeleteAllButton();
  });

  li.appendChild(deleteBtn);
  return li;
}

addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (taskText !== "") {
    const li = createTaskItem(taskText);
    taskList.appendChild(li);
    input.value = "";
    toggleDeleteAllButton();
  }
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

deleteAllBtn.addEventListener("click", () => {
  taskList.innerHTML = "";
  toggleDeleteAllButton();
});

toggleDeleteAllButton();
