import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import MusicPlayer from "./MusicPlayer";
import Footer from "./Footer";
import Header from "./Header";
import "../styles/AppRoot.css";
function AppRoot() {
    return (
        <div className="container">
            <div className="header">
                <Header />
            </div>
            <div className="outlet">
                <Outlet />
            </div>
            <div className="footer">
                <Footer />
            </div>
            <MusicPlayer />
        </div>
    )
}

export default AppRoot;