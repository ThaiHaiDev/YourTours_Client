import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        notiKey: false,
        notiTitle: '',
        notiDes: ''
    },
    reducers: {
        subscribeOnNotification(state, action) {
            state.notiKey = true;
            state.notiTitle = action.payload;
        },
        subscribeOffNotification(state) {
            state.notiKey = false;
        },
    },
});

export default notificationSlice;
