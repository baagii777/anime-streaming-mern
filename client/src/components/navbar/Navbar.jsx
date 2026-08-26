import React, { useState } from 'react'
// import Logo from "../navbar/vector/default-monochrome-white.svg"
import "../navbar/navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
import { useContext } from 'react';

const Navbar = () => {
  const navigate = useHistory()
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [q, setQ] = useState("");
  const { dispatch } = useContext(AuthContext);

  window.onscroll = () =>{
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return ()=>(window.scroll = null)
  }

  const handleSearchClick = () => {
    setIsSearchActive(true);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <Link to="/" className="link">
            {/* <img src={Logo} alt="" /> */}
          </Link>
          <Link to="/" className="link">
            <span className='navbarmainLinks'>Нүүр хуудас</span>
          </Link>
          <Link to="/animes" className="link">
            <span className='navbarmainLinks'>Анимэ</span>
          </Link>
          <Link to="/movies" className="link">
            <span className='navbarmainLinks'>Бүрэн хэмжээний</span>
          </Link>
        </div>
        
        <div className="right">
          {isSearchActive ? (
            <div className='search-container'>
              <input type="text" placeholder="Хайх..." className="search-input" onChange={e=>setQ(e.target.value)}/>
              <div className='search-icon'><SearchIcon onClick={()=>navigate.push(`/search?q=${q}`)}/></div>
            </div>
          ) : (
            <SearchIcon className="icon" onClick={handleSearchClick} />
          )}
          <span>My List</span>
          <NotificationsIcon className='icon'/>
          <div className="profile">
            <img src="https://www.animeclick.it/immagini/personaggio/Ganta_Nakami/cover/128820-Ganta_Nakami-foto.jpg" alt=""/>
            <div className="options">
              <span>Setting</span>
              <span onClick={() => dispatch(logout())}>Logout</span>
            </div>  
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
