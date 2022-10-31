import { createSlice } from '@reduxjs/toolkit';

const setupOwnerSlice = createSlice({
    name: 'owner',
    initialState: {
        detailRoom: {
            province: ''
        },
    },
    reducers: {
        addDetailRoom(state, action) {
            state.detailRoom.province = action.payload;
            console.log(state.detailRoom)
        },
    },
});

export default setupOwnerSlice;
