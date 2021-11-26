import ToDoItem from './ToDoItem';
import styles from './todo.module.css';

function ToDoList({data}) {

    return (
        <div className = {styles.toDoList}>
            {data.map(item => {
                return <ToDoItem data = {item} key = {item.id}/>
            })}
        </div>
    )
}

export default ToDoList;