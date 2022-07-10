import { makeAutoObservable } from "mobx";

export interface ITodo {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  date?: string;
  tags?: string;
}

class TodoStore {
  todos: ITodo[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  parseFromLocalStorage() {
    const storedTodos = window.localStorage.getItem("todos");
    if (storedTodos) {
      const savedTodos = JSON.parse(storedTodos);
      this.todos = savedTodos;
    }
  }
  writeToLocalStorage() {
    window.localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo: ITodo) {
    this.todos.push(todo);
    this.writeToLocalStorage();
  }
  completeTodo(id: string) {
    this.todos.map((todo) => todo.id === id && (todo.isCompleted = true));
    this.writeToLocalStorage();
  }
  updateTodo(id: string, data: ITodo) {
    this.todos.map((todo) => todo.id === id && Object.assign(todo, data));
    this.writeToLocalStorage();
  }

  removeTodo(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.writeToLocalStorage();
  }
}

export const todoStore = new TodoStore();
