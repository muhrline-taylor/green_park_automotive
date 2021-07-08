import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: "home",
    status: 'idle',
};

export const routeSlice = createSlice({
    name: 'route',
    initialState,
    reducers: {
        saveRoute: (state, action) => {
            console.log("into saveRoute");
            console.log(action.payload);
            state.value = action.payload;
        }
    },
    extraReducers: (builder) => {
        
    }
});

export const { saveRoute } = routeSlice.actions;

export const selectRoute = (state) => state.route.value;

export default routeSlice.reducer;