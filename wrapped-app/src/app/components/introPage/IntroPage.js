import React, { useState } from "react";
import './introPage.css';
import { Fade } from "react-awesome-reveal";
import Image from 'next/image';
import firstMeeting from 'public/images/firstMeeting.gif';
import { Button } from "@mui/material";
import kneelingNaruto from 'public/images/kneelingNaruto.jpg';
import standingNaruto from 'public/images/standingNaruto.jpg';
import armAroundNaruto from 'public/images/armAroundNaruto.jpg';
import Footer from "../footer/Footer";

const IntroPageIntro = ({handleClick}) => {
    return (
        <Fade
            cascade
            triggerOnce
            duration={2000}
        >
            <p className={'intro-page-text-1'}>We first met on October 22nd, 2022 at a VSA speed friending event.</p>
            <Image
                src={firstMeeting}
                className={'first-meeting-gif'}
                alt={'first meeting gif'}
            />
            <p className={'intro-page-text-3'}>We only talked for 5 minutes, but I just couldn't get you out of my mind</p>
            <Button onClick={() => {
                handleClick()
            }}>Continue</Button>
        </Fade>
    )
}

const IntroPageHalloweenPics = ({currentPage, setPage, numPages}) => {
    return (
        <Fade
            cascade
            triggerOnce
            duration={2000}
        >
            <p className={'halloween-pic-text'}>You messaged me on Halloween, asking to meet up and take some pictures...</p>
            <Image
                src={armAroundNaruto}
                alt={"arm around naruto"}
                className={'arm-around-naruto'}
            />
            <p>And so we did!</p>
            <Footer currentPage={currentPage} setPage={setPage} numPages={numPages}/>
        </Fade>
    )
}

const IntroPage = ({page, currentPage, setPage, numPages}) => {
    const [showHalloweenPics, setShowHalloweenPics] = useState(false);
    const handleClick = () => {
        setShowHalloweenPics(true);
    }
    return (
        <div id={page} className={'intro-page-content'}>
            {!showHalloweenPics && <IntroPageIntro handleClick={handleClick}/>}
            {showHalloweenPics && <IntroPageHalloweenPics currentPage={currentPage} setPage={setPage} numPages={numPages}/>}
        </div>
    )
}

export default IntroPage;