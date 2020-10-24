import React, { Component } from 'react';
import ButtonBases from './CardSet';
import { Grid } from '@material-ui/core';

class Home extends Component {
    render() {
        return (
            <div style={{marginTop: '38px'}}>
                <Grid>
                    <ButtonBases />
                </Grid>
            </div>
        )
    }
}

export default Home;