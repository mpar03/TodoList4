
import { TaskManager } from './TaskBN.js';

export class TaskUI {
  constructor() {
    this.taskManager = new TaskManager();
    this.taskInput = document.getElementById("taskInput");
    this.taskListElement = document.getElementById("taskList");
    this.addButton = document.getElementById("addBtn");

    this.addButton.addEventListener("click", () => this.addTask());
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
      }

      const doneBtn = document.createElement("button");
      doneBtn.textContent = "Done";
      doneBtn.classList.add("done");
      doneBtn.addEventListener("click", () => this.markDone(index));

      const delBtn = document.createElement("button");
      delBtn.textContent = "Delete";
      delBtn.classList.add("delete");
      delBtn.addEventListener("click", () => this.deleteTask(index));

      li.appendChild(taskText);
      li.appendChild(doneBtn);
      li.appendChild(delBtn);

      this.taskListElement.appendChild(li);
    });
  }
}
