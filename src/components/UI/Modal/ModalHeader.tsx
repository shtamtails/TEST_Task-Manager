import { IconButton } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IModalHeader } from "../../../interfaces/IModals";

export const ModalHeader: React.FC<IModalHeader> = ({ title, setModal }) => {
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
};
