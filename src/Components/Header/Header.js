import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../../utils/appNavSlice'
import { Link } from 'react-router-dom'
import { API, YOUTUBE_SEARCH_API, searchResultAPi } from '../ConstantData/YoutubeVideoAPi'
import { addToCache } from '../../utils/SearchSlice'

import { clearSearchResult, showSearchREsult } from '../../utils/searchResult'

const Header = () => {

  const dispatch = useDispatch()
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false) //state for deciding whether the search aPI  box show or hide 

  // const searchCache = useSelector(store => store.search)


  useEffect(() => {

    //   defining debouncing for every 200ms , aPi will call after evry 200ms 
    const timer = setTimeout(() => {
      // if( searchCache[searchQuery]){
      //    setSuggestion(searchCache[searchQuery])
      // }else  
      getYoutubeSearchAPi()

    }, 200);

   
    return () => {  //clearing timeout function  for every unmount stage of component
      clearTimeout(timer)
    }

  }, [searchQuery]);

  const getYoutubeSearchAPi = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const response = await data.json();
    setSuggestion(response[1])

    dispatch(addToCache({
      [searchQuery]: [response[1]]
    }))
  }


  const handleMenuFunc = () => {
    dispatch(toggleMenu())
  }

  const clearSearchOutput = () => {
    dispatch(clearSearchResult())
  }

  const getValue = async (e) => {

    let index = e.target.getAttribute('data-index');
    let val = suggestion[index]

    const searchOutput = await fetch(`${searchResultAPi}${val}${API}`)
    const result = await searchOutput.json()

    dispatch(showSearchREsult(result.items))

    setShowSuggestions(false)

  }

  return (
    <div className='grid grid-flow-col m-3 p-3 shadow-lg justify-between'>
      <div className='flex col-span-1'>
        <img onClick={() => handleMenuFunc()} src="https://www.svgrepo.com/show/390485/burger-list-menu-navigation.svg" alt="menu" className='h-8 cursor-pointer' />

        <Link to={"/"} onClick={() => clearSearchOutput()} >
          <img src="https://static.vecteezy.com/system/resources/thumbnails/003/206/623/small/youtube-editorial-app-icon-free-vector.jpg" className='h-9 w-32 ml-4' alt="logo" />

        </Link>

      </div>

      <div className='col-span-10 '>
        <div className='flex '>
          <input type="text" className='border border-gray-300 rounded-l-full  ml-3 p-2 w-1/2 '
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            onFocus={() => setShowSuggestions(true)}
          // onBlur={()=> setShowSuggestions(false)}
          />
          <button className='border border-gray-300 rounded-r-full px-4 py-2 bg-gray-300'>Search</button>
          <img className='h-4 mt-3 ml-2' src="https://static.thenounproject.com/png/4779497-200.png" alt="voice" />

        </div>

        <div className='absolute mx-5   bg-white w-1/3 rounded-lg shadow-lg border border-gray-200'>
          <ul>
            {showSuggestions && suggestion.map((item, i) => (
              <li onClick={(e) => getValue(e)} key={item} className='px-5 py-2 shadow-sm hover:bg-gray-100 ' data-index={i}  > {item} </li>
            ))}

          </ul>
        </div>

      </div>



      <div className='col-span-1 '>
        <img className='h-8' src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg' alt="user" />
      </div>


    </div>
  )
}

export default Header
