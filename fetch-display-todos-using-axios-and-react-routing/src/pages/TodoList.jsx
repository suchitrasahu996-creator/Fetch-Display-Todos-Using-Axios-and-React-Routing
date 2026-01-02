import { useEffect, useState } from "react";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos().then((data) => setTodos(data));
  }, []);

  return (
    <div>
      <h1>Todo List </h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Link to={`/todo/${todos.id}`}>
            <strong>{todos.title}</strong>
          </Link>
          <p>Status:{todo.complete ? "Completed" : "Pending"}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};
