import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { IconButton } from '@mui/material';
function ArtistItem({item}) {
  const [follow, setFollow] = useState(false);
  const handleFollow = () => {
      setFollow(!follow);
  }
  function dot3digits(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  return (
    <div className='artistItemContainer'>
      <img src={item.avatar} alt={item.artistname} />
      <div>
        <p><Link to={`/artist/${item.artistid}`} state={{ id: item.artistid }}>{item.artistname}</Link></p>
        <div className='artistFollower'>
            <p>{dot3digits(item.follower)}</p>
            <IconButton className='followIcon' onClick={handleFollow}>
                {follow ? <StarRoundedIcon /> : <StarBorderRoundedIcon />}
            </IconButton>
        </div>
      </div>
    </div>
  )
}

export default ArtistItem
