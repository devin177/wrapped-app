import React, { useState } from "react";
import './conclusionpage.css';
import { Fade } from "react-awesome-reveal";
import Footer from "../footer/Footer";

const ConclusionIntro = ({handleTap}) => {
    return (
        <div>
            <Fade
                cascade
                triggerOnce
                duration={2000}
                damping={1}
                className={'conclusion-intro-content'}
            >
                <p className={'conclusion-text conclusion-text-1'}>That's it for this year's Relationship Wrapped.</p>
                <p className={'conclusion-text'}>We've gone far and wide, and have had so many wonderful experiences together this year.</p>
                <p className={'conclusion-text'}>I love you Regina, and can't wait for all the new adventures we'll have next year.</p>
            </Fade>
        </div>
    )
}

const ConclusionPage = ({page, currentPage, setPage, numPages}) => {

    return (
        <div className={'conclusion-page-content'} id={page}>
            <ConclusionIntro/>
            <Footer currentPage={currentPage} setPage={setPage} numPages={numPages}/>
        </div>
    )
}

export default ConclusionPage;
