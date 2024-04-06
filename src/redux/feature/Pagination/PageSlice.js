import { createSlice } from "@reduxjs/toolkit";
import { Mockdata } from "../../../Mentormockdata/Mentormockdata";

const initialState = {
    data: Mockdata.data,
    currentPage: Mockdata.page.current,
    lastPage: Mockdata.page.total,
    nextpage: Mockdata.page.next,
    previouspage: Mockdata.page.previous,
    itemsPerPage: 2,

}

const pageslice = createSlice({
    name: "page",
    initialState,
    reducers: {
        previouspage: (state, action) => {
            if (state.currentPage > 1) {
                state.currentPage -=1
            }
        },
        nextpage: (state, action) => {

            if (state.currentPage < state.lastPage) {
                state.currentPage += 1;
            }
        }
    }
});

export const { previouspage, nextpage } = pageslice.actions;
export default pageslice.reducer;