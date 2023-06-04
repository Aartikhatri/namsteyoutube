import React, { useState } from 'react'
import { useEffect } from 'react'
import { youTubeVideoAPi } from '../ConstantData/YoutubeVideoAPi'
import { Link } from 'react-router-dom';
import VideoCart from './VideoCart';
import { useSelector } from 'react-redux';



const VideoLibrary = () => {
  const [videos, setVIdeos] = useState([]);


  const searchOutput = useSelector(store => store.searchResult)

  useEffect(() => {
    getVideoAPi()
  
  }, [])

  const getVideoAPi = async () => {
    const data = await fetch(youTubeVideoAPi);
    const resp = await data.json()
    setVIdeos(resp.items)
    
  }

  return (
    <div className='flex flex-wrap'>
     

      {

        searchOutput !== null &&  searchOutput.result.map((video) => (<Link to={"/watch?v=" + video?.id?.videoId} key={video?.id?.videoId}> <VideoCart videoInfo={video} />  </Link>)) }

        {
                   
          videos.map((video) => (<Link to={"/watch?v=" + video.id} key={video.id}> <VideoCart videoInfo={video} />  </Link>))

         }


    </div>
  )
}

export default VideoLibrary
