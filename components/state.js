
import React, { useState } from 'react';

const setupContext = () => {
    const [appTitle, setAppTitle] = useState('Tamil Flash Cards');
    return {appTitle, setAppTitle};
}

export const AppTitleState = React.createContext();

export const AppTitleContextProvider = (props) => {
    let appTitleTxt = setupContext();
    console.log('appTitleTxt in state.js : ', appTitleTxt.appTitle);
    return <AppTitleState.Provider value={appTitleTxt}>
        {props.children}
    </AppTitleState.Provider>
}
