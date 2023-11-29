import React, { useEffect } from "react";
import useSound from "use-sound";

const MusicPlayer = ({currentPage}) => {
    const music = ["temp", "sounds/happy.mp3", "marriedLife.mp3"]
    const [play, exposedData] = useSound(music[currentPage]);
    useEffect(() => {
            console.log("change")
            play();
    }, currentPage);

    return;
}

export default MusicPlayer;