import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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

function RenamePopper({ text }) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [inputValue, setInputValue] = React.useState('');

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const onChangeInputValue = event => {
        setInputValue(event.target.value);
    };
    const handleClose = async () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <div>
            <Button
                aria-describedby={id}
                className={classes.textStyled}
                onClick={handleClick}
            >
                <p className={classes.pStyled}>{text}</p>
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
                        value={inputValue}
                        onChange={onChangeInputValue}
                    />
                </Typography>
            </Popover>
        </div>
    )
}

export default RenamePopper;