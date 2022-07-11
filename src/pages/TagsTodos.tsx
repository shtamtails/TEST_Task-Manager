import { Typography } from "@mui/material";
import { Todo } from "components/Todo/Todo";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { todoStore } from "store/todoStore";
import { filterByTags } from "utils/utils";

export const TagsTodos = observer(() => {
  const { tag } = useParams();
  return (
    <>
      <Typography variant="h6">Filter by tag: {tag}</Typography>
      {filterByTags(tag ? tag : "", todoStore.todos).map((el) => (
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
