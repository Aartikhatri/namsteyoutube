import React from 'react'


const VideoCart = ({videoInfo }) => {
    // console.log(videoInfo);

    if(!videoInfo) return null 

    const {  snippet }  = videoInfo ;
    const { channelTitle , title , thumbnails } = snippet ;
   
    return (
    <div className='p-2 my-3 shadow-lg  lg:w-96 mx-0 md:mx-2  cursor-pointer'>
   
     <img className='rounded-lg ' src={thumbnails.high.url} alt='videoImg' />
        <ul>
            <li className='font-bold py-2' >{title}</li>
            <li>{channelTitle}</li>
            {/* <li>{statistics.viewCount} views</li> */}
        </ul> 
         
    </div>
   
  )
}

export default VideoCart
