import React from 'react';
import {Card, CardContent, CardMedia, Typography} from '@material-ui/core';
import {cardSet} from './constants';
import { useParams } from 'react-router-dom';


const cardItems = cardSet.map((flashcard) => {return {...flashcard}});

function displayCard(name, cardItems) {
    return cardItems.filter((cardItem) => {if (name===cardItem.title) return cardItem})[0];
}

const Cards = () => {
    // debugger
    // let item = cardItems[0];
    let {name} = useParams();
    let item = displayCard(name,cardItems)
    return (
    <Card>
        <CardContent>
            <Typography>
            <h1>Card title</h1>
            {name}
                <div>card Items{
                 item.title
                }</div>
                
            </Typography>
        </CardContent>

    </Card>
    )
}

export default Cards;