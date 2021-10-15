import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import Menu from './menu';
import { AppState} from './state';

const userStyle = makeStyles(() => ({
    TypoStyle: { flex: 1 }
}));

const Header = () => {
    const classes = userStyle();

    const appTitle = useContext(AppState);
    console.log('Header appTitleState: ', AppState);
    console.log('Header appTitle: ', appTitle.appTitle);
    return (
       
            <AppBar position='fixed'>
                <Toolbar>
                   
                    <Menu />
                    
                    <Typography className={classes.TypoStyle}>{appTitle.appTitle}</Typography>
                    <span><img src="/assets/logo_512.png" width="60px" height="auto"></img></span>
                </Toolbar>
            </AppBar>
        

    )
}

export default Header;

