import React from 'react'
import { Link } from 'react-router-dom'

const Shorts = () => {
  return (
    <>

     <div className=' text-center  flex flex-col mx-auto justify-center max-w-screen-lg  '>
       <h1 className='md:text-3xl font-bold'> No Shorts video are available now </h1>
       <h2 className='text-gray-400' >Please try again later</h2>
       <Link  to={"/"} > <button className='bg-gradient-to-r from-red-500 to-pink-300 px-5 py-2 font-bold   m-2 ' > Back  </button>   </Link>
        
      </div>
    
    </>
   
  )
}

export default Shorts
