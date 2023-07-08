import React, { useContext } from 'react'
import { SongData } from '../data/SongData'
import UserTrackItem from '../items/UserTrackItem'
import PlayerContext from '../PlayerContext'

function UserPurchased() {
  const songContext = useContext(PlayerContext);
  return (
    <div className='userPurchasedContainer'>
      {SongData.map((song, index) => <UserTrackItem item={song} song={songContext} tracks={SongData} index={index}/>)}
    </div>
  )
}

export default UserPurchased
