import { configureStore } from '@reduxjs/toolkit';

import userSlice from '../pages/AuthPage/userSlice';
import bookingSlice from '../pages/BookingPage/bookingSlice';
import setupOwnerSlice from '../pages/SetupOwner/setupOwnerSlice';
import authMessSlice from './authMess';
import globalSlice from './globalSlice';
import notificationSlice from './notificationSlice';

const store = configureStore({
    reducer: {
        authMess: authMessSlice.reducer,
        notification: notificationSlice.reducer,
        user: userSlice.reducer,
        settingowner: setupOwnerSlice.reducer,
        booking: bookingSlice.reducer,
        global: globalSlice.reducer
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>