import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { authActions } from "../stores/auth";

function Account() {
  const { isAuthed, account } = useSelector((state) => state.auth);
  return (
    <div className='accountPageContainer' style={{width: "80%", margin: 'auto', textAlign: 'center', position: 'relative'}}>
      {isAuthed ? (<div className='accHeader'>
        <div className='avatar'>
          <img src='https://res.cloudinary.com/dpwehcnso/image/upload/v1687111974/z3hbswytzdpwwxmfgllc.png' alt='avt' />
          <input type='file' />
        </div>
        <div className='accInfo'>
          <h1></h1>
        </div>
      </div>) : (
        <div style={{ fontSize: 'x-large', color: 'yellow', fontWeight: 'bold', marginTop: '10vh' }}>Members only. Login to use!</div>
      )}
    </div>
  )
}

export default Account
