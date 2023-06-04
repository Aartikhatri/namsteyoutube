import React from 'react'


const ComentSection = ({ comments }) => {
    

    const { name, text} = comments

    return (
       
            <div className='flex mt-1 p-2  bg-gray-100 ' >
                <div>
                    <img className='h-12 w-12 p-1 rounded-full' src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="imgages" />
                </div>

                <div>
                    <p className='font-bold md:text-lg mx-1' >{name} </p>
                    <p className=' mx-2' >{text} </p>
                </div>
                
            </div>
    )
}


export default ComentSection
