import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Footer.css"
function Footer() {
  return (
    <div className='footerContainer'>
      <div className='f-left'>&#169; 2023 UW3 mStream</div>
      <div className='f-right'>
        <Link to={`#`}>About</Link>&nbsp;|&nbsp;
        <Link to={`#`}>Github</Link>&nbsp;|&nbsp;
        <Link to={`#`}>Report</Link>&nbsp;|&nbsp;
        <Link to={`#`}>Slide</Link>
      </div>
    </div>
  )
}

export default Footer
