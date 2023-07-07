import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { IconButton } from '@mui/material';
import "../styles/TrackItem.css"

function TrackItem({item, song, index, tracks}) {
    const { isAuthed } = useSelector((state) => state.auth); //user
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
    function dot3digits(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return (
        <div className='trackItemContainer'>
            <div className='first-col'>
                <p style={!(song.isUsing && song.play && JSON.parse(localStorage.getItem("song")).songid === item.songid) ? {display: `flex`} : {display: `none`}}>{index+1}</p>
                <IconButton className='playIcon' onClick={() => {
                        if (song.isUsing !== true) { song.setUsing(true); }
                        song.setPlay(true);
                        song.setSong(item);
                        song.setTracks(tracks);
                        song.setPlaylist(tracks);
                        song.setSongIndex(index);
                        localStorage.setItem("song", JSON.stringify(item));
                        localStorage.setItem("tracks", JSON.stringify(tracks));
                        localStorage.setItem("playlist", JSON.stringify(tracks));
                        localStorage.setItem("index", JSON.stringify(index));
                        localStorage.setItem("play", JSON.stringify(true));
                        localStorage.setItem("currentTime", 0);
                        song.setCurrentTime(0);
                    }} style={(song.isUsing && song.play && JSON.parse(localStorage.getItem("song")).songid === item.songid) ? {display: `flex`} : {display: `none`}}>
                    {(song.isUsing && song.play && JSON.parse(localStorage.getItem("song")).songid === item.songid) ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon style={{display: `flex`, zIndex:2}} />}
                </IconButton>
            </div>
            <div className='trackItemTitle'>
                <img src={item.songImg} alt={item.songname} />
                <p title={item.songname}><Link to={`/song/${item.songid}`} state={{id: item.songid}}>{item.songname}</Link></p>
            </div>
            <p className='trackStreams'>{dot3digits(item.streams)}</p>
            <p className='last-col'>
                <IconButton onClick={handleFav} className='favsIcon'>
                    {isAuthed ? (
                        fav ? <FavoriteRoundedIcon className='favIcon' /> : <FavoriteBorderRoundedIcon />
                    ) : ( <FavoriteBorderRoundedIcon /> )}
                </IconButton>
                <p id='duration'>{getStringDuration(item.duration)}</p>
            </p>
        </div>
    )
}

export default TrackItem
