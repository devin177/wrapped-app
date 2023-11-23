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

export default function Page() {
    const [currentPage, setPage] = useState(1);
    return (
        // <Stories
        //     stories={[
        //         {
        //             content: (props) => (
        //                 <SharePage/>
        //             )
        //         },
        //         'https://example.com/image.jpg',
        //     ]}
        // />
        <div className={'page'}>
            <Header currentPage={currentPage} setPage={setPage}/>
            <div>
                <StartPage page={'page1'}/>
                <IntroPage page={'page2'}/>
                <ComPage page={'page3'}/>
                <DistancePage page={'page4'}/>
                <SharePage page={'page5'}/>
            </div>
            <Footer
                currentPage={currentPage}
                setPage={setPage}
                numPages={5}
            />
        </div>
    )
}