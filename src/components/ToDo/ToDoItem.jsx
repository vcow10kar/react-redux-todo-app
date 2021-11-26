import styles from './todo.module.css';
import { IconButton, Modal } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';
import { Delete } from '@mui/icons-material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {useDispatch} from 'react-redux';
import {toggleToDo, deleteToDo} from '../../Redux/ToDo/actions';

function ToDoItem({ data }) {
    const [display, setDisplay] = useState(false);

    const dispatch = useDispatch();

    const handleClick = () => {
        console.log("Clicked Icon")
        setDisplay(true);
    }

    const handleToggle = () => {
        dispatch(toggleToDo(data.id));
    }

    const deleteTodo = () => {
        dispatch(deleteToDo(data.id));
    }

    return (
        <div>
            <div className={styles.toDoItem} style = {data.status ? {backgroundColor: '#60ad5e'} : {backgroundColor: '#e57373'}}>
                <p>{data.title}</p>
                <IconButton onClick={handleClick} variant="contained">
                    <EditIcon color="iconColor" />
                </IconButton>
            </div>

            <div className={styles.modal}>
                <Modal open={display} onClose={() => setDisplay(false)}>
                    <div className={styles.modalDiv}>
                        <p className = {styles.titleTag}>{data.title}</p>
                        <div>
                            <IconButton onClick={handleToggle} variant="contained">
                                {data.status ? <RestartAltIcon color = "iconColor"/> : <CheckCircleIcon sx = {{color: '#60ad5e', fontWeight: 900}} />}
                            </IconButton>

                            <IconButton onClick={deleteTodo} variant="contained">
                                <Delete sx = {{color: '#c62828'}} />
                            </IconButton>
                        </div>

                    </div>
                </Modal>
            </div>
        </div>

    )
}

export default ToDoItem;