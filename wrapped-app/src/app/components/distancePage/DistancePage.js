import React, { useState } from "react";
import './distancePage.css';
import { Fade } from "react-awesome-reveal";

const DistancePageIntro = () => {
    return (
        <Fade>
            <p>When talking wasn't enough, we went to visit each other</p>
        </Fade>
    )
}

const DistancePage = ({page}) => {
    const [showStats, setShowStats] = useState(false);
    return (
        <div id={page} className={'distance-page-content'}>
            {!showStats && <DistancePageIntro/>}
        </div>
    )
}

export default DistancePage;