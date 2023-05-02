import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { axiosClassic } from '../../service/axios';

export const fetchGames = createAsyncThunk('games/fetchGames', async () => {
  const { data } = await axiosClassic.get('/games');
  return data;
});

export const fetchGamesWithSearch = createAsyncThunk(
  'games/fetchGamesWithSearch',
  async (searchTerm) => {
    const { data } = await axiosClassic.get('/search', {
      params: searchTerm ? { searchTerm } : {},
    });
    return data;
  }
);

export const fetchCategories = createAsyncThunk('/games/fetchCategories', async () => {
  const { data } = await axios.get('/categories');
  return data;
});

export const fetchRemoveGame = createAsyncThunk('/games/fetchRemoveGame', async (id) => {
  axios.delete(`/games/${id}`);
});

const initialState = {
  games: {
    items: [],
    status: 'loading',
  },
  search: {
    items: [],
    status: 'loading',
  },
  categories: {
    items: [],
    status: 'loading',
  },
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGames.pending, (state) => {
      state.games.items = [];
      state.games.status = 'loading';
    });
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.games.items = action.payload;
      state.games.status = 'loaded';
    });
    builder.addCase(fetchGames.rejected, (state) => {
      state.games.items = [];
      state.games.status = 'error';
    });
    builder.addCase(fetchGamesWithSearch.pending, (state) => {
      state.search.items = [];
      state.search.status = 'loading';
    });
    builder.addCase(fetchGamesWithSearch.fulfilled, (state, action) => {
      state.search.items = action.payload;
      state.search.status = 'loaded';
    });
    builder.addCase(fetchGamesWithSearch.rejected, (state) => {
      state.search.items = [];
      state.search.status = 'error';
    });
    builder.addCase(fetchCategories.pending, (state) => {
      state.categories.items = [];
      state.categories.status = 'loading';
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories.items = action.payload;
      state.categories.status = 'loaded';
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.categories.items = [];
      state.categories.status = 'error';
    });
    builder.addCase(fetchRemoveGame.rejected, (state, action) => {
      state.games.items = state.games.items.filter((obj) => obj._id !== action.meta.arg);
    });
  },
});

export const gamesReducer = gamesSlice.reducer;
