import React from "react";
import './startPage.css';
import {Fade} from "react-awesome-reveal";

const StartPage = ({page}) => {
    return(
        <div id={page} className={'start-page-content'}>
            <Fade
                cascade
                triggerOnce
                up
                duration="4000"
                smooth
                fraction="1"
                damping="0.5"
                className={'start-page-text'}
            >
                <p className={'start-page-text-1'}>Welcome to our Relationship Wrapped Year 1, Regina</p>
                <p>This year has gone by so quickly, and we've made so many memories.</p>
                <p>Let's take a moment to revisit some our favorite!</p>
            </Fade>
        </div>
    )
}

export default StartPage;