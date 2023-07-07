import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { SongData } from '../data/SongData'
import "../styles/Song.css"
import { PlayArrowRounded, PauseRounded } from '@mui/icons-material';
import { FavoriteBorderRounded, FavoriteRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { AlbumData } from '../data/AlbumData';
import TrackItem from '../items/TrackItem';
import PlayerContext from '../PlayerContext';

function Album() {
  const location = useLocation();
  const path = location.pathname.split("/");
  let id = parseInt(path[2]);
  const album = [], songs = [];
  let streams = 0;
  AlbumData.map((item) => {
    if (item.albumid === id)
      album.push(item);
  });
  SongData.map((item) => {
    if (item.albumid === id) {
      songs.push(item);
      streams += item.streams;
    }
  });
  const { isAuthed } = useSelector((state) => state.auth);
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
  const playAlbum = () => {
    song.setUsing(true);
    song.setTracks(songs);
    song.setSongIndex(0);
    song.setSong(songs[0]);
    song.setPlay(true);
    // song.setPlaylist(song[0]);
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
      <div className='albumContainer'>
          {album.map((item)=>
          <>
          <div className='trackHeader'>
              <img id="i" src={item.albumimg} alt={item.albumname} />
              <div className='trackDetails'>
                  <p>{ (songs.length) > 1 ? 'Album' : 'Single' }</p>
                  <h1>{item.albumname}</h1>
                  <p>
                      <Link to={`/artist/${item.poster}`}>{item.owner}</Link>
                      &nbsp;• <span title={new Date(item.releaseDate).toUTCString()}>{new Date(item.releaseDate).getFullYear()}</span>
                      &nbsp;• {songs.length} songs
                      &nbsp;• {dot3digits(streams)} streams</p>
              </div>
          </div>
          <div className='trackActions'>
              <IconButton className='playerIcon' onClick={playAlbum}>
                  {song.isUsing && play ? <PauseRounded className='trackActionIcon' /> : <PlayArrowRounded className='trackActionIcon' />}
              </IconButton>
              <IconButton className='playerIcon' onClick={handleFav}>
                  {isAuthed ? (fav ? <FavoriteRounded className='favIcon trackActionIcon' /> : <FavoriteBorderRounded className='trackActionIcon'/>) : <FavoriteBorderRounded className='trackActionIcon'/>}
              </IconButton>
          </div>
          <div className='trackList'>
            <div className='tl-header'>
              <p>#</p>
              <p>Title</p>
              <p>Streams</p>
              <p>Duration</p>
            </div>
            {songs.map((item,key) => 
              <TrackItem item={item} index={key} tracks={songs} song={song} />
            )}
          </div>
          </>
          )}
      
      </div>
  )
}

export default Album
