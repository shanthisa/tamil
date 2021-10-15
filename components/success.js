import React from 'react';
import  {Player} from '@lottiefiles/react-lottie-player';
import * as animationData from '../imgs/winning-cup.json';

import { makeStyles } from '@material-ui/styles';

import {Link} from 'react-router-dom';
import { Typography } from '@material-ui/core';


const useStyle = makeStyles(()=> ({
    success: {
        marginTop: '5em'
    },
    home: {
        textAlign: "center"
    }
})
)

const Success = () => {
    const classes = useStyle();
    return (
        <div className = {classes.success}>
            {/* <Lottie 
            options = {{animationData : animationData, loop: false, autoplay: true}}
            height={310}
            width={300}
            ></Lottie> */}
            <Player 
            autoplay
            keepLastFrame
            src= {animationData}
            style={{height:'310px', width:'300px'}} />
        
            <Typography>
            <Link to="/">
            <h3 className={classes.home}>Learn more</h3>
            </Link>
            </Typography>
        </div>
    )
}

export default Success;