import { Button, TextField } from "@mui/material";
import { useState } from "react";
import {useDispatch} from 'react-redux';
import {addToDo} from '../../Redux/ToDo/actions';
import styles from './todo.module.css';

function ToDoInput() {
    const [title, setTitle] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addToDo(title));
    }

    return (
        <div className = {styles.toDoInput}>
            <form onSubmit = {handleSubmit} >
                <TextField required placeholder = "Enter a task..." type = "text" onChange = {(e) => setTitle(e.target.value)}/>
                <Button type = "submit" variant = "contained" disableElevation>Add To Do</Button>
            </form>
        </div>
    )
}

export default ToDoInput;