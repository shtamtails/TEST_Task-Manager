import { Typography } from "@mui/material";
import { Todo } from "components/Todo/Todo";
import { observer } from "mobx-react-lite";
import { todoStore } from "store/todoStore";

export const OutdatedTodos = observer(() => {
  return (
    <>
      <Typography variant="h6">Filter by: Outdated</Typography>
      {todoStore.todos
        .filter((todo) => todo.date && Date.now() > new Date(todo.date).getTime())
        .map(
          (el) =>
            !el.isCompleted && (
              <Todo
                key={el.id}
                id={el.id}
                title={el.title}
                description={el.description}
                date={el.date}
                isCompleted={el.isCompleted}
                tags={el.tags}
              />
            )
        )}
    </>
  );
});
