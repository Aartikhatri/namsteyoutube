
import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../../utils/appNavSlice';
import {  useSearchParams } from 'react-router-dom';

import { YOUTUBE_COMMENT } from '../ConstantData/CommentData'
import CommentList from './CommentList';
import LiveChat from './LiveChat';


const WatchPage = () => {




  //  I have use search  "/watch?v=" icon in routing so useParams not works there , we have to use useSearchParams this time ,
  //  useSearchParams return Array value like , useState | this useSearchParams has get method  returns the value of "key" that written after "?"  
  const [params] = useSearchParams()
  // console.log(params.get("v"));


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, )




  return (
    <div className='md:p-3 w-full '>

      <div className=' w-full block md:flex  '>
        <div>
          <iframe
            className='w-full h-[16rem] sm:h-[600px] sm:w-[1000px] '
           
            
            src={"https://www.youtube.com/embed/" + params.get("v")}
            title="Mero Radha Ramana - Aaradhakananda | Kirtan Sessions"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
          </iframe>
        </div>

        <div className='w-full '>
          <LiveChat />
        </div>
      </div>


      <div    className='w-full h-full sm:h-[500px] sm:w-[1000px] ' >
        <div className='font-bold  md:text-2xl '>Comments:  </div>
        {/* <ComentSection data={YOUTUBE_COMMENT[0]} /> */}
        <CommentList data={YOUTUBE_COMMENT} />
      </div>


    </div>
  )
}

export default WatchPage
