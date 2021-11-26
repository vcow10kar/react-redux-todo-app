import styles from './todo.module.css';
import { IconButton, Modal, TextField, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';
import { Delete } from '@mui/icons-material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useDispatch } from 'react-redux';
import { toggleToDo, deleteToDo, updateToDo } from '../../Redux/ToDo/actions';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

function ToDoItem({ data }) {
    const [display, setDisplay] = useState(false);
    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState("");

    const dispatch = useDispatch();

    const handleDisplay = () => {
        setDisplay(false);
        setEdit(false);
    }

    const handleClick = () => {
        console.log("Clicked Icon")
        setDisplay(true);
    }

    const displayEdit = () => {
        setEdit(!edit);
    }

    const handleToggle = () => {
        dispatch(toggleToDo(data.id));
    }

    const deleteTodo = () => {
        dispatch(deleteToDo(data.id));
    }

    const handleUpdate = () => {
        const payload = {
            id: data.id,
            title: title
        }

        dispatch(updateToDo(payload));
        setEdit(false);
    }

    return (
        <div>
            <div className={styles.toDoItem} style={data.status ? { backgroundColor: '#60ad5e' } : { backgroundColor: '#e57373' }}>
                <p>{data.title}</p>
                <IconButton onClick={handleClick} variant="contained">
                    <EditIcon color="iconColor" />
                </IconButton>
            </div>

            <div className={styles.modal}>
                <Modal open={display} onClose={() => handleDisplay()}>
                    <div className={styles.modalParent}>
                        <div className={styles.modalDiv}>
                            <div className={styles.modalParent}>
                                <p className={styles.titleTag}>{data.title}</p>
                                <div>
                                    <IconButton onClick={displayEdit} variant="contained">
                                        <EditIcon color="iconColor" />
                                    </IconButton>

                                    <IconButton onClick={handleToggle} variant="contained">
                                        {data.status ? <RestartAltIcon color="iconColor" /> : <CheckCircleIcon sx={{ color: '#60ad5e', fontWeight: 900 }} />}
                                    </IconButton>

                                    <IconButton onClick={deleteTodo} variant="contained">
                                        <Delete sx={{ color: '#e57373' }} />
                                    </IconButton>
                                </div>
                            </div>
                            <div className={styles.editItem}>
                                {edit ?
                                    <div className={styles.editItemFlex}>
                                        <TextField required defaultValue={data.title} onChange = {(e) => setTitle(e.target.value)}/>
                                        <Button disableElevation onClick={handleUpdate} variant="contained">Update</Button>
                                    </div>
                                    :
                                    null
                                }
                            </div>
                        </div>



                    </div>
                </Modal>
            </div>
        </div>

    )
}

export default ToDoItem;