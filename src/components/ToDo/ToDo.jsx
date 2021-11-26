import { useSelector } from "react-redux";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import styles from './todo.module.css';

function ToDo() {
    const todos = useSelector((state) => state.todos);
    return (
        <div className = {styles.toDo}>
            <h1 style = {{margin: '30px auto'}}>ToDo List</h1>

            <ToDoInput/>

            <ToDoList data = {todos}/>
        </div>
    )
}

export default ToDo;