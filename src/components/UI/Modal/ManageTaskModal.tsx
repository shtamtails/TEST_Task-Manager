import { Modal } from "@mui/material";
import React, { memo } from "react";
import { ModalHeader } from "./ModalHeader";
import { ModalBody } from "./ModalBody";
import { ITaskModal } from "../../../interfaces/IModal";

export const ManageTaskModal: React.FC<ITaskModal> = memo(({ modal, setModal, edit, id }) => {
  return (
    <Modal open={modal} onClose={() => setModal(false)}>
      <div className="modal-container">
        <ModalHeader title="New Task" setModal={setModal} />
        <ModalBody setModal={setModal} edit={edit} id={id} />
      </div>
    </Modal>
  );
});
