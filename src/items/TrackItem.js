import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import VerticalAlignBottomRoundedIcon from '@mui/icons-material/VerticalAlignBottomRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { IconButton, duration } from '@mui/material';
import "../styles/TrackItem.css"

function TrackItem({item, seq}) {
    const [fav, setFav] = useState(false);
    const [play, setPlay] = useState(false);
    const handlePlay = () => {
        setPlay(!play);
    }
    const handleFav = () => {
        setFav(!fav);
    }
    function getStringDuration(duration) {
        let minutes = Math.floor(duration / 60);
        let seconds = Math.round(duration - (minutes * 60));
        if (seconds < 10) {seconds = "0"+seconds;}
        let time = "" + minutes + ":" + seconds;
        return time
    };

    return (
        <div className='trackItemContainer'>
            <div className='first-col'>
                <p style={!play ? {display: `flex`} : {display: `none`}}>{seq+1}</p>
                <IconButton className='playIcon' onClick={handlePlay} style={play ? {display: `flex`} : {display: `none`}}>
                    {play ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon style={{display: `flex`, zIndex:2}} />}
                </IconButton>
            </div>
            <div className='trackItemTitle'>
                <img src={item.songImg} alt={item.songname} />
                <p title={item.songname}><Link to={`/song/${item.songid}`} state={{id: item.songid}}>{item.songname}</Link></p>
            </div>
            <p className='trackStreams'>{item.streams}</p>
            <p className='last-col'>
                <IconButton onClick={handleFav} className='favsIcon'>
                    {fav ? <FavoriteRoundedIcon className='favIcon' /> : <FavoriteBorderRoundedIcon />}
                </IconButton>
                <p id='duration'>{getStringDuration(item.duration)}</p>
            </p>
        </div>
    )
}

export default TrackItem
