import {combineReducers} from "redux"
import { todoAppReducer } from "./reducers/todoAppReducer"
import {createStore} from "redux"

const reducers = combineReducers({
    todoPage:  todoAppReducer
})

let store = createStore(reducers)

export default store;