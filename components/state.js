
import React, { useState } from 'react';

const setupContext = () => {
    const [appTitle, setAppTitle] = useState('Tamil Flash Cards');
    const [cardIndex, setCardIndex] = useState(1);
    const [volume, setVolume] = useState(true);
    return {appTitle, setAppTitle, cardIndex, setCardIndex, volume, setVolume};
}

export const AppState = React.createContext();


export const AppTitleContextProvider = (props) => {
    let contextObj = setupContext();
    console.log('appTitleTxt in state.js : ', contextObj.appTitle);
    return <AppState.Provider value={contextObj}>
        {props.children}
    </AppState.Provider>
}
