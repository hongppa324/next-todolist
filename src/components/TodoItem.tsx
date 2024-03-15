import React from "react";
import { Todo } from "@/app/types";
import useMutate from "@/app/hook/useMutate";

const TodoItem = ({ todo }: { todo: Todo }) => {
  const { toggleMutation, removeMutation } = useMutate();
  const { id, title, content, isDone } = todo;

  const handleToggle = () => {
    toggleMutation.mutateAsync(todo);
  };

  const handleRemove = () => {
    removeMutation.mutateAsync(id);
  };

  return (
    <section>
      <div>
        <p>{title}</p>
        <p>{content}</p>
        <div>
          <button onClick={handleToggle}>{isDone ? "취소" : "완료"}</button>
          <button onClick={handleRemove}>삭제</button>
        </div>
      </div>
    </section>
  );
};

export default TodoItem;
