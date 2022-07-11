export interface IModalHeader {
  title: string;
  setModal: Function;
}

export interface IModalBody {
  setModal: Function;
  edit?: boolean;
  id?: string;
}
