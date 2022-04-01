import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const todoAdapter = createEntityAdapter()
export const todoSelectors = todoAdapter.getSelectors((state) => state.todos)

const todoSlice = createSlice({
    name: 'todos',
    initialState: todoAdapter.getInitialState({
        deleteTodos: [],
    }),
    reducers: {
        addTodos: todoAdapter.addMany,
        deleteTodo(state, action) {
            state.deleteTodos.push(state.entities[action.payload])
            todoAdapter.removeOne(state, action)
        },
        updateTodos: todoAdapter.updateOne,
        clearTodos: todoAdapter.removeAll,
        restoreTodo(state, action){
            todoAdapter.addOne(state,action)
            state.deleteTodos = state.deleteTodos.filter(item => item.id !== action.payload.id)
        }
    },
})

export const { addTodos, deleteTodo, updateTodo, clearTodos, restoreTodo} = todoSlice.actions

export default todoSlice.reducer