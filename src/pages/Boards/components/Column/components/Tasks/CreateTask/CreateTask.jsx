import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { createColumn } from '../../../../../../../store/colums';
import { postTask } from '../../../../../../../api/tasksRequests';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(1),
    },
    pStyled: {
        background: 'transparent',
        boxShadow: 'none',
        fontWeight: '600',
        margin: '4px 0',
        height: '20px',
        minHeight: '20px',
        resize: 'none',
        maxHeight: '256px',
        marginLeft: '-10px',
    },
    textStyled: {
        textAlign: 'center',
    }
}));

function CreateTask({ columnId }) {
    const classes = useStyles();
    const allColumns = useSelector((state) => state.columns.allColumns);
    const currentColumn = allColumns.find((column) => column.id === columnId);
    const columnTasks = currentColumn.Tasks;

    const [inputValue, setInputValue] = React.useState('');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const onChangeInputValue = event => {
        setInputValue(event.target.value);
    };

    const handleClose = async () => {
        setAnchorEl(null);
        const text = inputValue;
        const response = await postTask({ columnId, text });
        const newTasks = [...columnTasks, response.data];
        const newColumns = allColumns.map((item) => {
            if (item.id === columnId) {
                return { ...item, Tasks: newTasks }
            }
            return item;
        });
        dispatch(createColumn(newColumns));
        setInputValue('');
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const handleEnter = event => {
        if (event.key === 'Enter') {
            handleClose();
        }
    };

    return (
        <div>
            <Button
                aria-describedby={id}
                className={classes.textStyled}
                onClick={handleClick}
            >
                <p className={classes.pStyled}>+ Add Another card</p>
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography
                    className={classes.typography}
                >
                    <TextField
                        id={columnId}
                        placeholder="new task"
                        value={inputValue}
                        onChange={onChangeInputValue}
                        color='secondary'
                        onKeyPress={handleEnter}
                    />
                </Typography>
            </Popover>
        </div>
    );
}



export default CreateTask;