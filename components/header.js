import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import Menu from './menu';
import { AppTitleState} from './state';

const userStyle = makeStyles(() => ({
    TypoStyle: { flex: 1 }
}));

const Header = () => {
    const classes = userStyle();

    const appTitle = useContext(AppTitleState);
    console.log('Header appTitleState: ', AppTitleState);
    console.log('Header appTitle: ', appTitle.appTitle);
    return (
       
            <AppBar position='fixed'>
                <Toolbar>
                    <Menu />
                    <Typography className={classes.TypoStyle}>{appTitle.appTitle}</Typography>
                </Toolbar>
            </AppBar>
        

    )
}

export default Header;

