import { createSlice } from "@reduxjs/toolkit";


export interface themeState {
    value: string
}

const initialState: themeState = {
    value: "light"
}


export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggle: state => {
            state.value = state.value == "light" ? "dark" : "light"
        }
    }
})

export const { toggle } = themeSlice.actions;
export default themeSlice.reducer