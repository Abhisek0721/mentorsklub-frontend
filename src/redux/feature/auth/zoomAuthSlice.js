import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  zoomAuth: false,
};

const zoomAuthSlice = createSlice({
  name: "zoomAuth",
  initialState,
  reducers: {
    setZoomAuth: (state, action) => {
      state.zoomAuth = action.payload;
    },
  },
});

export const { setZoomAuth } = zoomAuthSlice.actions;
export default zoomAuthSlice.reducer;
