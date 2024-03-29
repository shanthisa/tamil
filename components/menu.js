import React, { useState } from 'react';
import {
    Drawer, IconButton, List, ListItem,
    ListItemText
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';


// const menuItems = [{text:'Read', link: '/read'},
//                     {text:'Write', link: '/write'}, 
//                     {text:'Speak', link:'/speak'}, 
//                     {text: 'QR Scan', link:'/'},
//                     {text: 'Home', link:'/'},
//                     {text: 'Contact Us', link:'/contact'},
//                     {text: 'Flash Cards', link:'/flashCards'}
//                 ];

const menuItems = [{text: 'Home', link: '/'},
{text: 'எழுத்துக்கள்/letters', link:'/cardset/எழுத்துக்கள்'},
{text: 'பழங்கள்/Fruits', link:'/cardset/பழங்கள்'},
{text: 'வண்ணங்கள்/Colours', link:'/cardset/வண்ணங்கள்'},
{text: 'விலங்குகள்/animals', link:'/cardset/விலங்குகள்'}]
// {text: 'QR Scan', link:'/qrscan'}]





const Menu = () => {
    let anchor = 'left';
    const [state, setState] = React.useState({ left: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) { return };
        setState({ ...state, [anchor]: open });
    }

    const list = (anchor) => {
        return (
            <div onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
                <div style={{textAlign:'center'}}>
                <img src="/assets/logo_512.png" height="80px" width="auto" />
                </div>
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