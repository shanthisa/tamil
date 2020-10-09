import React, { useState } from 'react';
import {
    Drawer, IconButton, List, ListItem,
    ListItemText
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';


const menuItems = [{text:'Read', link: '/read'},
                    {text:'Write', link: '/write'}, 
                    {text:'Speak', link:'/speak'}, 
                    {text: 'QR Scan', link:'/'},
                    {text: 'Home', link:'/'},
                    {text: 'Contact Us', link:'/contact'},
                    {text: 'Flash Cards', link:'/flashCards'}
                ];





const Menu = () => {
    let anchor = 'left';
    const [state, setState] = React.useState({ left: false });

    const toggleDrawer = (anchor, open) => (event) => {
        console.log('toggleDrawer', arguments);
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) { return };
        setState({ ...state, [anchor]: open });
    }

    const list = (anchor) => {
        return (
            <div onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
                <List>
                    {menuItems.map(({text,link}) => (

                        <ListItem button key={text}>
                        <Link to={link}>
                            <ListItemText primary={text} />
                        </Link>
                        </ListItem>
                    ))
                    }
                    
                </List>
            </div>
        )
    }
    return (
        <div>
            <IconButton edge="start"
                // className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={(toggleDrawer(anchor, true))}>
                <MenuIcon />
            </IconButton>

            <Drawer anchor={'left'} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
            </Drawer>

        </div>
    );
};
// const Menu = () => {
//     return (
//         <IconButton edge="start" color="inherit">
//             <MenuIcon/>
//         </IconButton>
//     );
// }

export default Menu;