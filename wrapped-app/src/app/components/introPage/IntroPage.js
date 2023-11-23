import React, { useState } from "react";
import './introPage.css';
import { Fade } from "react-awesome-reveal";

const IntroPageIntro = () => {
    return (
        <Fade>
            <p className={'intro-page-text-1'}>We first met through VSA</p>
            <p></p>
        </Fade>
    )
}

const IntroPage = ({page}) => {
    const [showStats, setShowStats] = useState(false);
    return (
        <div id={page} className={'intro-page-content'}>
            {!showStats && <IntroPageIntro/>}
        </div>
    )
}

export default IntroPage;