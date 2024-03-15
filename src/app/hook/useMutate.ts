import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "../types";

const useMutate = () => {
  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: async (newTodo: Todo) => {
      const response = await fetch(`http://localhost:4000/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      const todo = await response.json();
      return todo;
    },
  });

  const removeMutation = useMutation({
    mutationFn: async (id: string) => {
      await fetch(`http://localhost:4000/todos/${id}`, {
        method: "DELETE",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const toggleMutation = useMutation({
    mutationFn: async ({ id, isDone }: Todo) => {
      const response = await fetch(`http://localhost:4000/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isDone: !isDone }),
      });
      const todo = await response.json();
      return todo;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return { queryClient, addMutation, removeMutation, toggleMutation };
};

export default useMutate;
