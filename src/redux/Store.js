import { configureStore } from '@reduxjs/toolkit'
import Todo from './reducers/Todo'

export default configureStore({
    reducer: {
        Todo
    }
})