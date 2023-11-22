'use client'

import React, {useState} from 'react';
import Stories from 'react-insta-stories';
import StartPage from './components/startPage/StartPage';
import SharePage from './components/sharePage/SharePage';
import ComPage from './components/communicationPage/ComPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './globals.css'

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
                <StartPage />
                <ComPage/>
                <SharePage/>
            </div>
            <Footer
                currentPage={currentPage}
                setPage={setPage}
                numPages={3}
            />
        </div>
    )
}