import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';

import 'react-calendar/dist/Calendar.css';
import './Test.scss';

export default function Test() {
    const [value, onChange] = useState(new Date());
    const mark = ['27-12-2022', '28-12-2022', '29-12-2022'];

    return (
        <div>
            <Calendar
                onChange={onChange}
                value={value}
                tileClassName={({ date, view }) => {
                    if (mark.find((x:any) => x === moment(date).format('DD-MM-YYYY'))) {
                        return 'highlight';
                    }
                    return ''
                }}
                // tileDisabled={({ date }) => date.getDay() === 0}
                minDate={
                    new Date()
                  }
            />
        </div>
    );
}
