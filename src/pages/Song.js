import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SongData } from '../data/SongData'
import "../styles/Song.css"
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import VerticalAlignBottomRoundedIcon from '@mui/icons-material/VerticalAlignBottomRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { IconButton } from '@mui/material';
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
                            <span><Link to={`/artist/${a.artistname}`} state={{id: a.artistid}}>{a.artistname}</Link></span>
                        )}
                        &nbsp;• <Link to={`/album/${item.albumname}`} state={{id: item.albumid}}>{item.albumname}</Link>
                        &nbsp;• {new Date(item.releaseDate).getFullYear()}
                        &nbsp;• {item.streams} streams</p>
                </div>
            </div>
            <div className='trackActions'>
                <IconButton className='playerIcon' onClick={handlePlay}>
                    {play ? <PauseRoundedIcon className='trackActionIcon' /> : <PlayArrowRoundedIcon className='trackActionIcon' />}
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
