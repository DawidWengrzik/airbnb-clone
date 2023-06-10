import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    places: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const placeSlice = createSlice({
    name: 'places',
    initialState,
    // reducers
    reducers: {
        reset: (state) => initialState,
    },
    // actions
    extraReducers: () => {

    }  
})

export const { reset } = placeSlice.actions;
export default placeSlice.reducer;