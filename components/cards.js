import React, { useContext, useEffect, useState, useCallback } from 'react';
import { Card, CardHeader, CardContent, CardMedia, Typography, makeStyles, IconButton, Tooltip } from '@material-ui/core';
import { cardSet, flashcards } from './constants';
import { useParams } from 'react-router-dom';
import { ArrowBack, ArrowForward, Replay, PlayArrow, VolumeMute, VolumeUp } from '@material-ui/icons';
import { AppState } from './state';
import FlashCard from './card';
import Success from './success';
import localForage from "localforage";
import { getCards } from '../backend/supabase_client';



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
// const cardsetItems = cardSet.map((cardSetItems) => { return { ...cardSetItems } });
//const flashCards = flashcards.map((cards) => { return { ...cards } });



// function selectCardSet(name, cardsetItems) {
//     return cardsetItems.filter((cardsetItem) => { if (name === cardsetItem.title) return cardsetItem })[0];
// }

// function selectFlashCards(cardSetID) {
//     return flashCards.filter((cards) => { if (cardSetID === cards.cardSetID) return cards });
// }

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

//const selectCard = (cards, cardIndex) => cards.find((c) => (c.id === cardIndex));

const Cards = () => {
    // debugger
    //let item = cardItems[0];
    // const [cardIndex, setCardIndex] = useState(1);

    const classes = useStyles();
    let { cardsetName } = useParams();
    const appContext = useContext(AppState);

    // let csitem = selectCardSet(name, cardsetItems)
    // let cards = selectFlashCards(csitem.id);
    // let card = selectCard(cards, appContext.cardIndex);


    let [cards, setCards] = useState([]);
    let [cardset, setCardset] = useState(null);
    let [cardIndex, setCardIndex] = useState(0);
    let audioObj;

    const resetState = () => {
        setCards([]);
        setCardset(null);
        setCardIndex(0);
        audioObj = undefined;
    }

    useEffect(() => {
        resetState();
        getCards(cardsetName).then((cardsdata) => {
            console.log('getcards -> cardset',cardsdata.cardset);
            setCards(cardsdata.cards);
            console.log('getcards -> cards',cardsdata.cards);
            setCardset(cardsdata.cardset);
        }).catch(() => {
            console.log("catch in useEffect");
            resetState();

        });
    }, [cardsetName])

    let card = cards[cardIndex];


    console.log(`card index is ${cardIndex}`);
    if (card !== undefined) {
        let audioURL = appContext.success ? '/assets/success.mp3' : card.audio;
        audioObj = new Audio(audioURL);
        if(!appContext.success) {
            audioObj.crossOrigin = "anonymous";
        }
    } else {

    }
    useEffect(() => {
        if (audioObj !== undefined) {
            appContext.setAppTitle(cardsetName);
            audioObj.addEventListener("canplaythrough", () => { appContext.volume ? audioObj.play() : audioObj.VolumeMute });
        }

    });

    console.log(cards);

    // const transitions = useTransition(appContext.cardIndex, p => p, {
    //     from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    //     enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    //     leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    //   })


    if (cards.length == 0 || card == undefined) return <div>Loading.. </div>
    return (
        <div className={classes.cards}>
            {appContext.success ?
                <Success /> :
                <div>
                    <FlashCard card={card} total={cards.length} />
                    <div className={classes.nav}>
                        <IconButton disabled={cardIndex === 0} onClick={(e) => {
                            e.preventDefault();
                            audioObj.pause();
                            setCardIndex(cardIndex - 1);
                        }}>
                            <ArrowBack style={{ fontSize: '80' }}> </ArrowBack>
                        </IconButton>

                        <Tooltip title='Volume should be on for replay'>
                            <IconButton disabled={!appContext.volume} aria-label="play/pause" onClick={() => { appContext.volume && audioObj.play() }}>
                                {/* <PlayArrow style={{fontSize:'80'}}>Play</PlayArrow> */}
                                <Replay style={{ fontSize: '80' }}></Replay>
                            </IconButton>
                        </Tooltip>


                        <IconButton onClick={async (e) => {
                            e.preventDefault();
                            audioObj.pause();
                            if (cardIndex === cards.length - 1) {
                                console.log('Success');
                                appContext.setSuccess(true);
                                setCardIndex(0);
                                const completedCardSets = await localForage.getItem('completed_card_sets');
                                console.log(completedCardSets);
                                if (completedCardSets === null) {
                                    await localForage.setItem('completed_card_sets', [cardset.id]);
                                } else {
                                    if (completedCardSets.indexOf(cardset.id) === -1) {
                                        await localForage.setItem('completed_card_sets', completedCardSets.concat(cardset.id));
                                    }
                                }
                            } else {
                                setCardIndex(cardIndex + 1);
                            }
                        }}>
                            {/* {transitions.map(({item, props, key})=>{
                    const Card = cards[item]
                    return <Card key={key}></Card> 
                })} */}
                            <ArrowForward style={{ fontSize: '80' }}>Next</ArrowForward>
                        </IconButton>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cards;