import React from 'react';
import "./watch.scss";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Watch() {
  const location = useLocation();
  const anime = location.anime;

  return (<>
    <div className="container2">
      <div className="watch">
        <Link to="/">
          <div className="back">
            <ArrowBackOutlinedIcon />
          </div>
          <div className="title">
            {anime.title}
          </div>
        </Link>
        <div className="video-container">
          <video className='video' controls src={anime.video} />
        </div>
      </div>
      <div className="sidebar">

      </div>
    </div>
    </>
  );
}
