import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        notiKey: false,
        notiTitle: '',
        notiDes: '',
        numberOfNotification: -1
    },
    reducers: {
        subscribeOnNotification(state, action) {
            state.notiKey = true;
            state.notiTitle = action.payload;
        },
        subscribeOffNotification(state) {
            state.notiKey = false;
        },
        subscribeNumberOfNotification(state, action) {
            state.numberOfNotification = action.payload;
        },
    },
});

export default notificationSlice;
