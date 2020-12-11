import React, { Component, useContext } from 'react';
import CardSet from './CardSet';
import { Grid } from '@material-ui/core';
import { AppState } from './state';

const Home =() => {
        const appTitleContext = useContext(AppState);
        appTitleContext.setAppTitle('Tamil Flash Cards');
        return (
            <div style={{marginTop: '38px'}}>
                <Grid>
                    <CardSet />
                </Grid>
            </div>
        )
}

export default Home;