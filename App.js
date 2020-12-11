import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cards from './components/cards';
import Contact from './components/contact';
import Header from './components/header';
import Home from './components/home';
import { AppTitleContextProvider } from './components/state';



// const useStyles = makeStyles({
//     titleStyle: {
//         fontStyle: 'bold',
//         color: 'brown',
//         fontSize: '30px'
//     },
//     buttonStyle: {
//         color: 'green'
//     }
// }); 


function App() {
    // const classes=useStyles();
   
    return(
        <BrowserRouter>
        <AppTitleContextProvider>
        <Container maxWidth="sm">
        
        <div>
        <Grid container direction='column'>
        <Grid item>
        {/* <Typography className={classes.titleStyle}>Tamil Flash Cards</Typography> */}
        <Header />
        </Grid>
        
        {/* <Grid item container>
        <Grid item xs={0} sm={2}></Grid>
        <Grid item xs={12} sm={8}>
        <Button color='secondary' fullWidth variant='outlined'>Read</Button>
        </Grid> */}
        {/* </Grid> */}
        {/* <nav>
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/read'}>Read</Link>
            </li>
            <li>
                <Link to={'/speak'}>Speak</Link>
            </li>
            <li>
                <Link to={'/write'}>Write</Link>
            </li>
        </ul>
        </nav> */}
        <hr />
        <Switch>
            <Route exact path='/' component={Home} /> 
            <Route path='/cardset/:name' component={Cards} />
            {/* <Route path='/write' component={Write} />
            <Route path='/speak' component={Speak} />
            <Route path='/flashCards' component={flashCards} /> */}
            <Route path='/contact' component={Contact}></Route>
        </Switch>
        </Grid>
        </div>
        
        </Container>
        </AppTitleContextProvider>
        </BrowserRouter>
    );
}

export default App;