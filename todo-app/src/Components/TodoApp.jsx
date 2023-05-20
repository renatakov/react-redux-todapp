import s from "./TodoApp.module.css";
import TodoTask from "./TodoTask/TodoTask";
import { useEffect, useRef } from "react";
import Footer from "./Footer/Footer";
const TodoApp = (props) => {
    console.log(props)
    const getAllTodos = props.todoApp.map((todo) =>(
        <TodoTask
        key={todo.id}
        title={todo.title}
        id={todo.id}
        deleteTodo={props.deleteTodo}
        />
    ))
    const inputTitleRef = useRef(null);
    const btnCreateRef = useRef(null);
    useEffect(()=>{
        inputTitleRef.current.addEventListener('input', () =>{
            props.updateTodo("title", inputTitleRef.current.value)
        })
        btnCreateRef.current.addEventListener('click', () =>{
            props.addTodo()
            inputTitleRef.current.value = ""
        })
    },[])
return(
    <>
    <div className={s.todoContainer}>
        <span>Count todos: {props.countTodos}</span>
        <h1>TodoList</h1>
        {getAllTodos}
    </div>
    <div className={s.createTodoContainer}>
        <input ref={inputTitleRef} type="text" placeholder="Write Task Title"/>
        <button ref={btnCreateRef}>Create New Task</button>
    </div>
    <Footer/>

    </>
)
}

export default TodoApp;