import { IModalHeader } from "@interfaces/IModal";
import { IconButton } from "@mui/material";
import { memo } from "react";
import CloseIcon from "@mui/icons-material/Close";

export const ModalHeader: React.FC<IModalHeader> = memo(({ title, setModal }) => {
  return (
    <div className="modal-header">
      <div className="modal-title">{title}</div>
      <IconButton
        onClick={() => {
          setModal(false);
        }}
      >
        <CloseIcon />
      </IconButton>
    </div>
  );
});
