import React from 'react'

const ChatMsg = ({title , msg}) => {
  return (
    <div className='flex shadow-sm p-2'>
        
                <img className='h-5  md:h-8 rounded-xl ' src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg' alt="user" />
                <span className='font-bold px-1  md:px-2 '>{title}</span>
                <span>{msg}</span>
    </div>
  )
}

export default ChatMsg
