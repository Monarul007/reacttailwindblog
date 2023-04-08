import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  entities: [],
  loading: false,
}

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (thunkAPI) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    (data) => data.json()
  )
  return res
})


export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.loading = true
    },
    [fetchPosts.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.entities = payload
    },
    [fetchPosts.rejected]: (state) => {
      state.loading = false
    },
  },
})

export default postSlice.reducer;