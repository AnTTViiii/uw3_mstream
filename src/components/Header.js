import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Account from './Account'
import '../styles/Header.css'
function Header() {
  const location = useLocation();
  const path = location.pathname.split("/");
  let page = path[1];
  const [header, setHeader] = useState("bg-scroll")
  const listenScrollEvent = (event) => {
    if (window.scrollY >= 20) {
      return setHeader("bg-scroll")
    } else if (window.scrollY < 20) {
      return setHeader("bg-notscroll")
    } 
  }
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);
  return (
    <div className={header + ' appHeader'}>
        <div className='webLogo'>
            <Link to={`/home`}>
                <img src='https://res.cloudinary.com/dpwehcnso/image/upload/v1686779415/h6dbhih7jpsrc1rwdsar.png' alt='UW3 mStream' />
                <p>UW3</p>
            </Link>
        </div>
        <Link className={page === "home" ? 'active' : ''} to={`/home`}>Featured</Link>
        <Link className={page === "newreleases" ? 'active' : ''} to={`/newreleases`}>New Releases</Link>
        <Link className={page === "artists" ? 'active' : ''} to={`/artists`}>Artists</Link>
        <div className='headerRight'>
          <div className='searchBar'>
            <input type='search' placeholder='Songs, Albums, Artists?' className='searchBox' />
          </div>
          <Account />
        </div>
    </div>
  )
}

export default Header
