import React from 'react'

function NotFound() {
    const div = {
        width: "80%",
        margin: "auto",
        textAlign: "center",
        position: "relative",
        height: "100vh",
    }
    const div2 = {
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -40%)",
    }
    const div3 = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
    const h1 = {
        fontSize: '100px',
        margin: '0',
        padding: '0',
    }
  return (
    <div style={div}>
      <div style={div2}>
        <div style={div3}>
            <h1 style={h1}>4</h1>
            <img src={require('../images/fnf.png')} alt='404' width={'80px'} height={'80px'}/>
            <h1 style={h1}>4</h1>
        </div>
        <h3>Oops!!</h3>
        <h4>Sorry, the page not found.</h4>
        <p id='fontEN'>Back to <b><a href='/home'>Home</a></b></p>
      </div>
    </div>
  )
}

export default NotFound
