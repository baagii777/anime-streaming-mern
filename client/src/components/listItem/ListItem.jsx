import React, { useEffect, useState } from 'react';
import "./listItem.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [anime, setAnime] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAnime = async () => {
      try {
        const res = await axios.get(`/animes/find/${item}`, {
          headers: {
            token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
          },
        });
        setAnime(res.data);
        console.log("Fetch successful")
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    getAnime();
  }, [item]);

  // console.log(anime)
  return (

      <Link to={{ pathname: '/watch', anime: anime }}>
      <div
        className="listItem"
        style={{ left: isHovered ? index * 295 - 50 + index * 2.5 : 0 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isLoading ? (
        <p style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#555',
          textAlign: 'center',
          padding: '10px',
          margin: '0',
          background: '#eee',
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}>Loading...</p>
        ) : (
        anime && (
          <>
            <img src={anime.imgSm} alt="" />
            {isHovered && (
              <>
                <video src={anime.trailer} autoPlay={true} loop muted/>
                <div className="itemInfo">
                  <div className="icons">
                    <PlayArrowIcon className="icon" />
                    <AddIcon className="icon" />
                    <FavoriteIcon className="icon" />
                    <KeyboardArrowDownIcon className="icon right" />
                  </div>
                  <div className="itemInfoTop">
                    <span>{anime.duration}</span>
                    <span className="limit">+{anime.limit}</span>
                    <span>{anime.year}</span>
                  </div>
                  <h3 className='title'>{anime.title}</h3>
                  <div className="desc">{anime.desc}</div>
                  <div className="genre">{anime.genre}</div>
                </div>
              </>
            )
            }
          </>
        )
        )}
      </div>
    </Link>
    )
};

export default ListItem;
