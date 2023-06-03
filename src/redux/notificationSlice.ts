import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        notiKey: false,
        notiTitle: '',
        notiDes: ''
    },
    reducers: {
        subscribeOnNotification(state) {
            state.notiKey = true;
        },
        subscribeOffNotification(state) {
            state.notiKey = false;
        },
    },
});

export default notificationSlice;
