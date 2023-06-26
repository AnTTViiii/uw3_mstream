import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import VerticalAlignBottomRoundedIcon from '@mui/icons-material/VerticalAlignBottomRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { IconButton } from '@mui/material';
import "../styles/SongItem.css"
function SongItem({item}) {
    const [fav, setFav] = useState(false);
    const [play, setPlay] = useState(false);
    const handlePlay = () => {
        setPlay(!play);
    }
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
                <IconButton className='playerIcon' onClick={handlePlay}>
                    {play ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon />}
                </IconButton>
                <IconButton className='purchases'>
                    <p id='fontVI'>0.0025</p>
                    <VerticalAlignBottomRoundedIcon fontSize='small' />
                </IconButton>
                <IconButton className='playerIcon' onClick={handleFav}>
                    {fav ? <FavoriteRoundedIcon className='favIcon' /> : <FavoriteBorderRoundedIcon />}
                </IconButton>
            </div>
        </div>
    )
}

export default SongItem
