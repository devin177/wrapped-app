import React, {useState} from 'react';
import {Fade} from "react-awesome-reveal";
import './comPage.css';
import { Button } from '@mui/material';
import Image from 'next/image';
import firstText from 'public/images/firstText.png';
import firstDiscord from 'public/images/firstDiscord.png';
import firstIG from 'public/images/firstIG.png';


const ComPageInitialText = ({handleTap}) => {
    return (
        <div className={'com-page-header'}>
            <Fade
                direction="up"
                duration="2000"
                fraction="1"
                cascade
                triggerOnce
                damping="1"
            >
                    <p className={'com-page-text-top'}>We did some talking this year</p>
                    <p className={'com-page-text-bottom'}>...a lot of it</p>
                    <Button onClick={() =>{
                        handleTap()
                    }}>Continue</Button>
            </Fade>
        </div>
    )
}

const ComPageStats = () => {
    return (
        <div className={'com-page-stats'}>
            <Fade
                cascade
                fraction="1"
                duration="3000"
                triggerOnce
            >
                <div className={'texts'}>
                    <Image
                        className={'texts-image'}
                        src={firstText}
                        alt="first text image"
                    />
                    <span>
                        <p>42,553 Texts</p>
                    </span>
                </div>
                <div className={'discord'}>
                    <span>
                        <p>520 Discord Messages</p>
                    </span>
                    <Image
                        className={'discord-image'}
                        src={firstDiscord}
                        alt="first discord image"
                    />
                </div>
                <div className={'instagram'}>
                    <Image
                        className={'ig-image'}
                        src={firstIG}
                        alt="first IG image"
                    />
                    <span>
                        <p>8,792 Instagram DMs</p>
                    </span>
                </div>
            </Fade>
        </div>
    )
}

const ComPage = () => {
    const [hasTapped, setHasTapped] = useState(false);
    const handleTap = () => {
        setHasTapped(true);
    }
    
    return (
        <div  id="page2" className={'com-page-content'}>
            {!hasTapped &&
                <ComPageInitialText
                    handleTap={handleTap}
                />
            }
            {hasTapped && <ComPageStats />}
        </div>
    )
}

export default ComPage;