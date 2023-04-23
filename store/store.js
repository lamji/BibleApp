import { configureStore } from "@reduxjs/toolkit";
import  headerButtonSlice  from '../reducer/header'

const store = configureStore({
  reducer: {
    headerButton: headerButtonSlice,
  },
});

export default store;