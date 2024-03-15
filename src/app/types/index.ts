export type Todo = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

export type Todos = Array<Todo>;

export type CompanyInfo = {
  name: string;
  description: string;
  image: string;
};
