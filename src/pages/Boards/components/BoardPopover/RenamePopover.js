import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { updateBoard } from '../../../../api/boardsRequests';
import { createBoard } from '../../../../store/boards';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(1),
    },
    pStyled: {
        margin: '6px',
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '32px',
    },
    textStyled: {
        textAlign: 'center',
    }
}));

function RenamePopover() {
    const routParams = useParams();
    const boardId = Number(routParams.id);
    const allBoards = useSelector((state) => state.boards.allBoards);
    const currentBoard = allBoards.find((board) => board.id === boardId);
    const name = currentBoard.name;

    const [inputValue, setInputValue] = React.useState('');
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const onChangeInputValue = event => {
        setInputValue(event.target.value);
    };

    const mouseClick = async () => {
        try {
            if (onChangeInputValue) {
                setAnchorEl(null);
                const boardName = inputValue;
                await updateBoard({ boardName, boardId });
                const newBoards = allBoards.map((item) => {
                    if (item.id === boardId) {
                        return { ...item, name: boardName };
                    }
                    return item;
                })
                dispatch(createBoard(newBoards));
                setInputValue('');
            }
        } catch (error) {
            console.log(error.message)
        }         
    };

    const handleEnter = event => {
        if (event.key === 'Enter') {
            mouseClick();
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
                <p className={classes.pStyled} key={name}>{name}</p>
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
                        id={boardId}
                        defaultValue={name}
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

export default RenamePopover;