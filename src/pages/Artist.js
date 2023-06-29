import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SongData } from '../data/SongData'
import "../styles/Song.css"
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { IconButton } from '@mui/material';
import { AlbumData } from '../data/AlbumData';
import TrackItem from '../items/TrackItem';
import { ArtistData } from '../data/ArtistData';
import ArtistAlbumItem from '../items/ArtistAlbumItem';
import PlayerContext from '../PlayerContext';

function Artist() {
  const location = useLocation();
  const path = location.pathname.split("/");
  // let id = location.state.id;
  let id = parseInt(path[2]);
  const artist = [], albums = [], songs = [];
  let streams = 0;
  ArtistData.map((item) => {
    if (item.artistid === id)
      artist.push(item);
  })
  AlbumData.map((item) => {
    if (item.poster === id)
      albums.push(item);
  });
  SongData.map((item) => {
    item.artist.map((a) => {
      if (a.artistid === id) {
        songs.push(item);
        streams += item.streams;
      }
    })
  });
  const [fav, setFav] = useState(false);
  const [play, setPlay] = useState(false);
  const handlePlay = () => {
      setPlay(!play);
  }
  const handleFav = () => {
      setFav(!fav);
  }
  const song = useContext(PlayerContext);
  function dot3digits(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  return (
    <div className='artistContainer'>
      {artist.map((item)=>
      <>
      <div className='trackHeader' 
        // style={{background: `url(${item.avatar}) no-repeat`}}
      >
          <img id="i" src={item.avatar} alt={item.artistname} />
          <div className='trackDetails'>
              <p>Artist</p>
              <h1>{item.artistname}</h1>
              <p>
                {dot3digits(item.follower)} followers
                &nbsp;• {songs.length} songs
                &nbsp;• {albums.length} albums
              </p>
          </div>
      </div>
      <div className='trackActions'>
          <IconButton className='playerIcon' onClick={handlePlay}>
              {play ? <PauseRoundedIcon className='trackActionIcon' /> : <PlayArrowRoundedIcon className='trackActionIcon' />}
          </IconButton>
          <IconButton className='playerIcon' onClick={handleFav}>
              {fav ? <FavoriteRoundedIcon className='favIcon trackActionIcon' /> : <FavoriteBorderRoundedIcon className='trackActionIcon'/>}
          </IconButton>
      </div>
      <div className='trackList'>
        <h2>🎵 Featured Songs</h2>
        <div className='tl-header'>
          <p>#</p>
          <p>Title</p>
          <p>Streams</p>
          <p>Duration</p>
        </div>
        <div style={{overflow: `hidden`, overflowY: `scroll`, maxHeight: `513px`, margin: 0, padding: 0}}>
        {songs.map((item,key) => 
          <TrackItem item={item} index={key} tracks={songs} song={song} />
        )}</div>
      </div>
      <div className='artistAlbums'>
        <h2>💿 Featured Albums</h2>
        <div>{albums.map((item,key) => 
          <ArtistAlbumItem item={item} seq={key} />
        )}</div>
      </div>
      <div className='artistAlbums'>
        <h2>💿 Collab Albums</h2>
        <div>{albums.map((item,key) => 
          <ArtistAlbumItem item={item} seq={key} />
        )}</div>
      </div>
      </>
      )}
    </div>
  )
}

export default Artist
