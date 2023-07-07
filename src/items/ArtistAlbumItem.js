import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { IconButton } from '@mui/material';
import PlayerContext from '../PlayerContext';
import { SongData } from '../data/SongData';

function ArtistAlbumItem({item}) {
    const { isAuthed } = useSelector((state) => state.auth);
    const [fav, setFav] = useState(false);
    // const [play, setPlay] = useState(false);
    const handleFav = () => {
        setFav(!fav);
    }
    const song = useContext(PlayerContext);
    const songs = [];
    SongData.map((s) => {
        if (s.albumid === item.albumid) {
          songs.push(s);
        }
    });
    const playAlbum = () => {
        song.setUsing(true);
        song.setTracks(songs);
        song.setSongIndex(0);
        song.setSong(songs[0]);
        song.setPlay(true);
        localStorage.setItem("song", JSON.stringify(songs[0]));
        localStorage.setItem("tracks", JSON.stringify(songs));
        localStorage.setItem("playlist", JSON.stringify(songs));
        localStorage.setItem("index", JSON.stringify(0));
        localStorage.setItem("play", JSON.stringify(true));
        localStorage.setItem("currentTime", 0);
        song.setCurrentTime(0);
        song.setPlaylist(songs);
    };
    return (
        <div className='aAlbumItemContainer'>
            <img src={item.albumimg} alt={item.albumname} />
            <p title={item.albumname}><Link to={`/album/${item.albumid}`} state={{id: item.albumid}}>{item.albumname}</Link></p>
            <p>{new Date(item.releaseDate).getFullYear()}</p>
            <div className='lastRow'>
                <IconButton className='playerIcon' onClick={playAlbum}>
                {(song.isUsing && song.play && JSON.parse(localStorage.getItem("song")).albumid === item.albumid) ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon />}
                </IconButton>
                <div>
                    <IconButton className='playerIcon' onClick={handleFav}>
                    {isAuthed ? (fav ? <FavoriteRoundedIcon className='favIcon'/> : <FavoriteBorderRoundedIcon />) : (<FavoriteBorderRoundedIcon />)}
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default ArtistAlbumItem
