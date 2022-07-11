export interface IModalHeader {
  title: string;
  setModal: Function;
}

export interface IModalBody {
  setModal: Function;
  edit?: boolean;
  id?: string;
}

export interface ITaskModal {
  modal: boolean;
  setModal: Function;
  edit?: boolean;
  id?: string;
}
