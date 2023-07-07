import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import VerticalAlignBottomRoundedIcon from '@mui/icons-material/VerticalAlignBottomRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { IconButton } from '@mui/material';
import "../styles/SongItem.css"

function SongItem({item, song, index, tracks}) {
    const { isAuthed } = useSelector((state) => state.auth); //user
    const [fav, setFav] = useState(false);
    // = useState(isAuthed ? item.isFavorite : 0);
    // const [play, setPlay] = useState(false);
    // const handlePlay = () => {
    //     setPlay(!play);
    // }
    const handleFav = () => {
        setFav(!fav);
    }
    return (
        <div className='songItemContainer'>
            <img src={item.songImg} alt={item.songname} />
            <p title={item.songname}>
                <Link to={`/song/${item.songid}`} state={{id: item.songid}}>{item.songname}</Link>
            </p>
            <p className='trackArtists'>{item.artist.map((a, key) => 
                <span><Link to={`/artist/${a.artistid}`} state={{id: a.artistid}}>{a.artistname}</Link></span>
            )}</p>
            <div className='lastRow'>
                <IconButton className='playerIcon' 
                    onClick={() => {
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
                    }}>
                    {(song.isUsing && song.play && JSON.parse(localStorage.getItem("song")).songid === item.songid) ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon />}
                </IconButton>
                <IconButton className='purchases'>
                    <p id='fontVI'>0.0025</p>
                    <VerticalAlignBottomRoundedIcon fontSize='small' />
                </IconButton>
                <IconButton className='playerIcon' onClick={handleFav}>
                    {isAuthed ? (
                        fav ? <FavoriteRoundedIcon className='favIcon' /> : <FavoriteBorderRoundedIcon />
                    ) : ( <FavoriteBorderRoundedIcon /> )}
                </IconButton>
            </div>
        </div>
    )
}

export default SongItem
