import { Todo } from "components/Todo/Todo";
import { todoStore } from "store/todoStore";
import { observer } from "mobx-react-lite";

export const DefaultTodos = observer(() => {
  const todos = todoStore.todos;
  return (
    <>
      {todos.map(
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
