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
import PlayerContext from '../PlayerContext';

function Album() {
  const location = useLocation();
  // let id = location.state.id;
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
//   useEffect(() => {
//     const audio = document.getElementById('myAudio');
//     let time = [];
//     document.querySelectorAll("#myAudio").forEach(element=> element.onloadedmetadata = function() {
//         let duration = element.duration;

//         let minutes = Math.floor(duration / 60);
//         let seconds = Math.round(duration - (minutes * 60));
//         if (minutes < 10) {minutes = "0"+minutes;}
//         if (seconds < 10) {seconds = "0"+seconds;}
//         let string = "" + minutes + ":" + seconds
//         time.push(string);
//     });
//     console.log(JSON.stringify(time[0]));
//     const duration = document.querySelectorAll("#duration");
// });

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
                      <Link to={`/artist/${item.owner}`} state={{id: item.poster}}>{item.owner}</Link>
                      &nbsp;• <span title={new Date(item.releaseDate).toUTCString()}>{new Date(item.releaseDate).getFullYear()}</span>
                      &nbsp;• {songs.length} songs
                      &nbsp;• {dot3digits(streams)} streams</p>
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
