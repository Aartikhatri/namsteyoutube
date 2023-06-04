import { createSlice } from "@reduxjs/toolkit";

const searchResultSlice = createSlice({
    name: "searchResult",
    initialState: {
        result: []
    },
    reducers: {
        showSearchREsult: (state, action) => {
            // state = state.result.push action.payload
            state = Object.assign(state.result , action.payload)
        },

        clearSearchResult : (state , action)=> {
            state.result = [] 
        }
    }
})

export default searchResultSlice.reducer
export const { showSearchREsult , clearSearchResult } = searchResultSlice.actions
