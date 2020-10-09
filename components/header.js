import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Menu from './menu';

const userStyle = makeStyles(()=>({
    TypoStyle : {flex: 1}
}));

const Header = () =>{
    const classes=userStyle();
return (
    <AppBar position='static'>
    <Toolbar>
    <Menu />
    <Typography className={classes.TypoStyle}>Tamil Flash Cards</Typography>
   
    </Toolbar>
    </AppBar>
    
)
}

export default Header;

