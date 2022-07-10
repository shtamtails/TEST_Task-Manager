import {
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Todo } from "./components/Todo";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { ManageTaskModal } from "./modals/ManageTaskModal";
import { theme } from "./theme";
import { todoStore, ITodo } from "./store/todoStore";
import { filterByTags } from "./utils/utils";
import { appStore, filterTypes } from "./store/appStore";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const App = observer(() => {
  const [newTaskModal, setNewTaskModal] = useState<boolean>(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

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

  const handleFilterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = (filterType: filterTypes) => {
    appStore.setFilter(filterType);
    setAnchorEl(null);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="md">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography
              variant="h5"
              fontWeight="600"
              fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
            >
              Tasks:
              {appStore.tagsFilter && (
                <Chip
                  onClick={() => {
                    appStore.setTagFilter("");
                    appStore.setFilter("default");
                  }}
                  label={`${appStore.tagsFilter}`}
                  variant="outlined"
                  sx={{ marginLeft: "10px" }}
                />
              )}
            </Typography>
            <Box>
              <IconButton sx={{ marginRight: "10px" }} onClick={handleFilterClick}>
                <FilterAltIcon />
              </IconButton>
              <Button
                variant="contained"
                color="primary"
                sx={{ borderRadius: "0px" }}
                onClick={() => {
                  setNewTaskModal(true);
                }}
              >
                New Task
              </Button>
            </Box>
          </Stack>
          {todoStore.todos.length === 0 && (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h4">No tasks</Typography>
            </Box>
          )}
          {appStore.filterType === "default" &&
            todoStore.todos.map((el) => !el.isCompleted && renderTodo(el))}
          {appStore.filterType === "tags" &&
            filterByTags(appStore.tagsFilter, todoStore.todos).map((el) => renderTodo(el))}
          {appStore.filterType === "completed" &&
            todoStore.todos.map((el) => el.isCompleted && renderTodo(el))}
          {appStore.filterType === "outdated" &&
            todoStore.todos
              .filter((todo) => todo.date && Date.now() > new Date(todo.date).getTime())
              .map((el) => !el.isCompleted && renderTodo(el))}
        </Container>
        <ManageTaskModal modal={newTaskModal} setModal={setNewTaskModal} />

        <Menu anchorEl={anchorEl} open={open} onClose={() => handleFilterClose("default")}>
          <MenuItem disabled sx={{ borderBottom: "1px solid #000" }}>
            Filter by
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleFilterClose("default");
            }}
          >
            Default
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleFilterClose("completed");
            }}
          >
            Completed
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleFilterClose("outdated");
            }}
          >
            Outdated
          </MenuItem>
        </Menu>
      </ThemeProvider>
    </>
  );
});

export default App;
