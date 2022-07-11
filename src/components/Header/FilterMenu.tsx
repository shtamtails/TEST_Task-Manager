import { Menu, MenuItem } from "@mui/material";
import { IFilterMenu } from "interfaces/IFilter";
import { memo } from "react";
import { Link } from "react-router-dom";

export const FilterMenu: React.FC<IFilterMenu> = memo(({ anchorEl, setAnchorEl }) => {
  const open = Boolean(anchorEl);

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  return (
    <Menu anchorEl={anchorEl} open={open} onClose={() => handleFilterClose()}>
      <MenuItem disabled sx={{ borderBottom: "1px solid #000" }}>
        Filter by
      </MenuItem>
      <MenuItem onClick={() => handleFilterClose()}>
        <Link to="/">Default</Link>
      </MenuItem>
      <MenuItem onClick={() => handleFilterClose()}>
        <Link to="/completed">Completed</Link>
      </MenuItem>
      <MenuItem onClick={() => handleFilterClose()}>
        <Link to="/outdated">Outdated</Link>
      </MenuItem>
    </Menu>
  );
});
