import {configureStore} from '@reduxjs/toolkit';
import themeSlice from './reducers/themeReducer';

const store = configureStore({
  reducer: {
    themeSlice: themeSlice,
  },
});

export default store