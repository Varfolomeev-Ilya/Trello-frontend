import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { updateNameColumn } from '../../../../../../api/columnsRequests';
import { createColumn } from '../../../../../../store/colums';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(1),
    },
    pStyled: {
        background: 'transparent',
        boxShadow: 'none',
        fontWeight: '600',
        height: '20px',
        resize: 'none',
        maxHeight: '256px',
        marginLeft: '-10px',
    },
    textStyled: {
        textAlign: 'center',
    }
}));

function ColumnPopper({ columnId, name }) {
    const classes = useStyles();
    const allColumns = useSelector((state) => state.columns.allColumns);

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
        try {
            if (onChangeInputValue) {
                setAnchorEl(null);
                const columnName = inputValue.trim();
                await updateNameColumn({ columnName, columnId });
                const newColumns = allColumns.map((item) => {
                    if (item.id === columnId) {
                        return { ...item, name: columnName };
                    }
                    return item;
                });
                dispatch(createColumn(newColumns));
                setInputValue('');
            }
        } catch (error) {
            console.log(error);
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
                <p className={classes.pStyled} key={name} >{name}</p>
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
                        id={columnId}
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

export default ColumnPopper;