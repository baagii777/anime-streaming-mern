import React, { useEffect, useState } from 'react';
import "./featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import axios from 'axios';

const Featured = ({ type, setGenre }) => {
  const [content, setContent] = useState({});
  const [anime, setAnime] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/animes/random?type=${type}`, {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          }
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };

    getRandomContent();
  }, [type]);

    useEffect(() => {
    const getRandomAnime = async () => {
      try {
        const res = await axios.get(`/animes/random?type=${type}`, {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          }
        });
        setAnime(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };

    getRandomAnime();
  }, [type]);

  return (
    <div className='featured'>
      {type && (
        <div className="category">
          <span>{type === "animes" ? "animes" : "movies"}</span>
          <select name="genre" id="genre" onChange={(e) => setGenre(e.target.value)}>
            <option></option>
            <option value="fantasy">Уран зөгнөлт</option>
            <option value="horror">Аймшгийн</option>
            <option value="romance">Романтик</option>
            <option value="comedy">Инээдмийн</option>
            <option value="isekai">Өөр ертөнцөд өрнөдөг</option>
            <option value="documentary">Баримтат</option>
          </select>
        </div>
      )}
      <img src={content?.img || anime?.img} alt="" />
      <div className="info" style={{ color: 'black' }}>
        <img className="imgTitle" src={content?.imgTitle} alt="" />
        <span className='desc'>{content?.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span onClick={content?.video}>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
