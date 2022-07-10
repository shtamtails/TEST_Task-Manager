import {
  Box,
  Button,
  Container,
  IconButton,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import React, { useEffect, useState } from "react";
import { uid } from "uid";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { modalStyle } from "../theme";
import { todoStore } from "../store/todoStore";

interface TaskModal {
  modal: boolean;
  setModal: Function;
  edit?: boolean;
  id?: string;
}

export const ManageTaskModal: React.FC<TaskModal> = observer(({ modal, setModal, edit, id }) => {
  const [newTodoTitle, setNewTodoTitle] = useState<string>("");
  const [newTodoDescription, setNewTodoDescription] = useState<string>("");
  const [newTodoDate, setNewTodoDate] = useState<string>("");
  const [newTodoTags, setNewTodoTags] = useState<string>("");

  useEffect(() => {
    // ? If have edit prop then launch modal in "edit" mode (change callback, change "add" button text to "edit")
    if (edit) {
      // ? Fetch information about current Todo and set is as value to inputs
      // ? toJS makes mobx arrays readable as JS arrays
      const todos = toJS(todoStore.todos);
      // ? Get current todo
      const currentTodo = todos.filter((el) => el.id === id);
      // ? Set values
      setNewTodoTitle(currentTodo[0].title);
      setNewTodoDescription(currentTodo[0].description);
      currentTodo[0].tags && setNewTodoTags(currentTodo[0].tags);
      currentTodo[0].date && setNewTodoDate(currentTodo[0].date);
    }
  }, [id, edit]);

  const editTodo = (id: string) => {
    newTodoTitle &&
      newTodoDescription &&
      todoStore.updateTodo(id, {
        id: id,
        title: newTodoTitle,
        description: newTodoDescription,
        isCompleted: false,
        date: newTodoDate,
        tags: newTodoTags,
      });
  };

  const addTodo = () => {
    // ? Title and description are required, so check if they are not empty string
    newTodoTitle &&
      newTodoDescription &&
      todoStore.addTodo({
        id: uid(),
        title: newTodoTitle,
        description: newTodoDescription,
        isCompleted: false,
        date: newTodoDate,
        tags: newTodoTags,
      });
    // ? Close modal and set values to empty strings
    setModal(false);
    setNewTodoTitle("");
    setNewTodoDescription("");
    setNewTodoDate("");
  };

  const handleSubmit = () => {
    // ? If launched in "edit" mode make edit callback, else make add callback
    edit ? id && editTodo(id) : addTodo();
  };

  return (
    <Modal
      open={modal}
      onClose={() => {
        setModal(false);
      }}
    >
      <Container sx={modalStyle}>
        <Box
          sx={{ borderBottom: "2px solid #000" }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6">New Task</Typography>
          <IconButton
            onClick={() => {
              setModal(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ marginTop: "15px" }}>
          <Box sx={{ padding: "5px 0px" }}>
            <Stack direction="row">
              <TextField
                sx={{ paddingRight: "5px" }}
                fullWidth
                label="Title"
                required
                size="small"
                value={newTodoTitle}
                onChange={(e) => setNewTodoTitle(e.target.value)}
              />
              <TextField
                sx={{ paddingLeft: "5px" }}
                fullWidth
                size="small"
                label="Tags, separated by comma"
                value={newTodoTags}
                onChange={(e) => setNewTodoTags(e.target.value)}
              />
            </Stack>
          </Box>
          <Box sx={{ padding: "5px 0px" }}>
            <TextField
              label="Description"
              required
              fullWidth
              size="medium"
              value={newTodoDescription}
              onChange={(e) => setNewTodoDescription(e.target.value)}
            />
          </Box>
          <Box sx={{ padding: "5px 0px" }}>
            <TextField
              type="date"
              fullWidth
              size="small"
              required
              value={newTodoDate}
              onChange={(e) => setNewTodoDate(e.target.value)}
            />
          </Box>
          <Box sx={{ padding: "5px 0px" }}>
            <Button variant="contained" fullWidth onClick={() => handleSubmit()}>
              {edit ? "Edit" : "Add"}
            </Button>
          </Box>
        </Box>
      </Container>
    </Modal>
  );
});
