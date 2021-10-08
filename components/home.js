import React, { Component, useContext, useEffect } from 'react';
import CardSet from './CardSet';
import { Grid } from '@material-ui/core';
import { AppState } from './state';
import {getCardSets} from '../backend/supabase_client';

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