import { createSlice } from '@reduxjs/toolkit';

const setupOwnerSlice = createSlice({
    name: 'owner',
    initialState: {
        detailRoom: {
            province: '',
            name: 'Test Room',
            description: '',
            wifi: '',
            passWifi: '',
            costPerNightDefault: 12345,
            numberOfGuests: 0,
            imagesOfHome: [],
            roomsOfHome: [],
            amenitiesOfHome: []
        },
    },
    reducers: {
        addProvinceIdRoom(state, action) {
            state.detailRoom.province = action.payload;
        },
        addNumberOfGuestsRoom(state, action) {
            state.detailRoom.numberOfGuests = action.payload;
        },
        addroomsOfHomeRoom(state, action) {
            state.detailRoom.roomsOfHome = action.payload;
        },
        addamenitiesOfHomeRoom(state, action) {
            state.detailRoom.amenitiesOfHome = action.payload;
        },
        addimagesOfHomeRoom(state, action) {
            state.detailRoom.imagesOfHome = action.payload;
        },
    },
});

export default setupOwnerSlice;
