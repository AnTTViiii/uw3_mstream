import React, { useState, useContext } from 'react'
import { useSelector } from 'react-redux'
import { authActions } from "../stores/auth";
import "../styles/User.css";
import UserFavorite from './UserFavorite';
import UserPurchased from './UserPurchased';
import UserCollection from './UserCollection';
function Account() {
  const { isAuthed, account } = useSelector((state) => state.auth);
  const [tab, setTab] = useState(1);
  const toggleTab = (index) => {
    setTab(index);
  };
  const Page = (tab === 1) ? UserFavorite : (tab === 2 ? UserPurchased : UserCollection);
  return (
    isAuthed ? (
      <div className='accountPageContainer' style={{width: "80%", margin: 'auto', position: 'relative'}}>
        <div className='accHeader'>
          <div className='avatar'>
            <img src='https://res.cloudinary.com/dpwehcnso/image/upload/v1687111974/z3hbswytzdpwwxmfgllc.png' alt='avt' />
            <input type='file' title='Change Avatar' />
          </div>
          <div className='accInfo'>
            <h1>{JSON.parse(localStorage.getItem("user")).username}</h1>
            <p>Wallet Address: </p>
          </div>
        </div>
        <div className='accBody'>
          <div className='accountTabContainer'>
            <button className={tab === 1 ? "accountTab active" : "accountTab"} onClick={() => toggleTab(1)}>Favorite</button>
            <button className={tab === 2 ? "accountTab active" : "accountTab"} onClick={() => toggleTab(2)}>Purchased</button>
            <button className={tab === 3 ? "accountTab active" : "accountTab"} onClick={() => toggleTab(3)}>Your Collection</button>
          </div>
          <Page />
        </div>
      </div>
    ) : (
      <div className='accountPageContainer' style={{width: "80%", margin: 'auto', textAlign: 'center', position: 'relative'}}>
        <div style={{ fontSize: 'x-large', color: 'yellow', fontWeight: 'bold', marginTop: '10vh' }}>Members only. Login to use!</div>
      </div>
    )
    
  )
}

export default Account
