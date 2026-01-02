import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api/TodoService";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos().then((data) => setTodos(data));
  }, []);

  return (
    <div style={{width:"800px" ,textAlign:"center"}}>
      <h1 style={{border:"2px solid black",textAlign:"center"}}>Todo List </h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Link to={`/todo/${todos.id}`}>
            <strong>{todos.title}</strong>
          </Link>
          <p>Status:{todo.completed ? "Completed" : "Pending"}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};
