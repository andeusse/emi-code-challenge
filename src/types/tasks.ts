export enum states {
  new = 'new',
  active = 'active',
  resolved = 'resolved',
  closed = 'closed',
}

export type stateHistory = {
  state: states;
  date: string;
};

export type task = {
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
  stateHistory: stateHistory[];
  notes: string[];
};

export type tasks = {
  tasks: task[];
};
