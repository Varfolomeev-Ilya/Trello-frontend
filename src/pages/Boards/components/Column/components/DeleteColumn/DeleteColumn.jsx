import React from 'react';
import { StyledDiv, StyledButton } from './DeleteColumnStyled';
import { deleteColumn } from '../../../../../../api/columnsRequests';
import { useDispatch, useSelector } from 'react-redux';
import { createColumn } from '../../../../../../store/colums';

function DeleteColumn({columnId}) {
    const dispatch = useDispatch();
    const columns = useSelector((state) => state.columns.allColumns);
    const handleClick = async () => {
        try {
            await deleteColumn(columnId);
            const newColumns = columns.filter((column) => column.id !== columnId);
            dispatch(createColumn(newColumns));
        }catch(error) {
            console.log(error)
        }
    }
    return (
        <StyledDiv>
            <StyledButton
                onClick={handleClick}
            >x</StyledButton>
        </StyledDiv>
    )
}

export default DeleteColumn;