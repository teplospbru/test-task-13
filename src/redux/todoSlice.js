import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            { id: 1, body: 'Next, we need to import the reducer function from the counter slice and add it to our store', isCompleted: false },
            { id: 2, body: 'Creating a slice requires a string name to identify the slice', isCompleted: true },
            { id: 3, body: 'Provide the Redux Store to React', isCompleted: false },
        ],
    },
    reducers: {
        createTodo(state, action) {
            state.todos.push({ id: Date.now(), body: action.payload, isCompleted: false })
        },
        setCompleted(state, action) {
            const index = state.todos.findIndex(todo => todo.id == action.payload);
            state.todos[index].isCompleted = !state.todos[index].isCompleted;
        },
        clearCompleted(state, action) {
            state.todos = state.todos.filter(todo => todo.isCompleted === false);
        }
    }
});

export const { clearCompleted, createTodo, setCompleted } = todoSlice.actions;

export default todoSlice.reducer;