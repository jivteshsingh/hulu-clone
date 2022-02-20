import React from 'react';
import "./header.css";
import HomeIcon from '@mui/icons-material/Home';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function Header(){
  return (
    <div className="header">
     <div className = "icons" >

     <div className="icon icon--active" >
     <HomeIcon />
     <p>Home</p>
     </div>
     <div className="icon">
     <FlashOnIcon />
     <p>Trending</p>
     </div>
     <div className="icon">
     <LiveTvIcon />
     <p>Verified</p>
     </div>
     <div className="icon">
     <VideoLibraryIcon />
     <p>Collections</p>
     </div>
     <div className="icon">
     <SearchIcon />
     <p>Search</p>
     </div>
     <div className="icon">
     <PersonOutlineIcon />
     <p>Account</p>
     </div>

     </div>
     <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" />
    </div>
  );
}

export default Header;
