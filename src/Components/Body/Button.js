import React from 'react'
import { btList } from '../ConstantData/buttonList'
import { API,  searchResultAPi } from '../ConstantData/YoutubeVideoAPi'

import { useDispatch} from 'react-redux'
import {  showSearchREsult } from '../../utils/searchResult'



const Button = () => {

    const dispatch = useDispatch()

    const getValue = async(e)=> {

        let index = e.target.getAttribute('data-index');
        let val = btList[index]
        console.log(val.name);
    
        const searchOutput = await fetch(`${searchResultAPi}${val.name}${API}`)
        const result = await searchOutput.json()
  
        dispatch(showSearchREsult(result.items))
   
      }


    return (
        <div className=' md:flex md:flex-wrap'>

            {btList.map((item , i) => (
               <button onClick={(e)=> getValue(e)} className='bg-gray-300 px-3 py-1 rounded-md mt-2  mx-2 ' key={i} data-index={i}  > {item.name} </button>
            )) }

           
        </div>
    )
}

export default Button
