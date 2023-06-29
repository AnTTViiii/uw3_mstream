import React from 'react'

const ForgotPassword = props => {
  return (
    <div className='forgotPwContainer'>
        <div className='forgotPwBody'>
            <span className='closeBtn' onClick={props.handleClose}>x</span>
            <h2 style={{fontStyle: `normal`}}>Reset Password</h2>
            <form method='POST'>
                <input type='email' placeholder='Enter email...' />
                <input id='fontEN' type='button' value={'Submit'} />
            </form>
        </div>
    </div>
  )
}

export default ForgotPassword
