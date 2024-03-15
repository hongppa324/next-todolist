export async function GET(request: Request) {
  const response = await fetch(`http://localhost:4000/todos`);
  const todos = await response.json();

  if (!todos) {
    return new Response("todos not found", { status: 404 });
  }
  return Response.json({ todos: [...todos] });
}

export async function POST(request: Request) {
  const { title, content } = await request.json();
  const response = await fetch(`http://localhost:4000/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content, isDone: false }),
  });
  const todo = await response.json();
  return Response.json({ todo });
}

export async function PATCH(request: Request) {
  const { isDone } = await request.json();
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  const response = await fetch(`http://localhost:4000/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ isDone: !isDone }),
  });

  const todo = await response.json();
  return Response.json(todo);
}

export async function DELETE(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  const response = await fetch(`http://localhost:4000/todos/${id}`, {
    method: "DELETE",
  });
  const todo = await response.json();
  return Response.json(todo);
}
