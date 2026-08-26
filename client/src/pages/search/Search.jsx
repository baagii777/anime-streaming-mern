import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios'
import ListItem from '../../components/listItem/ListItem'

export const Search = () => {

    const [videos, setVideos] = useState([])
    const query = useLocation().search

    useEffect(()=>{
        const fetchVideos = async ()=>{
            try{
                const res = await axios.get(`/animes/search${query}`,{
                    headers: {
                        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
                    },
                })
                setVideos(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchVideos()
    },[query])
  return (<div className='container'>
    {videos.map((item, i) => (
            <ListItem key={i} index={i} item={item} /> 
          ))}
  </div>)
}
