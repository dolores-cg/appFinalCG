import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import accounting from "accounting";
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from "@material-ui/core/styles";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider"

const useStyles = makeStyles ((theme) =>({
    cardActions:{
        display: "flex",
        justifyContent: "space-between",
        textAlign: "center",
    },
    cardRating:{
        display: "flex"
    }
}))

export default function CheckoutCard({product:{id, name, category, price, rating, img, description}}) {
  
const classes = useStyles();
const [{basket}, dispatch] = useStateValue();

const removeItem = () => dispatch ({
  type: actionTypes.REMOVE_ITEM,
  id,
})

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography
          variant='body2'
          color='textSecondary'
          >
              {accounting.formatMoney(price, "$")}
          </Typography>
        }
        title={name}
        subheader="En Stock"
      />
      <CardMedia
        component="img"
        image={img}
        title={name}
      />
      <CardActions disableSpacing className={classes.cardActions}>
       <div className={classes.cardRating}>      
        {Array(rating)
        .fill()
        .map((_, i)=>(
          <p>&#11088;</p>
        ))}
        </div>
        <IconButton>
        <DeleteIcon fontSize="large" onClick={removeItem}/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
