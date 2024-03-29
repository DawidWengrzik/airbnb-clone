import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import placeService from './placeService';

const initialState = {
    places: [],
    chosenPlace: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const getPlaces = createAsyncThunk('places/getAll', async(_, thunkAPI) => {
    try {
        return await placeService.getPlaces()
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getSpecificPlace = createAsyncThunk('places/getPlace', async(placeId, thunkAPI) => {
  try {
      return await placeService.getSpecificPlace(placeId)
  } catch (error) {
      const message =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString()
      return thunkAPI.rejectWithValue(message)
  }
})

export const createPlace = createAsyncThunk('places/create', async (placeData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await placeService.createPlace(placeData, token)
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const deletePlace = createAsyncThunk('places/delete', async (placeId, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await placeService.deletePlace(placeId, token)
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const placeSlice = createSlice({
    name: 'places',
    initialState,
    // reducers
    reducers: {
        reset: (state) => initialState,
    },
    // actions
    extraReducers: (builder) => {
        builder
        .addCase(createPlace.pending, (state) => {
            state.isLoading = true
          })
          .addCase(createPlace.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.places.push(action.payload)
          })
          .addCase(createPlace.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
          })
          .addCase(getPlaces.pending, (state) => {
            state.isLoading = true
          })
          .addCase(getPlaces.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.places = action.payload
          })
          .addCase(getPlaces.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
          })
          .addCase(getSpecificPlace.pending, (state) => {
            state.isLoading = true
          })
          .addCase(getSpecificPlace.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.chosenPlace = action.payload
          })
          .addCase(getSpecificPlace.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
          })
          .addCase(deletePlace.pending, (state) => {
            state.isLoading = true
          })
          .addCase(deletePlace.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.places = state.places.filter(place => 
                place._id === action.payload.id
            )
          })
          .addCase(deletePlace.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
          })
    }  
})

export const { reset } = placeSlice.actions;
export default placeSlice.reducer;