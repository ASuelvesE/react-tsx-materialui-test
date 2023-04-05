import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { IDog } from '../../../models/IDog';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
  card: {
    width: '100%',
    padding: 10,
    transition: 'margin 0.2s ease',
    '&:hover': {
      borderRadius: "5px",
      boxShadow: "0 2px 5px 0 black, 0 1px 5px 0 rgba(0, 0, 0, 0.1)",
    },
  },    
  image: {
    width: '60%',
    height:'200px',
    borderRadius: "5px",
    boxShadow: "0 3px 5px 0 black, 0 2px 5px 0 rgba(0, 0, 0, 0.1)"
    },
});

const Dog: React.FC<{url : string, indice: number }> = ({ url, indice }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={url}
          alt="green iguana"
          className={classes.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align='center'>
            {indice +1}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Dog;