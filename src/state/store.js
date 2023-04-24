import { configureStore } from '@reduxjs/toolkit';
import  UserReducer from '../state/reducer/UseReducer';

export const store= configureStore({
  reducer: {
    users: UserReducer, 
  }
})
