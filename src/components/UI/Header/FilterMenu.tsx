import { Menu, MenuItem } from "@mui/material";
import React, { memo } from "react";
import { IFilterMenu } from "../../../interfaces/IFilter";
import { appStore, filterTypes } from "../../../store/appStore";

export const FilterMenu: React.FC<IFilterMenu> = memo(({ anchorEl, setAnchorEl }) => {
  const open = Boolean(anchorEl);

  const handleFilterClose = (filterType: filterTypes) => {
    appStore.setFilter(filterType);
    setAnchorEl(null);
  };

  return (
    <Menu anchorEl={anchorEl} open={open} onClose={() => handleFilterClose("default")}>
      <MenuItem disabled sx={{ borderBottom: "1px solid #000" }}>
        Filter by
      </MenuItem>
      <MenuItem onClick={() => handleFilterClose("default")}>Default</MenuItem>
      <MenuItem onClick={() => handleFilterClose("completed")}>Completed</MenuItem>
      <MenuItem onClick={() => handleFilterClose("outdated")}>Outdated</MenuItem>
    </Menu>
  );
});
