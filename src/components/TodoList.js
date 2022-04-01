import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoSelectors } from "../store/todoSlice";
import { clearTodos, restoreTodo } from "../store/todoSlice";
import Todo from "./Todo";

const TodoList = () => {
  const dispatch = useDispatch();
  const clearList = () => {
    dispatch(clearTodos());
    console.log("clear");
  };
  const allTodos = useSelector(todoSelectors.selectEntities);
  const todoList = [];
  for (const id in allTodos) {
    if (Object.hasOwnProperty.call(allTodos, id)) {
      const todoItem = allTodos[id];
      todoList.push(
        <Todo
          key={todoItem.id}
          id={todoItem.id}
          completed={todoItem.completed}
          text={todoItem.todo}
        />
      );
    }
  }
  const countTodo  = useSelector(todoSelectors.selectTotal)
  const deletedTodos = useSelector((state) => state.todos.deleteTodos);
  const deletedList = deletedTodos.map(todo => (
      <div className="deleted-todo">
          <span>{todo.todo}</span>
          <button onClick={() => dispatch(restoreTodo(todo))}>Restore</button>
      </div>
  ))

  return (
    <div className="todo-list">
      <h3>Your Todo:</h3>
      <h4>Count:{countTodo}</h4>
      <button onClick={clearList} className="delete-btn">
        Clear All Todos
      </button>
      <div>{todoList}</div>
      <h3>Deleted:</h3>
      <div>{deletedList}</div>
    </div>
  );
};
export default TodoList;
