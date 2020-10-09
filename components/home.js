import React, {Component} from 'react';
import ButtonBases from './RWS';
import {Grid} from '@material-ui/core';

class Home extends Component{
    render(){
        return(
            <div>
                <Grid>
            <ButtonBases />
        </Grid>
            </div>
        )
    }
}

export default Home;