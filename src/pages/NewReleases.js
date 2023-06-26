import React from 'react'
import { Link } from 'react-router-dom';

import "../styles/Home.css";
import { SongData } from '../data/SongData';
import { AlbumData } from '../data/AlbumData';
import SongItem from '../items/SongItem';
import AlbumItem from '../items/AlbumItem';
function NewReleases() {
  return (
    <div className='homeContainer'>
        <div className='homeBody'>
            <div className='songs'>
                <h2>New Releases Songs</h2>
                <div className='songsList'>
                  {SongData.map((item, key) => 
                    <SongItem item={item} key={key} />
                  )}
                </div>
            </div>
            <div className='albums'>
              <h2 style={{marginTop: `35px`}}>New Releases Albums</h2>
              <div className='songsList'>
                  {AlbumData.map((item, key) => 
                    <AlbumItem item={item} key={key} />
                  )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewReleases
