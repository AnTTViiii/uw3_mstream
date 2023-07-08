import React, { useContext } from 'react'
import { SongData } from '../data/SongData'
import { AlbumData } from '../data/AlbumData'
import { ArtistData } from '../data/ArtistData'
import UserTrackItem from '../items/UserTrackItem'
import ArtistAlbumItem from '../items/ArtistAlbumItem'
import ArtistItem from '../items/ArtistItem'
import PlayerContext from '../PlayerContext'
function UserFavorite() {
  const songContext = useContext(PlayerContext);
  return (
    <div>
        <div className='favPlaylist'>
            <h3>❤️ Favorite Songs</h3>
            <div className='playlist'>
              {SongData.map((song, index) => <UserTrackItem item={song} song={songContext} tracks={SongData} index={index}/>)}
            </div>
        </div>
        <div className='favAlbumContainer'>
            <h3>❤️ Favorite Albums</h3>
            <div className='favAlbumBody'>
              {AlbumData.map((album) => <ArtistAlbumItem item={album} />)}
            </div>
        </div>
        <div className='following'>
            <h3>⭐ Following Artists</h3>
            <div className='followingArtists'>
              {ArtistData.map((artist) => <ArtistItem item={artist} />)}
            </div>
        </div>
    </div>
  )
}

export default UserFavorite
