import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { SongData } from '../data/SongData'
import "../styles/Song.css"
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import VerticalAlignBottomRoundedIcon from '@mui/icons-material/VerticalAlignBottomRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { IconButton } from '@mui/material';
import PlayerContext from '../PlayerContext';
function Song() {
    const location = useLocation();
    // let id = location.state.id;
    const path = location.pathname.split("/");
    let id = parseInt(path[2]);
    const song = [];
    SongData.map((item) => {
        if (item.songid === id)
            song.push(item);
    });
    const [fav, setFav] = useState(false);
    const [play, setPlay] = useState(false);
    const handlePlay = () => {
        setPlay(!play);
    }
    const handleFav = () => {
        setFav(!fav);
    }
    function dot3digits(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    const songContext = useContext(PlayerContext);
    const playSong = () => {
    songContext.setUsing(true);
    songContext.setTracks(song);
    songContext.setSongIndex(0);
    songContext.setSong(song[0]);
    songContext.setPlay(true);
    // song.setPlaylist(song[0]);
    localStorage.setItem("song", JSON.stringify(song[0]));
    localStorage.setItem("tracks", JSON.stringify(song));
    localStorage.setItem("playlist", JSON.stringify(song));
    localStorage.setItem("index", JSON.stringify(0));
    localStorage.setItem("play", JSON.stringify(true));
    localStorage.setItem("currentTime", 0);
    songContext.setCurrentTime(0);
    songContext.setPlaylist(song);
  };
    return (
        <div className='songContainer'>
            {song.map((item)=>
            <>
            <div className='trackHeader'>
                <img id="i" src={item.songImg} alt={item.songname} />
                <div className='trackDetails'>
                    <p>Song</p>
                    <h1>{item.songname}</h1>
                    <p>
                        {item.artist.map((a) => 
                            <span><Link to={`/artist/${a.artistid}`}>{a.artistname}</Link></span>
                        )}
                        &nbsp;• <Link to={`/album/${item.albumid}`}>{item.albumname}</Link>
                        &nbsp;• {new Date(item.releaseDate).getFullYear()}
                        &nbsp;• {dot3digits(item.streams)} streams</p>
                </div>
            </div>
            <div className='trackActions'>
                <IconButton className='playerIcon' onClick={playSong}>
                    {songContext.isUsing && play ? <PauseRoundedIcon className='trackActionIcon' /> : <PlayArrowRoundedIcon className='trackActionIcon' />}
                </IconButton>
                <IconButton className='purchases'>
                    <p id='fontVI'>0.0025</p>
                    <VerticalAlignBottomRoundedIcon fontSize='small' />
                </IconButton>
                <IconButton className='playerIcon' onClick={handleFav}>
                    {fav ? <FavoriteRoundedIcon className='favIcon trackActionIcon' /> : <FavoriteBorderRoundedIcon className='trackActionIcon'/>}
                </IconButton>
            </div>
            <pre className='lyrics'>
                {item.lyrics}
            </pre>
            </>
            )}
        
        </div>
    )
}

export default Song
