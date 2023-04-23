import { createSlice } from "@reduxjs/toolkit";

const headerButtonSlice = createSlice({
  name: "pokemonSearch",
  initialState: {
    isBack: {
        status: false,
        label: "",
    },
  },
  reducers: {
    setIsBack: (state, action) => {
      state.isBack = action.payload;
    },
  },
});

export const { setIsBack } = headerButtonSlice.actions;

export default headerButtonSlice.reducer;