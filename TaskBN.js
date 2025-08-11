import { Task } from './Task.js';

export class TaskManager {
  
  constructor(storageKey) {
    this.storageKey = storageKey;
    this.tasks = this.loadFromStorage();
  }

  addTask(text) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const task = new Task(trimmed);
    this.tasks.push(task);
    this.saveToStorage(); 
  }

  markDone(index) {
    this.tasks[index].status = true;
    this.saveToStorage(); 
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
    this.saveToStorage();
  }

  getTasks() {
    return this.tasks;
  }

  saveToStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
  }

  loadFromStorage() {
    const saved = localStorage.getItem(this.storageKey);
    return saved ? JSON.parse(saved) : [];
  }
}
