import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { createColumn } from '../../../../../../../store/colums';
import { updateTask } from '../../../../../../../api/tasksRequests';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(0),
    },
    pStyled: {
        background: 'transparent',
        boxShadow: 'none',
        fontWeight: '600',
        resize: 'none',
        maxHeight: '256px',
        marginLeft: '-10px',
        margin: '0',
    },
    textStyled: {
        textAlign: 'center',
    }
}));

function RenameTask({taskText, columnId, taskId}) {
    const classes = useStyles();
    const allColumns = useSelector((state) => state.columns.allColumns);
    const currentColumn = allColumns.find((column) => column.id === columnId);
    const columnTask = currentColumn.Tasks;
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = React.useState('');
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const onChangeInputValue = event => {
        setInputValue(event.target.value);
    };

    const handleClose = async () => {
      try {
        setAnchorEl(null);
        const text = inputValue.trim();
        await updateTask({text, taskId});
        if (onChangeInputValue) {
            const newTasks = columnTask.map((item) => {
                if (item.id === taskId) {
                    return { ...item, text: text };
                }
                return item;
            });
            const newColumns = allColumns.map((item) => {
                if (item.id === columnId) {
                    return { ...item, Tasks: newTasks};
                }
                return item;
            });
                dispatch(createColumn(newColumns));
                setInputValue('');
        }   
      } catch (error) {
          console.log(error)
      }  
    };

    const handleEnter = event => {
        if (event.key === 'Enter') {
            handleClose();
            setInputValue('');
        }
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Button
                aria-describedby={id}
                className={classes.textStyled}
                onClick={handleClick}
            >
                <p className={classes.pStyled}>{taskText}</p>
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleEnter}
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
                        defaultValue={taskText}
                        onChange={onChangeInputValue}
                        color='secondary'
                        onKeyPress={handleEnter}
                        autoFocus 
                   />
                </Typography>
            </Popover>
        </div>
    );
}

export default RenameTask;