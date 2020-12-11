
import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

const setupContext = () => {
    
    const [appTitle, setAppTitle] = useState('Tamil Flash Cards');
    const [cardIndex, setCardIndex] = useState(1);
    const [volume, setVolume] = useState(true);
    const [success, setSuccess] = useState(false);
    const [qrData, setqrData] = useState('');
    const resetState = () => {
        setAppTitle('Tamil Flash Cards');
        setCardIndex(1);
        setVolume(true);
        setSuccess(false);
    }
   
    return {appTitle, setAppTitle, cardIndex, setCardIndex, volume, setVolume, success, setSuccess, resetState, qrData, setqrData};
}

const onPageChange = (contextObj) => {
    let history = useHistory();
    history.listen(()=>{contextObj.resetState()});
}

export const AppState = React.createContext();


export const AppTitleContextProvider = (props) => {
    let contextObj = setupContext();
    onPageChange(contextObj);
    console.log('appTitleTxt in state.js : ', contextObj.appTitle);
    return <AppState.Provider value={contextObj}>
        {props.children}
    </AppState.Provider>
}
