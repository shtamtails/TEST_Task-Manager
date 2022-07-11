import { Button, IconButton } from "@mui/material";
import { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { FilterMenu } from "./FilterMenu";
import { ManageTaskModal } from "components/Modal/ManageTaskModal";

export const Header: React.FC = () => {
  const [newTaskModal, setNewTaskModal] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleFilterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleTagClick = () => {};

  return (
    <>
      <header>
        <div className="header-title">Tasks:</div>
        <div className="header-actions">
          <IconButton sx={{ marginRight: "10px" }} onClick={handleFilterClick}>
            <FilterAltIcon />
          </IconButton>
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: "0px" }}
            onClick={() => setNewTaskModal(true)}
          >
            New Task
          </Button>
        </div>
      </header>

      <ManageTaskModal modal={newTaskModal} setModal={setNewTaskModal} />
      <FilterMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </>
  );
};
