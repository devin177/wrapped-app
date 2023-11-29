import React, { useState } from "react";
import ReactPlayer from 'react-player/youtube';
import './preconclusionpage.css';
import { Fade } from "react-awesome-reveal";
import RandomBS from 'public/images/randombullshit.jpg';
import { Button } from "@mui/material";
import Image from "next/image";
import Footer from "../footer/Footer";

const PreConclusionIntro = ({handleTap}) => {
    return (
        <div>
            <Fade
                cascade
                triggerOnce
                duration={2000}
                damping={1}
                className={'preconclusion-intro-content'}
            >
                <p className={'preconclusion-text preconclusion-text-1'}>We've gone far and wide, and have had so many wonderful experiences together this year.</p>
                <p className={'preconclusion-text'}>I couldn't capture everything on this page, so I tossed the rest of our happiest moments into this video.</p>
                <Image
                    src={RandomBS}
                    alt={"random bs"}
                    className={"random-bs-image"}
                />
                <Button onClick={() => {
                    handleTap();
                }}>Continue</Button>
            </Fade>
        </div>
    )
}

const PreConclusionVideo = ({currentPage, setPage, numPages}) => {
    return (
        <div className="video">
            <ReactPlayer loop url='https://youtube.com/shorts/tMFU4XDyE0A?si=x1Ri0bqHfdC7kd5S' width={350} height={600}/>
        </div>
    )
}

const PreConclusionPage = ({page, currentPage, setPage, numPages}) => {
    const [showVideo, setShowVideo] = useState(false);
    const handleTap = () => {
        setShowVideo(true);
    }

    return (
        <div className={'preconclusion-page-content'} id={page}>
            {/* <ReactPlayer width={300} height={400} className={'player'} url='https://youtube.com/shorts/RBr7L6FJQH4?si=xZybU2E305BfVLzD'/> */}
            {!showVideo && <PreConclusionIntro handleTap={handleTap}/>}
            {showVideo && <PreConclusionVideo currentPage={currentPage} setPage={setPage} numPages={numPages}/>}
        </div>
    )
}

export default PreConclusionPage;
