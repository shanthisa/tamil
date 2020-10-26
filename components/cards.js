import React, { useContext, useEffect, useState} from 'react';
import { Card, CardHeader, CardContent, CardMedia, Typography, makeStyles, IconButton, SkipNextIcon, SkipPreviousIcon, Tooltip } from '@material-ui/core';
import { cardSet, flashcards } from './constants';
import { useParams } from 'react-router-dom';
import { ArrowBack, ArrowForward, Replay, PlayArrow, VolumeMute, VolumeUp } from '@material-ui/icons';
import {AppTitleState} from './state';

const useStyles = makeStyles(() => ({
    root: {
        marginTop: 38,
        //width: '95%',
    },
    title: {
        display: 'flex',
        padding: '0 1em',
        justifyContent: 'space-between',
    },
    cards: {
        //maxWidth: 200,
        margin: '0 auto',
        width: '95%',
    },
    media: {
        height: 0,
        paddingTop: '55.25%', //(16:9)
        backgroundSize: 'contain',
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    nav: {
        textAlign: 'center',
    },
    // bigButton: {
    //     fontSize: '140'
    // },
}))
const cardsetItems = cardSet.map((cardSetItems) => { return { ...cardSetItems } });
const flashCards = flashcards.map((cards) => { return { ...cards } });

function selectCardSet(name, cardsetItems) {
    return cardsetItems.filter((cardsetItem) => { if (name === cardsetItem.title) return cardsetItem })[0];
}

function selectFlashCards(cardSetID) {
    return flashCards.filter((cards) => { if (cardSetID === cards.cardSetID) return cards });
}

// const betterCardSelect = (cards, idx) => cards.find((c) => c.id === idx);

// function selectCard(cards, cardIndex){
//     return cards.filter((card)=>{
//         console.log(card.id, card.title, cardIndex)
//        if(card.id === cardIndex)
//        {
//            console.log(card.title)
//         return(card)
//        }
//     })[0];
// }

const selectCard = (cards, cardIndex) => cards.find((c) => (c.id === cardIndex));

const Cards = () => {
    // debugger
    // let item = cardItems[0];
    const [cardIndex, setCardIndex] = useState(1);
    const classes = useStyles();
    let { name } = useParams();
    const appTitleContext = useContext(AppTitleState);
    appTitleContext.setAppTitle(name);
    let csitem = selectCardSet(name, cardsetItems)
    let cards = selectFlashCards(csitem.id);
    let card = selectCard(cards, cardIndex);
    let audioObj = new Audio(card.url);

    const [volume, setVolume] = useState(true);
    console.log(cards);

    useEffect(() => {
        audioObj.addEventListener("canplaythrough", event => { volume ? audioObj.play() : audioObj.VolumeMute });
    });

    return (
        <div className={classes.cards}>
            <Card className={classes.root}>
                <CardHeader title={csitem.title}></CardHeader>
                {/* {audioObj.play()} */}

                <div className={classes.title}>
                    <Typography variant='h5'>{card.title} </Typography>
                    <Typography variant='h5'>{card.subtitle}</Typography>
                </div>
                {
                    (card.image !== undefined) ? <CardMedia className={classes.media} image={card.image} hidden={card.image !== undefined} /> : <></>
                }

                <CardContent>
                    <Typography style={{ textAlign: 'center' }} variant='h5' color='textSecondary' component='p'>
                        {card.title_en}
                    </Typography>
                    <IconButton onClick={() => { setVolume(!volume); console.log('volume:', volume) }}>
                        {volume ? <VolumeUp></VolumeUp> : <VolumeMute></VolumeMute>}
                    </IconButton>
                </CardContent>

            </Card>
            <div className={classes.nav}>
                <IconButton disabled={cardIndex === 1} onClick={() => {
                    setCardIndex(cardIndex - 1);
                }}>
                    <ArrowBack style={{ fontSize: '80' }}> </ArrowBack>
                </IconButton>
                <Tooltip title='Volume should be on for replay'>
                    <IconButton disabled={!volume} aria-label="play/pause" onClick={() => { volume && audioObj.play() }}>
                        {/* <PlayArrow style={{fontSize:'80'}}>Play</PlayArrow> */}
                        <Replay style={{ fontSize: '80' }}></Replay>
                    </IconButton>
                </Tooltip>
                <IconButton disabled={cardIndex === cards.length} onClick={() => {
                    setCardIndex(cardIndex + 1);
                }}>
                    <ArrowForward style={{ fontSize: '80' }}>Next</ArrowForward>
                </IconButton>
            </div>
        </div>
    )
}

export default Cards;