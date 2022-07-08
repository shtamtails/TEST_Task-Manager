import {
  Box,
  Button,
  ClickAwayListener,
  Container,
  IconButton,
  Input,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Modal,
  Stack,
  TextField,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Task } from "./components/Task";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function App() {
  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  const [newTaskModal, setNewTaskModal] = useState<boolean>(false);

  const modalStyle = {
    position: "absolute" as "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 2,
  };

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

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container sx={{}} maxWidth="md">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography
              variant="h5"
              fontWeight="600"
              fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
            >
              Tasks:
            </Typography>
            <Box>
              <ClickAwayListener onClickAway={() => setFilterOpen(false)}>
                <Tooltip
                  arrow
                  PopperProps={{
                    disablePortal: true,
                  }}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  open={filterOpen}
                  onClick={() => {
                    setFilterOpen(!filterOpen);
                  }}
                  title={
                    <>
                      <List
                        sx={{
                          bgcolor: "#fff",
                          color: "#000",
                          width: "120px",
                          border: "1px solid #000",
                          boxShadow: "0px 6px 8px 0px rgba(34, 60, 80, 0.2);",
                        }}
                        subheader={
                          <ListSubheader
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              borderBottom: "1px solid #000",
                            }}
                          >
                            Filter by:
                          </ListSubheader>
                        }
                      >
                        <ListItemButton
                          sx={{
                            width: "100%",
                            borderBottom: "1px solid #000",
                          }}
                        >
                          <ListItemText
                            sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                          >
                            Date
                          </ListItemText>
                        </ListItemButton>
                        <ListItemButton
                          sx={{
                            width: "100%",
                          }}
                        >
                          <ListItemText
                            sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                          >
                            Status
                          </ListItemText>
                        </ListItemButton>
                      </List>
                    </>
                  }
                >
                  <IconButton color="primary" sx={{ marginRight: "10px" }}>
                    <FilterAltOutlinedIcon />
                  </IconButton>
                </Tooltip>
              </ClickAwayListener>

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
          <Task
            title="Learn JavaScript basics"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente recusandae cum, ullam
        tempore, a quae architecto, obcaecati commodi temporibus eligendi magnam eum vero
        accusantium quibusdam. Quo earum saepe atque fugiat adipisci, consequatur aliquid odit
        blanditiis deleniti sed expedita cumque eius provident porro dolore, repellat voluptas
        delectus tempore qui consequuntur quisquam."
            isDone={false}
          />
          <Task
            title="Learn JavaScript basics"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente recusandae cum, ullam
        tempore, a quae architecto, obcaecati commodi temporibus eligendi magnam eum vero
        accusantium quibusdam. Quo earum saepe atque fugiat adipisci, consequatur aliquid odit
        blanditiis deleniti sed expedita cumque eius provident porro dolore, repellat voluptas
        delectus tempore qui consequuntur quisquam."
            isDone={false}
          />
          <Task
            title="Learn JavaScript basics"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente recusandae cum, ullam
        tempore, a quae architecto, obcaecati commodi temporibus eligendi magnam eum vero
        accusantium quibusdam. Quo earum saepe atque fugiat adipisci, consequatur aliquid odit
        blanditiis deleniti sed expedita cumque eius provident porro dolore, repellat voluptas
        delectus tempore qui consequuntur quisquam."
            isDone={false}
          />
          <Task
            title="Learn JavaScript basics"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente recusandae cum, ullam
        tempore, a quae architecto, obcaecati commodi temporibus eligendi magnam eum vero
        accusantium quibusdam. Quo earum saepe atque fugiat adipisci, consequatur aliquid odit
        blanditiis deleniti sed expedita cumque eius provident porro dolore, repellat voluptas
        delectus tempore qui consequuntur quisquam."
            isDone={false}
          />
        </Container>
        <Modal
          open={newTaskModal}
          onClose={() => {
            setNewTaskModal(false);
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
                  setNewTaskModal(false);
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Box sx={{ marginTop: "15px" }}>
              <Box sx={{ padding: "5px 0px" }}>
                <TextField label="Title" required fullWidth size="small" />
              </Box>
              <Box sx={{ padding: "5px 0px" }}>
                <TextField label="Description" required fullWidth size="small" />
              </Box>
              <Box sx={{ padding: "5px 0px" }}>
                <TextField type="date" fullWidth size="small" required />
              </Box>
              <Box sx={{ padding: "5px 0px" }}>
                <Button variant="contained" fullWidth>
                  Add
                </Button>
              </Box>
            </Box>
          </Container>
        </Modal>
      </ThemeProvider>
    </>
  );
}

export default App;
