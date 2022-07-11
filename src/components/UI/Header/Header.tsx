import { Button, Chip, IconButton } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { appStore } from "../../../store/appStore";
import { ManageTaskModal } from "../Modal/ManageTaskModal";
import { memo, useState } from "react";
import { FilterMenu } from "./FilterMenu";

export const Header: React.FC = memo(() => {
  const [newTaskModal, setNewTaskModal] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleFilterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleTagClick = () => {
    appStore.setTagFilter("");
    appStore.setFilter("default");
  };

  return (
    <>
      <header>
        <div className="header-title">
          Tasks:
          {appStore.tagsFilter && (
            <Chip
              onClick={handleTagClick}
              label={`${appStore.tagsFilter}`}
              variant="outlined"
              sx={{ marginLeft: "10px" }}
            />
          )}
        </div>
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
});
