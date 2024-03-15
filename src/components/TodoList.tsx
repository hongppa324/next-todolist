import React from "react";
import { Todos } from "@/app/types";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }: { todos: Todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
