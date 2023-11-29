'use client'

import React, {useState} from 'react';
import Stories from 'react-insta-stories';
import StartPage from './components/startPage/StartPage';
import IntroPage from './components/introPage/IntroPage';
import SharePage from './components/sharePage/SharePage';
import ComPage from './components/communicationPage/ComPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './globals.css'
import DistancePage from './components/distancePage/DistancePage';
import PreConclusionPage from './components/preConclusionPage/PreConclusionPage';
import MusicPlayer from './components/musicPlayer/MusicPlayer';

export default function Page() {
    const [currentPage, setPage] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);

    const numPages = 6;

    return (
        <div className={'page'}>
            <Header currentPage={currentPage} setPage={setPage} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
            <div>
                {<StartPage page={'page1'} currentPage={currentPage} setPage={setPage} numPages={numPages}/>}
                {<IntroPage page={'page2'} currentPage={currentPage} setPage={setPage} numPages={numPages}/>}
                {<ComPage page={'page3'} currentPage={currentPage} setPage={setPage} numPages={numPages}/>}
                {<DistancePage page={'page4'} currentPage={currentPage} setPage={setPage} numPages={numPages}/>}
                {<PreConclusionPage page={'page5'} currentPage={currentPage} setPage={setPage} numPages={numPages}/>}
                {<SharePage page={'page6'} currentPage={currentPage} setPage={setPage} numPages={numPages}/>}
            </div>
        </div>
    )
}