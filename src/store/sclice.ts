import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {BlogState, InitialState} from "../types";
import {RootState} from "./index";


const initialState: InitialState = {
    blogs: [],
    categories: [],
}

export const appStateSlice = createSlice({
    name: "appState",
    initialState,
    reducers: {
        setBlogs: (state: InitialState, action: PayloadAction<any>) => {
            state.blogs = action.payload;
        }
    }
});
export const {setBlogs} =
    appStateSlice.actions;

export const blogs = (state: RootState) => state.appState.blogs;
export default appStateSlice.reducer;