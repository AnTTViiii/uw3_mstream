import React from 'react'
import { Link } from 'react-router-dom'
function SideBar() {
  return (
    <div className='sidebar'>
        <div className='webLogo'>
            <Link to={`/home`}>
                <img src='https://res.cloudinary.com/dpwehcnso/image/upload/v1686779415/h6dbhih7jpsrc1rwdsar.png' width={`60px`} alt='UW3 mStream' />
                Home
            </Link>
        </div>
    </div>
  )
}

export default SideBar
