import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTodoById } from "../api/TodoService";
 export const TodoDetails = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    getTodoById(id).then((data) => setTodo(data));
  }, [id]);

  if (!todo) return <p>Loading....</p>;

  return (
    <div>
      <h1>Todo Details</h1>
      <p>
        <strong>ID:</strong> {todo.id}
      </p>
      <p>
        <strong>Title:</strong>
        {todo.title}
      </p>
      <p>
        <strong>Status:</strong>
        {todo.completed ? "Completed" : "pending"}
      </p>

      <Link to="/">BACK TO TODO LIST</Link>
    </div>
  );
}

