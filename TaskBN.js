import { Task } from './Task.js';

export class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(text) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const task = new Task(trimmed);
    this.tasks.push(task);
  }

  markDone(index) {
    this.tasks[index].status = true;
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
  }

  getTasks() {
    return this.tasks;
  }
}




