import { TaskManager } from './TaskBN.js';

export class TaskUI {

  //new constructor
  constructor(container, storageKey) {
    this.container = container;
    this.taskManager = new TaskManager(storageKey);

    this.taskInput = document.createElement("input");
    this.taskInput.placeholder = "Enter a task";
    this.taskInput.className = "taskInput";

    this.addButton = document.createElement("button");
    this.addButton.textContent = "Add Task";
    this.addButton.className = "add";

    this.taskListElement = document.createElement("ul");

    this.container.append(this.taskInput, this.addButton, this.taskListElement);

    this.addButton.addEventListener("click", () => this.addTask());

    this.render();
  }

  addTask() {
    const text = this.taskInput.value;
    this.taskManager.addTask(text);
    this.taskInput.value = "";
    this.render();
  }

  markDone(index) {
    this.taskManager.markDone(index);
    this.render();
  }

  deleteTask(index) {
    this.taskManager.deleteTask(index);
    this.render();
  }

  render() {
    this.taskListElement.innerHTML = "";
    this.taskManager.getTasks().forEach((task, index) => {
      const li = document.createElement("li");

      const taskText = document.createElement("span");
      taskText.textContent = task.text;
      if (task.status) {
        taskText.style.textDecoration = "line-through";
        taskText.style.opacity = "0.6";
      }

      const doneBtn = document.createElement("button");
      doneBtn.textContent = "Done";
      doneBtn.className = "done";
      doneBtn.addEventListener("click", () => this.markDone(index));

      const delBtn = document.createElement("button");
      delBtn.textContent = "Delete";
      delBtn.className = "delete";
      delBtn.addEventListener("click", () => this.deleteTask(index));

      li.append(taskText, doneBtn, delBtn);
      this.taskListElement.appendChild(li);
    });
  }
}
