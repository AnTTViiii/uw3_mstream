import React from 'react'
import ArtistItem from '../items/ArtistItem'
import { ArtistData } from '../data/ArtistData'
function AllArtists() {
  return (
    <div className='allArtistsContainer'>
      {ArtistData.map((item, key) => 
        <ArtistItem item={item} key={key} />
      )}
    </div>
  )
}

export default AllArtists
