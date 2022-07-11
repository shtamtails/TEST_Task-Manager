import { Button, TextField } from "@mui/material";
import { toJS } from "mobx";
import React, { memo, useEffect, useState } from "react";
import { uid } from "uid";
import { todoStore } from "../../../store/todoStore";
import { IModalBody } from "../../../interfaces/IModal";

export const ModalBody: React.FC<IModalBody> = memo(({ setModal, edit, id }) => {
  const [newTodoTitle, setNewTodoTitle] = useState<string>("");
  const [newTodoDescription, setNewTodoDescription] = useState<string>("");
  const [newTodoDate, setNewTodoDate] = useState<string>("");
  const [newTodoTags, setNewTodoTags] = useState<string>("");

  const todo = {
    id: uid(),
    title: newTodoTitle,
    description: newTodoDescription,
    isCompleted: false,
    date: newTodoDate,
    tags: newTodoTags,
  };

  const closeModal = () => {
    setModal(false);
    setNewTodoTitle("");
    setNewTodoDescription("");
    setNewTodoDate("");
  };

  useEffect(() => {
    if (edit) {
      const currentTodo = toJS(todoStore.todos).filter((el) => el.id === id);
      setNewTodoTitle(currentTodo[0].title);
      setNewTodoDescription(currentTodo[0].description);
      currentTodo[0].tags && setNewTodoTags(currentTodo[0].tags);
      currentTodo[0].date && setNewTodoDate(currentTodo[0].date);
    }
  }, [edit, id]);

  const editTodo = (id: string) => {
    newTodoTitle &&
      newTodoDescription &&
      todoStore.updateTodo(id, {
        ...todo,
        id: id,
      });
    closeModal();
  };

  const addTodo = () => {
    newTodoTitle && newTodoDescription && todoStore.addTodo(todo);
    closeModal();
  };

  const handleSubmit = () => {
    edit ? id && editTodo(id) : addTodo();
  };

  return (
    <div className="modal-body">
      <div className="flex p-t-sm">
        <TextField
          fullWidth
          label="Title"
          required
          size="small"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
        />
        <TextField
          fullWidth
          size="small"
          label="Tags, separated by comma"
          value={newTodoTags}
          onChange={(e) => setNewTodoTags(e.target.value)}
        />
      </div>

      <div className="p-t-sm">
        <TextField
          label="Description"
          required
          fullWidth
          size="medium"
          value={newTodoDescription}
          onChange={(e) => setNewTodoDescription(e.target.value)}
        />
      </div>

      <div className="p-t-sm">
        <TextField
          type="date"
          fullWidth
          size="small"
          required
          value={newTodoDate}
          onChange={(e) => setNewTodoDate(e.target.value)}
        />
      </div>

      <div className="p-t-sm">
        <Button variant="contained" fullWidth onClick={() => handleSubmit()}>
          {edit ? "Edit" : "Add"}
        </Button>
      </div>
    </div>
  );
});
