import useMutate from "@/app/hook/useMutate";
import React, { FormEvent, useState } from "react";
import { nanoid } from "nanoid";

const TodoForm = () => {
  const { queryClient, addMutation } = useMutate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitle = (value: string) => {
    setTitle(value);
  };

  const handleContent = (value: string) => {
    setContent(value);
  };

  const addTodo = (event: FormEvent) => {
    event.preventDefault();

    if (!title) {
      alert("제목을 입력해주세요.");
      return;
    }

    if (!content) {
      alert("내용을 입력해주세요.");
      return;
    }

    addMutation.mutate(
      { title, content, isDone: false, id: nanoid() },
      {
        onSuccess: () => {
          setTitle("");
          setContent("");
          queryClient.invalidateQueries({ queryKey: ["todos"] });
        },
      }
    );
  };

  return (
    <form onSubmit={(event) => addTodo(event)}>
      <section>
        <label>
          제목
          <input
            type="text"
            onChange={(event) => handleTitle(event.target.value)}
            value={title}
          />
        </label>
        <label>
          내용
          <input
            type="text"
            onChange={(event) => handleContent(event.target.value)}
            value={content}
          />
        </label>
      </section>
      <button>추가</button>
    </form>
  );
};

export default TodoForm;
