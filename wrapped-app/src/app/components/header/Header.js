import React, {useState, useEffect} from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import './header.css';
import useSound from "use-sound";
import { IconButton } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import PauseIcon from '@mui/icons-material/Pause';

const Header = ({currentPage, setPage, isPlaying, setIsPlaying}) => {
    const musicList = ["/sounds/temp.mp3", "/sounds/happy.mp3", "/sounds/marriedLife.mp3", "/sounds/talkSong.mp3"];
    const [play, exposedData] = useSound(musicList[currentPage]);
    play();

    useEffect(() => {
        exposedData.stop();
      }, [currentPage]);

    return (currentPage > 1 &&
        <div>
            <Link
                activeClass="active"
                to={"page1"}
                spy={true}
                smooth={true}
                offset={0}
                onSetActive={() => setPage(1)}
                className='header'
            >
                <p>Scroll to Top</p>
            </Link>
            <div className='music-player'>
                <IconButton color={'white'} onClick={() => {
                    if (!isPlaying) {
                        play();
                    } else {
                        exposedData.stop();
                        play();
                    }
                    setIsPlaying(true);
                }}>
                    <PlayArrow/>
                </IconButton>
                <IconButton color={'white'} onClick={() => {
                    exposedData.pause();
                    setIsPlaying(false);
                }}>
                    <PauseIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Header;