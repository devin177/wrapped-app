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
                duration="5000"
                smooth
                fraction="1"
                damping="0.5"
            >
                <p className={'start-page-text-1'}>Year 1 Wrapped</p>
                <p>This year went by quick!</p>
                <p className={'start-page-text-3'}>Let's look back and revisit Year 1 of Devin and Regina</p>
            </Fade>
        </div>
    )
}

export default StartPage;