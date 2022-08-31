import { useEffect, useReducer } from 'react'
import { todoReducer } from '../components/08-useReducer/todoReducer'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = (initialState) => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || [])
    }, [todos])


    const todosCount = todos.length
    const pedingTodoCount = todos.filter(todo => !todo.done).length

    const handleNewTodo = (todo) => {
        const action = {
            type: 'Add Todo',
            payload: todo
        }

        dispatch(action)
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: 'Romove Todo',
            payload: id
        })
    }

    const handleNnToggleTodo = (id) => {
        dispatch({
            type: 'Toggle Todo',
            payload: id
        })
    }

    return {
        todos,
        todosCount,
        pedingTodoCount,
        handleNewTodo,
        handleDeleteTodo,
        handleNnToggleTodo
    }
}
