import { createSlice } from '@reduxjs/toolkit'

export const Todo = createSlice({
    name: 'counter',
    initialState: {
        TodoList: []
    },
    reducers: {
        createTodoList: (state, action) => {
            state.TodoList.push(action.payload)
        }
    }
})

// Action creators are generated for each case reducer function
export const { createTodoList } = Todo.actions

export default Todo.reducer