
import React from 'react'
import ComentSection from './ComentSection'

const CommentList = ({ data }) => {
    // console.log(data);
    return (
        <div>
            {data.map((comment, i) => (
                <div key={i}> 
                    
                    <ComentSection  comments={comment} />
      

                    <div className='border border-l-black px-3 md:px-7 '>
                      { comment.replies &&  <CommentList  data={comment.replies} />}
                    </div>

                    <hr className='border-5 ' />
                </div>

            ))}

        </div>
    )
}

export default CommentList
