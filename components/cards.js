import React, { useContext, useEffect, useState, useCallback } from 'react';
import { Card, CardHeader, CardContent, CardMedia, Typography, makeStyles, IconButton, Tooltip } from '@material-ui/core';
import { cardSet, flashcards } from './constants';
import { useParams } from 'react-router-dom';
import { ArrowBack, ArrowForward, Replay, PlayArrow, VolumeMute, VolumeUp } from '@material-ui/icons';
import { AppState } from './state';
import {useTransition} from 'react-spring';
import FlashCard from './card';

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
    //let item = cardItems[0];
    // const [cardIndex, setCardIndex] = useState(1);
    
    const classes = useStyles();
    let { name } = useParams();
    const appContext = useContext(AppState);
    
    let csitem = selectCardSet(name, cardsetItems)
    let cards = selectFlashCards(csitem.id);
    let card = selectCard(cards, appContext.cardIndex);
    console.log(`card index is ${appContext.cardIndex}`);
    let audioObj = new Audio(card.url);

    console.log(cards);

    // const transitions = useTransition(appContext.cardIndex, p => p, {
    //     from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    //     enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    //     leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    //   })

    useEffect(() => {
        appContext.setAppTitle(name);
        audioObj.addEventListener("canplaythrough", event => { appContext.volume ? audioObj.play() : audioObj.VolumeMute });
    });
    
    return (
        <div className={classes.cards}>
            <FlashCard card={card} csitem={csitem} total = {cards.length}/>
            <div className={classes.nav}>
                <IconButton disabled={appContext.cardIndex === 1} onClick={(e) => {
                    e.preventDefault();
                    audioObj.pause();
                    appContext.setCardIndex(appContext.cardIndex - 1);
                }}>
                    <ArrowBack style={{ fontSize: '80' }}> </ArrowBack>
                </IconButton>

                <Tooltip title='Volume should be on for replay'>
                    <IconButton disabled={!appContext.volume} aria-label="play/pause" onClick={() => { appContext.volume && audioObj.play() }}>
                        {/* <PlayArrow style={{fontSize:'80'}}>Play</PlayArrow> */}
                        <Replay style={{ fontSize: '80' }}></Replay>
                    </IconButton>
                </Tooltip>


                <IconButton disabled={appContext.cardIndex === cards.length} onClick={(e) => {
                    e.preventDefault();
                    audioObj.pause();
                    appContext.setCardIndex(appContext.cardIndex + 1);
                }}>
                {/* {transitions.map(({item, props, key})=>{
                    const Card = cards[item]
                    return <Card key={key}></Card> 
                })} */}
                    <ArrowForward style={{ fontSize: '80' }}>Next</ArrowForward>
                </IconButton>

            </div>
        </div>
    )
}

export default Cards;