import React, { useState } from "react";
import './introPage.css';
import { Fade } from "react-awesome-reveal";
import Image from 'next/image';
import firstMeeting from 'public/images/firstMeeting.gif';

const IntroPageIntro = () => {
    return (
        <Fade>
            <p className={'intro-page-text-1'}>We first met on October 22nd, 2022</p>
            <Image
                src={firstMeeting}
                className={'first-meeting-gif'}
                alt-text={'first meeting gif'}
            />
            <p>Who would've thought?</p>
        </Fade>
    )
}

const IntroPage = ({page, setShowFooter}) => {
    const [showStats, setShowStats] = useState(false);
    return (
        <div id={page} className={'intro-page-content'}>
            {!showStats && <IntroPageIntro/>}
        </div>
    )
}

export default IntroPage;