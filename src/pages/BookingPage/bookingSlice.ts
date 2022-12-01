import { createSlice } from '@reduxjs/toolkit';

import moment from 'moment';

const bookingSlice = createSlice({
    name: 'booking',
    initialState: {
        dateStart: moment().format('YYYY-MM-DD'),
        dateEnd: moment().format('YYYY-MM-DD'),
        paymentMethod: 'PAY_IN_FULL',
        homeId: '',
        status: 'WAITING',
        guests: [
            {
                guestCategory: 'ADULTS',
                number: 1,
            },
        ],
        checkBooking: false,
        priceDay: '',
        titleGuests: '',
        priceTotal: ''
    },
    reducers: {
        addInfoBooking(state, action) {
            state.dateStart = action.payload.dateStart;
            state.dateEnd = action.payload.dateEnd;
            state.homeId = action.payload.homeId;
            state.priceDay = action.payload.priceDay;
            if (action.payload.guests.length !== 0) {
                state.guests = action.payload.guests;
            }
            state.checkBooking = true;
            state.titleGuests = action.payload.titleGuests;
            state.priceTotal = action.payload.priceTotal;
        },
        addPriceDay(state, action) {
            state.priceDay = action.payload.priceDay;
        },
        addDay(state, action) {
            state.dateStart = action.payload.dateFrom;
            state.dateEnd = action.payload.dateTo;
        }, 
        addPriceTotal(state, action) {
            state.priceTotal = action.payload.priceTotal;
        }
    },
});

export default bookingSlice;
