import {connect} from "react-redux";
import TodoApp from "../Components/TodoApp";
import { deleteTodoAC, addTodoAC, updateTodoAC } from "./reducers/todoAppReducer";


const mapStateToProps = (state) =>({
    todoApp: state.todoPage.todoTasks,
    countTodos: state.todoPage.countTodos
})

const mapDispatchToProps = {
deleteTodo: deleteTodoAC,
addTodo: addTodoAC,
updateTodo: updateTodoAC
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);