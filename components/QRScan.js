
import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import {Link} from 'react-router-dom';

const QRScan = () => {
    const [qrState, setqrState] = useState(null);
    const [qrData, setqrData] = useState(null);

    const onQRScan = (data) => {
        setqrState(null);
        if(data !=null) {
        console.log('scanning', data);
        setqrData(data);
        setqrState(1);
        playAudio(data);
    }
    }

    const playAudio = (qrData) => {
        let audioObj = new Audio('/mp3s/'+qrData+'.mp3');
        audioObj.addEventListener("canplaythrough", audioObj.play());
    }

    return(
        <div>
            <QrReader delay={3000} onError = {console.log('QR Reader error')} onScan={onQRScan}>
            </QrReader>
            <Typography>
            {qrState === null ? <div>Scan a QR image </div> : qrData} 
            <Link to="/">
            <div style={{textAlign: 'center'}}>
            Home
            </div>
            </Link>
            </Typography>
        </div>
    )
}

export default QRScan;