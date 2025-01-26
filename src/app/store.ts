import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/app/features/ui/incSlice';

export const store = configureStore({
    reducer: {
        countReducer: counterReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;