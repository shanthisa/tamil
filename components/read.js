import React, {Component} from 'react'
import ImageCard from './card';
import {Card, CardActions, CardContent, Typography, Button, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import cardData from './constants';



class Read extends Component{
    getCardsList = (cardDetails) => {
        return (
        <Grid item xs={12} sm={4}>
        <ImageCard {...cardDetails}></ImageCard>
        </Grid>
        )
    }

    render(){
        return(
            <div>
            {/* <h1>Read</h1> */}
            <Grid container spacing={2}>
            {cardData.map(cardDetails => this.getCardsList(cardDetails))}
            </Grid>
            {/* <Grid item xs={12} sm={4}>
            <ImageCard title='விலங்குகள்' subtitle='animals' avatarSrc='/images/bookworm.svg' imageSrc='/images/giraffe.png' description='Learn animals in Tamil'/> 
            </Grid>
            <Grid item xs={12} sm={4}>
                <ImageCard />
            </Grid>
            <Grid item xs = {12} sm={4}>
                <ImageCard />
            </Grid>
            </Grid> */}
            
            </div>

        )
    }
}
export default Read;