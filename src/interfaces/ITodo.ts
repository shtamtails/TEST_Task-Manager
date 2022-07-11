export interface ITodo {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  date?: string;
  tags?: string;
}

export interface ITodoActionButtons {
  setModal: Function;
  id: string;
  isCompleted: boolean;
}
