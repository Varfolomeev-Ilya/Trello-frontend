import React from 'react';
import DeleteBtn from '../Deletebtn/deleteBtn';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { StyledLink } from './BoardsCardStyled';
import { makeStyles } from '@material-ui/core/styles';

function BoardCard({ id, name }) {
  const useStyles = makeStyles({
    root: {
      marginTop: '20px',
      width: 175,
      height: 'auto',
      textAlign: 'center',
      marginLeft: '8px',
    },
    cardActioin: {
    display: 'flex',
    padding:' 8px',
    alignItems: 'center',
    justifyContent: 'space-between',
    }
  });
  const classes = useStyles();
  
  return (
    <>
      <Card className={classes.root}>
          <CardContent>
            <Typography
             gutterBottom variant="h5"
             component="h2" 
             key={name}
             >
              {name}
            </Typography>
          </CardContent>
        <CardActions className={classes.cardActioin}>
          <Button size="small" color="primary">
            <StyledLink to={`/column/${id}`}>
              in
    </StyledLink>
          </Button>
          <Button size="small" color="secondary">
          <DeleteBtn boardId={id}/>
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default BoardCard;