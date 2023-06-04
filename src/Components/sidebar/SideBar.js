import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { closeMenu } from '../../utils/appNavSlice';
import { clearSearchResult } from '../../utils/searchResult';
import { subcribedChennal } from '../ConstantData/buttonList';

import { API,  searchResultAPi } from '../ConstantData/YoutubeVideoAPi'
import {  showSearchREsult } from '../../utils/searchResult'

const SideBar = () => {

  const dispatch = useDispatch()
  const isMenuOpen = useSelector((store)=>store.AppSlice.isMenuOpen)

  //  this is call early return pattern
  if(!isMenuOpen) return null ;

  const closeSideBar = ()=>{
     dispatch(closeMenu())
     dispatch(clearSearchResult())
  } 



  const getValue = async(e)=> {

      let index = e.target.getAttribute('data-index');
      let val = subcribedChennal[index]
  
      const searchOutput = await fetch(`${searchResultAPi}${val.chennal}${API}`)
      const result = await searchOutput.json()

      dispatch(showSearchREsult(result.items))
      dispatch(closeMenu())
    }


  return (
    <div className=' p-5 md:mx-3 md:z-0 md:relative z-40  absolute  shadow-lg w-30 bg-white  sm:w-48  '> 
        <ul className='p-2'>

          <Link to={"/"} onClick={closeSideBar} > <li className='p-2 cursor-pointer hover:bg-gray-100'>Home</li></Link>       
           <Link  to={"/shorts"} onClick={closeSideBar} > <li className='p-2  cursor-pointer hover:bg-gray-100'>Shorts</li> </Link>    
           <Link to={"/"} onClick={closeSideBar} > <li className='p-2 cursor-pointer hover:bg-gray-100'>Subscription</li></Link> 
            
        </ul>
      
        <hr />
        <h1 className='font-bold text-base mt-1'>Subscription</h1>
        <ul className='p-2'>
 
           { 
               subcribedChennal.map((item , i)=> (
                <li onClick={(e)=> {getValue(e)}} data-index={i} key={i} className='p-2'>{ item.chennal }</li>
               ))
           }


        </ul>
      
    </div>
  )
}

export default SideBar
