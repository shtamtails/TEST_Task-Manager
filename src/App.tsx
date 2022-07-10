import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Todo } from "./components/Todo";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import todo from "./store/todo";
import { ManageTaskModal } from "./modals/ManageTaskModal";

const App = observer(() => {
  const [newTaskModal, setNewTaskModal] = useState<boolean>(false);
  const theme = createTheme({
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            padding: "0px",
            backgroundColor: "#fff",
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            padding: "0",
          },
        },
      },
    },
    palette: {
      primary: {
        main: "#000000",
      },
      secondary: {
        main: "#ffffff",
      },
    },
  });

  useEffect(() => {
    todo.parseFromLocalStorage();
  }, []);

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
            </Typography>
            <Box>
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
          {todo.todos.map(
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

          <Accordion>
            <AccordionSummary>
              <Typography>Completed:</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {todo.todos.map(
                (el) =>
                  el.isCompleted && (
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
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>
              <Typography>Outdated:</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {todo.todos
                .filter((todo) => todo.date && Date.now() > new Date(todo.date).getTime())
                .map((el) => {
                  return (
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
                })}
            </AccordionDetails>
          </Accordion>
        </Container>
        <ManageTaskModal modal={newTaskModal} setModal={setNewTaskModal} />
      </ThemeProvider>
    </>
  );
});

export default App;
