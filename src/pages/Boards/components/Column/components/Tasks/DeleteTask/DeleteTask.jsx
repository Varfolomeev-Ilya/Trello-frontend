import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createColumn } from '../../../../../../../store/colums';
import { deleteTask } from '../../../../../../../api/tasksRequests';
import { StyledButton } from './DeleteTaskStyled';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';

function DeleteTask({columnDelId,taskDelId}) {
    const dispatch = useDispatch();
    const allColumns = useSelector((state) => state.columns.allColumns);
    const currentColumn = allColumns.find((item) => item.id === columnDelId);
    const columnTask = currentColumn.Tasks;

    const handleClick = async () => {
        try{
            await deleteTask(taskDelId);
            const newTasks = columnTask.filter((task) => task.id !== taskDelId);
            const newColumns = allColumns.map((item) => {
                if (item.id === columnDelId) {
                    return { ...item, Tasks: newTasks };
                }
                return item;
            })
            dispatch(createColumn(newColumns))
        } catch(error) {
            console.log(error)
        }
    }

    return(
        <StyledButton
        onClick={handleClick}
        >
        <RestoreFromTrashIcon/>
        </StyledButton>
    )
}

export default DeleteTask;