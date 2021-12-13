import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import logo from "../multimedia/logo.jpg";
import {ShoppingCart} from '@material-ui/icons';
import{ Link } from "react-router-dom"
import { useStateValue } from "../StateProvider"

const useStyles = makeStyles ((theme)=>({
    root: {
        flexGrow: 1,
        marginBottom: "7rem",
    },
    appBar: {
        backgroundColor: "darkred",
        boxShadow: "none",
    },
    grow: {
        flexGrow: 1,
    },
    button: {
        marginLeft: theme.spacing(2),
    },
    image: {
        marginRight: "10px",
        height: "3rem",
    },
}
))

export default function Navbar() {

    const classes = useStyles();
    const [{basket}, dispatch] = useStateValue();

  return (
    <div className = {classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to="/">
          <IconButton edge="start" className = {classes.menuButton} color="inherit" aria-label= "menu">
            <img src={logo} className={classes.image}/>
          </IconButton>
          </Link>
          <div className={classes.grow}/>
          <Typography variant="h6" color="textPrimary" component="p">
            Bienvenidx al ecommerce!
          </Typography>
          <div className={classes.button}>
            <Link to="/checkout-page">
          <IconButton aria-label="show cart items" color="inherit">
              <Badge badgeContent={basket?.length} color="secondary">
              <ShoppingCart fontSize="large"/>
              </Badge>
          </IconButton>
          </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>  
  );
}
