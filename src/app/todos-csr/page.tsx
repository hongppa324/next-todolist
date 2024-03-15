"use client";
import React from "react";
import { Todo } from "../types";
import TodoList from "@/components/TodoList";
import TodoForm from "@/components/TodoForm";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const TodosCSRPage = () => {
  const route = useRouter();
  const { isPending, isError, data } = useQuery({
    queryKey: ["todos"],
    queryFn: async (): Promise<Todo[]> => {
      const response = await fetch(`http://localhost:4000/todos`, {
        method: "GET",
      });
      const data = await response.json();
      return data;
    },
  });

  if (isPending) {
    return <p>로딩 중입니다...!</p>;
  }
  if (isError) {
    return <p>오류가 발생했습니다.</p>;
  }
  if (!data) {
    return null;
  }

  const doingList: Todo[] = data.filter((todoItem: Todo) => !todoItem.isDone);
  const doneList: Todo[] = data.filter((todoItem: Todo) => todoItem.isDone);
  const moveToStatistics = () => route.push("/report");
  return (
    <>
      <TodoForm />
      <h2>할일 목록</h2>
      <TodoList todos={doingList} />
      <h2>완료한 목록</h2>
      <TodoList todos={doneList} />
      <button onClick={moveToStatistics}>통계 바로가기</button>
    </>
  );
};

export default TodosCSRPage;
