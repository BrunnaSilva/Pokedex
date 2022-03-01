import {configureStore} from '@reduxjs/toolkit';
import themeSlice from './reducers/themeReducer';

const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

export default store