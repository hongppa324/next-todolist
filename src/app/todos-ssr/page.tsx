import React from "react";
import { Todo } from "../types";
import Link from "next/link";

const TodosSSRPage = async () => {
  const response = await fetch(`http://localhost:4000/todos`, {
    cache: "no-cache",
  });
  const todos = await response.json();

  return (
    <>
      <ul>
        {todos.map((data: Todo) => {
          return (
            <li key={data.id}>
              <h1>{data.title}</h1>
              <p>{data.content}</p>
            </li>
          );
        })}
      </ul>
      <Link href="/report">통계 바로가기</Link>
    </>
  );
};

export default TodosSSRPage;
