import React, { useEffect, useState } from 'react'
import ChatMsg from './ChatMsg'
import { useDispatch, useSelector } from 'react-redux'
import { addToChat } from '../../utils/chatSlice'
import { generateName } from '../ConstantData/nameGeneratorHelper'
import { makeMsgGenrator } from '../ConstantData/msgGenerator'

const LiveChat = () => {
  const [ liveMsg , setLiveMsg ] = useState('') 

  const dispatch = useDispatch();
  const Cmsg = useSelector((store) => store.chat.message)

  useEffect(() => {

    const timer = setInterval(() => {
      //  APi polling inside this

      dispatch(addToChat({
        name: generateName(),
        msgs: makeMsgGenrator(20)
      }))

    }, 2000);

    return () => {
      clearTimeout(timer)
    }

  }, )

  return (
    <>
      <div className=' rounded-md w-full h-[270px] mt-3 md:mt-0 md:h-[540px] border border-gray-400 p-2 bg-gray-200 md:mx-2 overflow-y-scroll  flex flex-col-reverse'>
        <h1 className='font-extrabold' >Live Chat</h1>

        {Cmsg.map((data, i) => (

          <ChatMsg key={i} title={data.name} msg={data.msgs} />

        ))}

      </div>

      <form className='border border-gray-400 md:m-2 w-full ' onSubmit={(e)=>{
        e.preventDefault();
        console.log(liveMsg);
        dispatch(addToChat({
          name : "your Name" ,
          msgs : liveMsg
        }))
        setLiveMsg("")
      } } >
         <input type="text"
           className='border border-gray-400 p-2 m-2 w-3/4 rounded-md'
           onChange={(e)=> setLiveMsg(e.target.value) }
           value={liveMsg}
         />

         <button className=' px-2 py-1 md:px-5 md:py-2 m-2 bg-gradient-to-r from-sky-400 to-blue-300  '>send</button>
      </form>

    </>
  )
}

export default LiveChat
