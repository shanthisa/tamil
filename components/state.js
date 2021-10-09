
import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

const setupContext = () => {
    
    const [appTitle, setAppTitle] = useState('Tamil Flash Cards');
    const [volume, setVolume] = useState(true);
    const [success, setSuccess] = useState(false);
    const [qrData, setqrData] = useState('');
    const resetState = () => {
        
        setAppTitle('Tamil Flash Cards');
        setVolume(true);
        setSuccess(false);
        
    }
   
    return {appTitle, setAppTitle, volume, setVolume, success, setSuccess, qrData, setqrData, resetState};
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
