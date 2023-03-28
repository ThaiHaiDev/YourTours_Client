import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';

import 'react-calendar/dist/Calendar.css';
import './DateIsBooking.scss';

export default function DateIsBooking(props: any) {
    const [value, onChange] = useState(new Date());

    return (
        <div className="data-isbooking">
            <h1 style={{ marginBottom: '20px', marginTop: '20px' }}>Những ngày đã được đặt</h1>
            <Calendar
                onChange={onChange}
                value={value}
                tileClassName={({ date, view }) => {
                    if (props?.dateIsBooked?.find((x: any) => x === moment(date).format('DD-MM-YYYY'))) {
                        return 'highlight';
                    }
                    return '';
                }}
                // tileDisabled={({ date }) => date.getDay() === 0}
                minDate={new Date()}
            />
        </div>
    );
}
