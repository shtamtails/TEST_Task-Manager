import { ITodo } from "interfaces/ITodo";
import { observer } from "mobx-react-lite";
import React from "react";

export const TodosPage: React.FC<ITodo> = observer(({ id }) => {
  return <div>TodosPage</div>;
});
