import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { memo, useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckIcon from "@mui/icons-material/Check";
import { ITodoActionButtons } from "interfaces/ITodo";
import { todoStore } from "store/todoStore";

export const ActionsTodo: React.FC<ITodoActionButtons> = memo(({ setModal, id, isCompleted }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleEditClick = () => {
    setAnchorEl(null);
    setModal(true);
  };

  const handleDeleteClick = () => {
    setAnchorEl(null);
    todoStore.removeTodo(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton size="small" sx={{ marginLeft: "10px" }} onClick={(e) => setAnchorEl(e.currentTarget)}>
        <SettingsIcon />
      </IconButton>
      {!isCompleted && (
        <IconButton
          size="small"
          onClick={() => {
            todoStore.completeTodo(id);
          }}
        >
          <CheckIcon />
        </IconButton>
      )}

      <Menu open={open} onClose={handleMenuClose} anchorEl={anchorEl}>
        <MenuItem onClick={handleEditClick}>Edit</MenuItem>
        <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
      </Menu>
    </>
  );
});
