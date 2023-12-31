import React from 'react';
import Image from 'next/image';
import Paper from '@mui/material/Paper'
import bashImage from 'public/images/bash.jpeg';
import heartImage from 'public/images/heart.png';
import './sharePage.css';
import Footer from '../footer/Footer';
import { Fade } from 'react-awesome-reveal';

const SharePage = ({page, currentPage, setPage, numPages}) => {
    return(
        <div id={page} className={'share-page-content'}>
            <Paper
                className={"share-page-paper"}
                square
                elevation={24}
            >
                <Image 
                    className={'share-page-image'}
                    src={bashImage}
                    alt="bash picture"
                />
            </Paper>
            <span className={'share-page-text-content'}>
                <span className={'share-page-left'}>
                    <p className="share-page-text-header">
                        Top Activities
                    </p>
                    <span className={'share-page-left-text'}>
                        <p className="text">111 Arams</p>
                        <p className="text">51W 60L</p>
                    </span>

                    <p className="share-page-text-header">
                        Travel
                    </p>
                    <span className={'share-page-left-text'}>
                        <p className="text">1188.6 Miles</p>
                    </span>

                    <p className="share-page-text-header">
                        Time On Call
                    </p>
                    <span className={'share-page-left-text'}>
                        <p className="text">Facetime 45H 35M 29S</p>
                        <p className="text">Discord 101H 31M</p>
                    </span>
                </span>
                <span className={'share-page-right'}>
                    <p className="share-page-text-header">
                        Communication
                    </p>
                    <span className={'share-page-right-text'}>
                        <p className="text">42,553 Texts</p>
                        <p className="text">8,792 Instagram DM's</p>
                        <p className="text">520 Discord Messages</p>
                    </span>
                    <p className="share-page-text-header">
                        Days Together
                    </p>
                    <span className={'share-page-right-text'}>
                        <p className="text">365</p>
                    </span>
                </span>
            </span>
            <div className="share-page-footer">
                <Image
                    className={'heart-footer-image'}
                    src={heartImage}
                    alt="heart image"
                    width='30'
                    height='30'
                />
                <p>devin-regina-wrapped-2023</p>
            </div>
            <Fade
                triggerOnce
                duration={2000}
                damping={0.75}
            >
                <Footer text={'Next Page...?'} currentPage={currentPage} setPage={setPage} numPages={numPages}/>
            </Fade>
        </div>
    )
}
export default SharePage;