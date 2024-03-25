export interface ITimebox {
  id: string;
  task: string | null | undefined;
  duration: string;
}

export interface ITimeBoxActions {
  init: () => void;
  add: (timeBox: ITimebox) => void;
  update: (timeBox: ITimebox) => void;
  remove: (timeBox: ITimebox) => void;
}
