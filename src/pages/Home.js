import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import "../styles/Home.css";
import { SongData } from '../data/SongData';
import { AlbumData } from '../data/AlbumData';
import SongItem from '../items/SongItem';
import AlbumItem from '../items/AlbumItem';
import PlayerContext from '../PlayerContext';
function Home() {
  const song = useContext(PlayerContext);
  return (
    <div className='homeContainer'>
        <div className='homeBody'>
            <div className='songs'>
                <h2>Featured Songs</h2>
                <div className='songsList'>
                  {SongData.map((item, key) => 
                    <SongItem item={item} index={key} tracks={SongData} song={song} />
                  )}
                </div>
            </div>
            <div className='albums'>
              <h2 style={{marginTop: `35px`}}>Featured Albums</h2>
              <div className='songsList'>
                  {AlbumData.map((item, key) => 
                    <AlbumItem item={item} key={key} />
                  )}
                </div>
            </div>
            <div className='recommendForYou'>
              <h2 style={{marginTop: `35px`}}>For you</h2>
            </div>
            <div className='recentlyAlbums'>
              <h2 style={{marginTop: `35px`}}>Recently Streamed</h2>
            </div>
        </div>
    </div>
  )
}

export default Home
