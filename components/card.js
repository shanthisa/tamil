// @ts-check
import React, { useContext } from 'react';
import {
    Card, CardHeader, CardContent,
    CardMedia, Typography,
    makeStyles, IconButton, Tooltip, LinearProgress
} from '@material-ui/core';
import {VolumeUp, VolumeMute} from '@material-ui/icons'
import { AppState } from './state';

const useStyles = makeStyles(() => ({
    root: {
        marginTop: 50,
        //width: '95%',
    },
    title: {
        display: 'flex',
        padding: '1em 1em',
        justifyContent: 'space-between',
    },
    
    media: {
        height: 0,
        paddingTop: '55.25%', //(16:9)
        backgroundSize: 'contain',
    },
}));

const FlashCard = ({ card, total }) => {
    const classes = useStyles();
    const appContext = useContext(AppState);
    const volume = appContext.volume;

    return (
        <Card className={classes.root}>
            {/* <CardHeader title={csitem.title}></CardHeader> */}

            
            <div className={classes.title}>
                <Typography variant='h5'>{card.title} </Typography>
                <Typography variant='h5'>{card.subtitle}</Typography>
            </div>

            {
                (card.image !== undefined) ?
                    <CardMedia className={classes.media}
                        image={card.image}
                        hidden={card.image !== undefined} /> : <></>
            }


            <CardContent>
                <Typography style={{ textAlign: 'center' }} variant='h5' color='textSecondary' component='p'>
                    {card.title_en}
                </Typography>
                <IconButton onClick={() => { appContext.setVolume(!volume); console.log('volume:', volume) }}>
                    {volume ? <VolumeUp></VolumeUp> : <VolumeMute></VolumeMute>}
                </IconButton>
                <LinearProgress variant="determinate" value={card.id*100/total}></LinearProgress>
                <Typography style={{ textAlign: 'center' }} component='p'>
                    {card.id} / {total}
                </Typography>
            </CardContent>

        </Card>
    )
};

export default FlashCard;