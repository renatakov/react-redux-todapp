const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const UPDATE_TODO = 'UPDATE_TODO';

const initialState = {
    todoTasks: [
        {
            id: 1,
            title: 'Do the ironing'
        },
        {
            id: 2,
            title: 'Do dishes'
        }
    ],
    newTodo: {
        id: null,
        title: null
    },
    countTodos: 2
}

const createTodo = (state) => {
    return {
        ...state,
        todoTasks: [
            ...state.todoTasks,
            {...state.newTodo}
        ],
        newTodo: {
            ...state.newTodo
        },
        countTodos: state.todoTasks.length + 1

    }
}

const deleteTodo = (state, action) =>{
    const updatedTodoList = state.todoTasks.filter(t => t.id !== action.idToDelete)
    return {
        ...state,
        todoTasks: [
            ...updatedTodoList
        ],
        countTodos: state.todoTasks.length - 1
    }
}

const updateTodo = (state, action) => {
    if(action.inputForm === "title") {
        return {
            ...state,
            todoTasks: [
                ...state.todoTasks,
            ],
            newTodo: {
                id: state.todoTasks[state.todoTasks.length - 1].id + 1,
                title: action.inputValue
            },
        }
    }
}

export const todoAppReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO: {
            return createTodo(state)
        }
        case DELETE_TODO:{
            return deleteTodo(state, action)
        }
        case UPDATE_TODO:{
            return updateTodo(state, action)
        }
        default:{
            return state;
        }
    }
}

export const addTodoAC = () =>({
    type: ADD_TODO
})

export const deleteTodoAC = (idToDelete) => ({
    type: DELETE_TODO,
    idToDelete
})

export const updateTodoAC = (inputForm, inputValue) => ({
    type: UPDATE_TODO,
    inputForm,
    inputValue
})