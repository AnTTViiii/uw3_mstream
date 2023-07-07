import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Footer.css"
function Footer() {
  const thisYear = new Date().getFullYear();
  return (
    <div className='footerContainer'>
      <div className='f-left'>&#169; {thisYear === 2023 ? 2023 : '2023 - ' + thisYear} UW3 mStream</div>
      <div className='f-right'>
        <Link to={`#`}>About</Link>&nbsp;|&nbsp;
        <Link to={`https://github.com/AnTTViiii/uw3_mstream`}>Github</Link>&nbsp;|&nbsp;
        <Link to={`#`}>Report</Link>&nbsp;|&nbsp;
        <Link to={`#`}>Slide</Link>
      </div>
    </div>
  )
}

export default Footer
