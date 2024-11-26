import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
});

export const addPost = createAsyncThunk('posts/addPost', async (newPost) => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
  return response.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.list.push(action.payload);
      });
  },
});

export default postsSlice.reducer;
