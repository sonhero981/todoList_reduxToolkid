import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../store/todoSlice";

const Todo = ({text, completed, id}) => {
    const toggle = () => {}
    const dispatch = useDispatch()
    const deleteItem = () => {
        dispatch(deleteTodo(id))

    }
    const toggleItem = () => {
        dispatch(updateTodo({id, changes: {completed:!completed}}))
    }
    return (
        <div className="todo">
            <input type="checkbox" value={completed} onChange = {toggle}/>
            <span>{text}</span>
        <button onClick = {() => deleteItem(id)}>x</button>
        </div>
    )
}

export default Todo