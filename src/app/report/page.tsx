import React from "react";
import { Todo } from "../types";

const ReportPage = async () => {
  const response = await fetch(`http://localhost:4000/todos`, {
    next: {
      revalidate: 10,
    },
  });

  const todos = await response.json();
  const doneTodos = todos.filter((data: Todo) => data.isDone === true).length;
  const workingTodos = todos.filter(
    (data: Todo) => data.isDone === false
  ).length;

  return (
    <div className="flex-column text-center m-4 border-2 border-black">
      <p>현재 {todos.length}개의 todolist가 등록되었습니다.</p>
      <p>
        완료한 목록은 {doneTodos}개, 해야할 목록은 {workingTodos}개 있습니다.
      </p>
    </div>
  );
};

export default ReportPage;
