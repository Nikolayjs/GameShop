import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../service/axios';

export const fetchCart = createAsyncThunk('user/fetchCart', async () => {
  const { data } = await axios.get('/user/cart');
  return data;
});

const initialState = {
  cart: {
    items: [],
    status: 'loading',
  },
};

const userGamesSlice = createSlice({
  name: 'userGames',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.pending, (state) => {
      state.cart.items = [];
      state.cart.status = 'loading';
    });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.cart.items = action.payload;
      state.cart.status = 'loaded';
    });
    builder.addCase(fetchCart.rejected, (state) => {
      state.cart.items = [];
      state.cart.status = 'error';
    });
  },
});

export const userGamesReducer = userGamesSlice.reducer;
