import { makeAutoObservable, observable } from "mobx";

export interface ITodo {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  date?: string;
  tags?: string;
}

export class Todo {
  count = 0;
  todos: ITodo[] = [
    {
      id: "qwe",
      title: "Title 1",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta minus qui obcaecati? Explicabo obcaecati sequi porro. Quam, aut? Quaerat ea omnis possimus numquam, accusantium incidunt, facere doloribus, fugit molestias quo quod! Deleniti, esse inventore at excepturi nam eos mollitia accusamus ducimus corporis saepe ad ab reprehenderit enim tempore blanditiis iure.",
      isCompleted: false,
      tags: "javascript, learn, todo, test",
    },
    {
      id: "ret",
      title: "Title 2",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta minus qui obcaecati? Explicabo obcaecati sequi porro. Quam, aut? Quaerat ea omnis possimus numquam, accusantium incidunt, facere doloribus, fugit molestias quo quod! Deleniti, esse inventore at excepturi nam eos mollitia accusamus ducimus corporis saepe ad ab reprehenderit enim tempore blanditiis iure.",
      isCompleted: false,
      tags: "test, todo",
    },
    {
      id: "das",
      title: "Title 3",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta minus qui obcaecati? Explicabo obcaecati sequi porro. Quam, aut? Quaerat ea omnis possimus numquam, accusantium incidunt, facere doloribus, fugit molestias quo quod! Deleniti, esse inventore at excepturi nam eos mollitia accusamus ducimus corporis saepe ad ab reprehenderit enim tempore blanditiis iure.",
      isCompleted: true,
      tags: "javascript",
      date: "2022-07-9",
    },
  ];
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

  addTodo(todo: ITodo) {
    this.todos.push(todo);
    window.localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  editTodo() {
    // this.todos[0].title = "qwe";
  }
  removeTodo(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
  filterByOutdated() {
    this.todos = this.todos.filter(
      (todo) => todo.date && Date.now() > new Date(todo.date).getTime()
    );
  }
}

const todo = new Todo();
export default todo;
