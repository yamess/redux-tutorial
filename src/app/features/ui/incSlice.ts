import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface CounterState {
    incValue: number;
    incByValue: number;
}
const initialState: CounterState = {
    incValue: 0,
    incByValue: 0,
}

const incSlice = createSlice({
    name: 'increment',
    initialState,
    reducers: {
        increment: (state) => {
            state.incValue += 1;
        },
        decrement: (state) => {
            state.incValue -= 1;
        },
        reset: (state) => {
            state.incValue = 0;
        },
        incrementBy: (state, action: PayloadAction<number>) => {
            state.incByValue += action.payload;
        },
        decrementBy: (state, action: PayloadAction<number>) => {
            state.incByValue -= action.payload;
        },
        resetBy: (state) => {
            state.incByValue = 0;
        },
    }
});

export const { increment, decrement, reset, incrementBy, decrementBy, resetBy } = incSlice.actions;
export default incSlice.reducer;