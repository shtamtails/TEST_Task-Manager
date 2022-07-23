import { Typography } from "@mui/material";
import { Todo } from "components/Todo/Todo";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { todoStore } from "store/todoStore";
import { filterByTags } from "utils/utils";
import useMemo, { useCallback } from "react";
import { toJS } from "mobx";

export const TagsTodos = observer(() => {
  const { tag } = useParams();
  const filteredTodos = filterByTags(tag || "", todoStore.todos);
  return (
    <>
      <Typography variant="h6">Filter by tag: {tag}</Typography>
      {filteredTodos.map((el) => (
        <Todo
          key={el.id}
          id={el.id}
          title={el.title}
          description={el.description}
          date={el.date}
          isCompleted={el.isCompleted}
          tags={el.tags}
        />
      ))}
    </>
  );
});
