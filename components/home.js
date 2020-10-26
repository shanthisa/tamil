import React, { Component, useContext } from 'react';
import ButtonBases from './CardSet';
import { Grid } from '@material-ui/core';
import { AppTitleState } from './state';

const Home =() => {
        const appTitleContext = useContext(AppTitleState);
        appTitleContext.setAppTitle('Tamil Flash Cards');
        return (
            <div style={{marginTop: '38px'}}>
                <Grid>
                    <ButtonBases />
                </Grid>
            </div>
        )
}

export default Home;