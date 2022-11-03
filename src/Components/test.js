// const updateTodo = (title, id, completed) => {
//   const newTodo = todos.map((todo) =>
//     todo.id === id ? { title, id, completed } : todo
//   );
//   setTodos(newTodo);
//   setEdit("");
// };
// if (!edit) {
//   setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
//   setInput("");
// } else {
//   updateTodo(input, edit.id, edit.completed);
// }
// useEffect(() => {
//   if (edit) {
//     setEdit(edit.title);
//   } else {
//     setInput("");
//   }
// }, [setInput, edit]);
