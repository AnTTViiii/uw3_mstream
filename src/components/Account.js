import React, { useState, useRef } from 'react'
import Popup from  'reactjs-popup'
import { Link, useNavigate } from "react-router-dom";
import "reactjs-popup/dist/index.css";
import { LoginRounded, LogoutRounded, VpnKeyRounded, AccountCircleRounded, 
        VisibilityRounded, VisibilityOffRounded,
        Error } from "@mui/icons-material";
import { Button, IconButton, Alert } from "@mui/material";

function Account() {
    //userid temp
    let userid = 0;
    const logoutRef = useRef(), loginRef = useRef(), signupRef = useRef();

    const closeLogoutPopup = () => logoutRef.current.close();
    const openLogoutPopup = () => logoutRef.current.open();

    const closeLoginPopup = () => loginRef.current.close();
    const openLoginPopup = () => loginRef.current.open();

    const closeSignupPopup = () => signupRef.current.close();
    const openSignupPopup = () => signupRef.current.open();

    const navigate = useNavigate();

    const [pw, setPW] = useState(false);
    const handleClickShowPassword = () => {
        setPW(!pw);
    };

    const [error, setError] = useState(null);
    const [showAlert, setShowAlert] = useState(error !== null ? true : false);

    const setAlertError = (error) => {
        setError(error);
        setShowAlert(true);
    };
    
    const emailLoginRef = useRef(), pwLoginRef = useRef;

    const handleLogin = () => {
        const email = emailLoginRef.current.value;
        const password = pwLoginRef.current.value;
    
        if (!email || !password) {
          return setAlertError("Please fill out all field!");
        }
        //database query (temp)
        const check = (email, password) => {
          return 1;
        };
        if (!check(email, password)) {
          return setAlertError("The email address or password is incorrect.");
        }
        //sign in successfully
        setError(null);
        setShowAlert(false);
        console.log(email, password);
        closeLoginPopup();
        navigate("/home");
    }
    //Signup
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const handleSignup = () => {
        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const passwordConfirm = passwordConfirmRef.current.value;
    
        if (!username || !email || !password || !passwordConfirm) {
          return setAlertError("Please fill out all fields!");
        }
    
        if (password.length < 8 || password.length > 20) {
          return setAlertError("Password must be 8-20 chars!");
        }
        if (
          !password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/)
        ) {
          return setAlertError(
            "Password must be include at least 1 lowercase character, 1 uppercase character, 1 special character and 1 number."
          );
        }
        if (password !== passwordConfirm) {
          return setAlertError("The password confirmation does not match!");
        }
        // sign up successfully
        setError(null);
        setShowAlert(false);
        console.log(username, email, password, passwordConfirm);
        // closeSignupPopup();
        // openLoginPopup();
    };

    return (
        <div className='user' >
            { userid
                ? 
                <div >
                    <Popup contentStyle={{ zIndex: "10", width: "14%", minWidth: "max-content", padding: 0 }}
                            trigger={<img src='https://res.cloudinary.com/dpwehcnso/image/upload/v1687111974/z3hbswytzdpwwxmfgllc.png' alt='avt' title='Bii_liii' />}
                            position={"bottom right"}
                    >
                        <div className="accountItemPopup row1" onClick={(e) => {navigate("/user");}}>
                            <AccountCircleRounded
                                className='userIcon'
                                fontSize="small"
                                sx={{ color: "white", marginRight: 1 }}
                            />
                            <p>Profiles</p>
                        </div>
                        <div className="accountItemPopup row2" onClick={openLogoutPopup}>
                            <LogoutRounded
                                className='userIcon'
                                fontSize="small"
                                sx={{ color: "white", marginRight: 1 }}
                            />
                            <p>Logout</p>
                        </div>
                    </Popup>
                    <Popup  ref={logoutRef} modal 
                            contentStyle={{ zIndex: "11", borderRadius: "10px", padding: "25px 30px", width: "40%" }}>
                        <div>
                            <h2>Logout</h2>
                            <p style={{ margin: "10px 0" }}>Are you sure you want to Logout?</p>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", }}>
                                <Button variant="contained" color="inherit"
                                        sx={{ backgroundColor: 'white', color: '#2a2854', marginRight: "30px", ":hover": { backgroundColor: "whitesmoke", color: "#2a2854" }, }}
                                        onClick={closeLogoutPopup}>Cancel</Button>
                                <Button variant="contained"
                                        sx={{ backgroundColor: "#2a2854", ":hover": { backgroundColor: "#2a2835", }, }}
                                        onClick={(e) => { closeLogoutPopup(); navigate("/home"); userid = 0 }}>
                                            Confirm
                                </Button>
                            </div>
                        </div>
                    </Popup>
                </div>
                :
                <div >
                    <Popup contentStyle={{ zIndex: "10", width: "14%", minWidth: "max-content", padding: 0 }}
                            trigger={<img src='https://res.cloudinary.com/dpwehcnso/image/upload/v1687426572/t420uv99c8anfzjw6okq.png' alt='login' />}
                            position={"bottom right"}
                    >
                        <div className="accountItemPopup row1" onClick={openLoginPopup}>
                            <LoginRounded
                                className='userIcon'
                                fontSize="small"
                                sx={{ color: "white", marginRight: 1 }}
                            />
                            <p>Login</p>
                        </div>
                        <div className="accountItemPopup row2" onClick={openSignupPopup}>
                            <VpnKeyRounded
                                className='userIcon'
                                fontSize="small"
                                sx={{ color: "white", marginRight: 1 }}
                            />
                            <p>Signup</p>
                        </div>
                    </Popup>
                    <Popup  ref={loginRef} modal 
                            contentStyle={{ zIndex: "11", margin: "auto", borderRadius: "10px", padding: "20px", width: "40%", maxWidth: "350px" }}>
                        <div>
                            <div className='btnCloseForm' onClick={closeLoginPopup}>x</div>
                            <h2 align='center'>Login</h2>
                            <form className='loginForm' onSubmit={handleLogin}>
                                <p>Email:</p>
                                <p><input type="email" name="email" inputRef={emailLoginRef} /></p>
                                <p>Password:</p>
                                <p className='pwField'>
                                    <input type={pw ? "text" : "password"} name="userPassword" inputRef={pwLoginRef} />
                                    <IconButton onClick={handleClickShowPassword} className="showHideIcon">
                                        {pw ? <VisibilityRounded /> : <VisibilityOffRounded />}
                                    </IconButton>    
                                </p>
                                
                                <button className='btnSubmit' id='fontEN' name="submitLogin" onClick={(e) => { handleLogin(); userid = 1 }}>Submit</button>
                            </form>
                            <div style={{ textAlign: "center", fontStyle: "italic" }}>
                                <p>Don't have an account yet? <span style={{cursor: "pointer", color: "yellow", fontWeight: "bold"}} onClick={(e) => { closeLoginPopup(); openSignupPopup(); }}>Signup here!</span></p>
                            </div>
                        </div>
                    </Popup>
                    <Popup  ref={signupRef} modal 
                            contentStyle={{ zIndex: "11", borderRadius: "10px", padding: "25px 30px", width: "40%" }}>
                        <div>
                            <div className='btnCloseForm' onClick={closeSignupPopup}>x</div>
                            <h2>Signup</h2>
                            <form className='loginForm' onSubmit={handleLogin}>
                                <p>Username:</p>
                                <p><input name="username" type="text" inputRef={usernameRef} /></p>
                                <p>Email:</p>
                                <p><input type="email" name="email" inputRef={emailRef} /></p>
                                <p>Password:</p>
                                <p className='pwField'>
                                    <input type={pw ? "text" : "password"} name="userPassword" inputRef={passwordRef} />
                                    <IconButton onClick={handleClickShowPassword} className="showHideIcon">
                                        {pw ? <VisibilityRounded /> : <VisibilityOffRounded />}
                                    </IconButton>
                                </p>
                                <p>Password:</p>
                                <p className='pwField'>
                                    <input type={pw ? "text" : "password"} name="userConfirmPassword" inputRef={passwordConfirmRef} />
                                    <IconButton onClick={handleClickShowPassword} className="showHideIcon">
                                        {pw ? <VisibilityRounded /> : <VisibilityOffRounded />}
                                    </IconButton>
                                </p>
                                {showAlert && (<Alert
                                    icon={<Error fontSize="inherit" />}
                                    severity="warning"
                                    sx={{ margin: "20px 0" }} >
                                        {error}
                                </Alert>)}
                                <button className='btnSubmit' id='fontEN' 
                                        name="submitSignup" onClick={(e) => { handleSignup();  }}>Submit</button>
                            </form>
                            <div style={{ textAlign: "center", fontStyle: "italic" }} >
                                <p>Already have an account? <span style={{cursor: "pointer", color: "yellow", fontWeight: "bold"}} onClick={(e) => { closeSignupPopup(); openLoginPopup(); }}> Login!</span></p>
                            </div>
                        </div>
                    </Popup>
                </div>
            }
        </div>
    )
}

export default Account
