import React, {useState, useEffect} from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import './header.css';
import useSound from "use-sound";
import { IconButton } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import PauseIcon from '@mui/icons-material/Pause';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const Header = ({currentPage, setPage}) => {
    const numPages = 7;
    const musicList = [
        "/sounds/temp.mp3",
        "/sounds/superShy.mp3",
        "/sounds/marriedLife.mp3",
        "/sounds/talkSong.mp3",
        "/sounds/over85.mp3",
        "/sounds/seven.mp3",
        "/sounds/happy.mp3",
        ""
    ];
    let hookOptions = {};
    if (currentPage == numPages) {
        hookOptions.volume = 0.5;
    }
    const [play, exposedData] = useSound(musicList[currentPage], hookOptions);
    let isPlaying = false;
    const setIsPlaying = (value) => {
        isPlaying = value;
    }
    play();
    setIsPlaying(true);

    useEffect(() => {
        exposedData.stop();
        setIsPlaying(false);
      }, [currentPage]);

    return (
        <div>
            {currentPage > 1 && <Link
                activeClass="active"
                to={"page1"}
                spy={true}
                smooth={true}
                offset={0}
                onSetActive={() => setPage(1)}
                className='header'
            >
                <p>Scroll to Top</p>
            </Link>}
            <div className='music-player'>
                <IconButton onClick={() => {
                    if (!isPlaying) {
                        play();
                    }
                    setIsPlaying(true);
                }}>
                    <PlayArrow style={{ color: '#fff' }}/>
                </IconButton>
                <IconButton onClick={() => {
                    exposedData.pause();
                    setIsPlaying(false);
                }}>
                    <PauseIcon style={{ color: '#fff' }}/>
                </IconButton>
            </div>
        </div>
    )
}

export default Header;