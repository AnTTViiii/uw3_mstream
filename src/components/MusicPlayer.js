import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/MusicPlayer.css'
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import { IconButton } from '@mui/material';
function MusicPlayer() {
    const [play, setPlay] = useState("false");
    const playPause = () => {
      setPlay(!play);
    };
    return (
      <div className='musicplayer onleft'>
          <div id='scroll-container' className='info'>
              <p id='scroll-text'><Link to={`#`}>TOP LINE</Link></p>
              <p id='scroll-text'>
                <span><Link to={`#`}>Strays Kid</Link></span>
                <span><Link to={`#`}>TigerJK</Link></span>
              </p>
          </div>
          <div className='playcontrol'>
              <IconButton className='playerIcon'>
                <SkipPreviousRoundedIcon />
              </IconButton>
              <IconButton onClick={playPause} className='playerIcon'>
                {play ? <PlayArrowRoundedIcon /> : <PauseRoundedIcon />}
              </IconButton>
              <IconButton className='playerIcon'>
                <SkipNextRoundedIcon />
              </IconButton>
          </div>
      </div>
    )
}

export default MusicPlayer
