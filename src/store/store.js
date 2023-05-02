import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';
import { gamesReducer } from './slices/games';
import { userGamesReducer } from './slices/userGames';

const store = configureStore({
  reducer: {
    auth: authReducer,
    games: gamesReducer,
    userGames: userGamesReducer,
  },
});

export default store;
