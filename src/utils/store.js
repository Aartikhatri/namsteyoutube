import { configureStore } from '@reduxjs/toolkit'
import appNavSlice from './appNavSlice';
import SearchSlice from './SearchSlice';
import chatSlice from './chatSlice';
import searchResult from './searchResult';

const store = configureStore({
   reducer : {
    AppSlice : appNavSlice ,
    search : SearchSlice ,
    chat : chatSlice,
    searchResult : searchResult
   }
});

export default store ;

