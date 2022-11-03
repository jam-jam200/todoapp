import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState([]);

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEdit("");
  };

  useEffect(() => {
    if (edit) {
      setInput(edit.title);
    } else {
      setInput("");
    }
  }, [setInput, edit]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!edit) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, edit.id, edit.completed);
    }
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComlete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEdit(findTodo);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter a Todo..."
          className="todo-input"
          value={input}
          required
          onChange={handleChange}
        />
        <button type="submit" className="button-add">
         {edit ? "OK" : "Add"}
        </button>
      </form>
      <div>
        {todos.map((todo) => (
          <li key={todo.id} className="list-item">
            <input
              type="text"
              value={todo.title}
              className={`list ${todo.completed ? "complete" : ""}`}
              onChange={(e) => e.preventDefault()}
            />
            <div>
              <button
                className="button-complete task-button"
                onClick={() => handleComlete(todo)}
              >
                <i className="fa fa-check-circle"></i>
              </button>
              <button
                className="button-edit task-button"
                onClick={() => handleEdit(todo)}
              >
                <i className="fa fa-edit"></i>
              </button>
              <button
                className="button-delete task-button"
                onClick={() => handleDelete(todo)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </div>
    </>
  );
}

export default Form;
