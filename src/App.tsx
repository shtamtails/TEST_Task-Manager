import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Todo } from "./components/UI/Todo/Todo";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { theme } from "./theme";
import { todoStore } from "./store/todoStore";
import { filterByTags } from "./utils/utils";
import { appStore } from "./store/appStore";
import { Header } from "./components/UI/Header/Header";
import { ITodo } from "./interfaces/ITodo";

const App = observer(() => {
  const renderTodo = (el: ITodo) => (
    <Todo
      key={el.id}
      id={el.id}
      title={el.title}
      description={el.description}
      date={el.date}
      isCompleted={el.isCompleted}
      tags={el.tags}
    />
  );

  useEffect(() => {
    // ? Load todos from localstorage
    todoStore.parseFromLocalStorage();
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="md">
          <Header />
          {appStore.filterType === "default" && todoStore.todos.map((el) => !el.isCompleted && renderTodo(el))}
          {appStore.filterType === "tags" &&
            filterByTags(appStore.tagsFilter, todoStore.todos).map((el) => renderTodo(el))}
          {appStore.filterType === "completed" && todoStore.todos.map((el) => el.isCompleted && renderTodo(el))}
          {appStore.filterType === "outdated" &&
            todoStore.todos
              .filter((todo) => todo.date && Date.now() > new Date(todo.date).getTime())
              .map((el) => !el.isCompleted && renderTodo(el))}
        </Container>
      </ThemeProvider>
    </>
  );
});

export default App;
