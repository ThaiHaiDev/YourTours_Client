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
                number: 2,
            },
        ],
        checkBooking: false,
        priceDay: ''
    },
    reducers: {
        addInfoBooking(state, action) {
            state.dateStart = action.payload.dateStart;
            state.dateEnd = action.payload.dateEnd;
            state.homeId = action.payload.homeId;
            state.priceDay = action.payload.priceDay;
            state.checkBooking = true;
        },
        addPriceDay(state, action) {
            state.priceDay = action.payload.priceDay;
        },
        addDay(state, action) {
            state.dateStart = action.payload.dateFrom;
            state.dateEnd = action.payload.dateTo;
        }
    },
});

export default bookingSlice;
