import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../images/winning-cup.json';
import { makeStyles } from '@material-ui/styles';

import {Link} from 'react-router-dom';

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
            <Lottie 
            options = {{animationData : animationData, loop: false, autoplay: true}}
            height={310}
            width={300}
            ></Lottie>
        
            <Link to="/">
            <h3 className={classes.home}>Learn more</h3>
            </Link>
        </div>
    )
}

export default Success;