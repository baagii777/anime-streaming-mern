// components/AnimeList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../search/Search';

const AnimeList = (query) => {
  const [animes, setAnimes] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch all animes or load initial data
    // ...
    const results = async() =>{
        try {
            const res = await axios.get(`/search?${query}`)
        } catch (error) {
            
        }
    }

    // For demonstration purposes, let's assume animes are loaded here
  }, []);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`/api/animes/search?q=${query}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      <h2>Search Results:</h2>
      <ul>
        {searchResults.map((anime) => (
          <li key={anime._id}>{anime.title}</li>
        ))}
      </ul>

      <h2>All Animes:</h2>
      <ul>
        {animes.map((anime) => (
          <li key={anime._id}>{anime.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnimeList;
