const initialState = [{
    id: 1,
    todo: 'Orden de compra',
    done: false
}]

const todoReducer = (state = initialState, action) => {
    if (action?.type === 'add') {
        return [...state, action.payload]
    }

    return state

}

let todos = todoReducer()

const newTodo = {
    id: 2,
    todo: 'Orden de compra 2',
    done: false
}

const newInitialState = {
    type: 'add',
    payload: newTodo
}

todos = todoReducer(todos, newInitialState);

console.log({'state':todos})