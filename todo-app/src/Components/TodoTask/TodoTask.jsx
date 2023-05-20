import s from "./TodoTask.module.css"

const TodoTask = (props) =>{
return(
    <div className={s.todoTask}>
        <h2>{props.title}</h2>
        <button onClick={()=>{props.deleteTodo(props.id)}}>Done</button>
    </div>
)
}

export default TodoTask;