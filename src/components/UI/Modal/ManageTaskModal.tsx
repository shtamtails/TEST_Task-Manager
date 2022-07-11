import { ITaskModal } from "@interfaces/IModal";
import { Modal } from "@mui/material";
import { memo } from "react";
import { ModalBody } from "./ModalBody";
import { ModalHeader } from "./ModalHeader";

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
