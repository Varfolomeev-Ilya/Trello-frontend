import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postColumn } from '../../../../../../api/columnsRequests';
import { createColumn } from '../../../../../../store/colums';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

function CreateColumn() {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(0),
                backgroundColor: '#ebecf0',
                borderStyle: 'none',
                borderRadius: '3px',
                marginLeft: '8px',
            },
        },
    }));
    const classes = useStyles();

    const dispatch = useDispatch();
    const columns = useSelector((state) => state.columns.allColumns);
    const [inputValue, setInputValue] = React.useState('');
    const routParams = useParams();
    const boardId = Number(routParams.id);

    const onChangeInputValue = event => {
        setInputValue(event.target.value);
    };

    const addColumn = async () => {
        if (inputValue) {
            const newColumn = {
                name: inputValue,
                boardId: boardId,
            }

            try {
                const response = await postColumn(newColumn);
                const newColumns = [...columns,
                {
                    ...response.data,
                    Tasks: [],
                },
                ];
                dispatch(createColumn(newColumns));
            } catch (error) {
                alert(error)
            }
        }
    };

    const handleEnter = event => {
        if (event.key === 'Enter') {
            addColumn();
            setInputValue('');
        }
    };

    return (
        <TextField
            className={classes.root}
            color={'secondary'}
            id="outlined-secondary"
            label="+ Add another list"
            variant="outlined"
            value={inputValue}
            onKeyPress={handleEnter}
            onChange={onChangeInputValue}
        />
    )
};

export default CreateColumn;