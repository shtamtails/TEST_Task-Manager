import { Modal } from "@mui/material";
import React from "react";
import { observer } from "mobx-react-lite";
import { ITaskModal } from "../../../interfaces/ITaskModal";
import { ModalHeader } from "./ModalHeader";
import { ModalBody } from "./ModalBody";

export const ManageTaskModal: React.FC<ITaskModal> = observer(({ modal, setModal, edit, id }) => {
  return (
    <Modal open={modal} onClose={() => setModal(false)}>
      <div className="modal-container">
        <ModalHeader title="New Task" setModal={setModal} />
        <ModalBody setModal={setModal} edit={edit} id={id} />
      </div>
    </Modal>
  );
});
