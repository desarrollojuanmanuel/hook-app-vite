import React from 'react'
import { useTodo } from '../../hooks/useTodo'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'


export const TodoApp = () => {

    const { todos, todosCount, pedingTodoCount, handleNewTodo, handleDeleteTodo, handleNnToggleTodo } = useTodo([])

    return (
        <>
            <h1>TodoApp: {todosCount} <hr />
                <small>Pendientes: {pedingTodoCount}</small> </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleNnToggleTodo}
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    )
}
