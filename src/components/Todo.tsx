import { Box, Chip, IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import todo, { ITodo } from "../store/todo";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";
import { ManageTaskModal } from "../modals/ManageTaskModal";

export const Todo: React.FC<ITodo> = ({ id, title, description, isCompleted, date, tags }) => {
  const [editModal, setEditModal] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const getDateFromString = (date: string) => {
    const newDate = new Date(date);
    const currentDate = Date.now();
    // console.log(currentDate > newDate.getTime()); // ! then outdated
    return newDate.toLocaleString("default", { day: "2-digit", month: "long", year: "numeric" });
  };
  const getTags = (tags: string) => {
    const newTags = tags.replaceAll(" ", "").split(",");
    return newTags.map((el, i) => (
      <Chip variant="outlined" key={i} sx={{ marginLeft: "10px" }} label={el} />
    ));
  };

  return (
    <Container
      sx={{
        border: "1px solid #000000",
        height: "80px",
        margin: "10px 0px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          fontWeight="500"
          fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
          variant="h6"
        >
          {title}
          {tags && getTags(tags)}
        </Typography>
        <Box display="flex" sx={{ justifyContent: "center", alignItems: "center" }}>
          {date && <Typography color="GrayText">{getDateFromString(date)}</Typography>}
          <IconButton
            size="small"
            sx={{ marginLeft: "10px" }}
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            <SettingsIcon />
          </IconButton>
          <Menu
            open={open}
            onClose={() => {
              setAnchorEl(null);
            }}
            anchorEl={anchorEl}
          >
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                setEditModal(true);
              }}
            >
              Edit
            </MenuItem>
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                todo.removeTodo(id);
              }}
            >
              Delete
            </MenuItem>
          </Menu>
        </Box>
      </Stack>
      <Typography sx={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
        {description}
      </Typography>
      <ManageTaskModal modal={editModal} setModal={setEditModal} edit id={id} />
    </Container>
  );
};
