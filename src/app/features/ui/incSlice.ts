import { createSlice } from '@reduxjs/toolkit';

const incSlice = createSlice({
    name: 'increment',
    initialState: {
        inc: 0,
        incBy: 0,
    },
    reducers: {
        increment: (state) => {
            state.inc += 1;
        },
        decrement: (state) => {
            state.inc -= 1;
        },
        reset: (state) => {
            state.inc = 0;
        },
        incrementBy: (state, action) => {
            state.incBy += action.payload;
        },
        decrementBy: (state, action) => {
            state.incBy -= action.payload;
        },
        resetBy: (state) => {
            state.incBy = 0;
        },
    }
});

export const { increment, decrement, reset, incrementBy, decrementBy, resetBy } = incSlice.actions;
export default incSlice.reducer;