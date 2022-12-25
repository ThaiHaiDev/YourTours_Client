import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';

import format from 'date-fns/format';
import { addDays } from 'date-fns';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import './DateRangeDetail.scss';

const DateRangeDetail = (props:any) => {
    // date state
    const [range, setRange] = useState<any>([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 0),
            key: 'selection',
        },
    ]);

    // const resultDay = parseInt(format(range[0].endDate, 'dd')) - parseInt(format(range[0].startDate, 'dd')) + 1
    const resultDay = 1
    // console.log('start',format(range[0].startDate, 'MM/dd/yyyy'));
    // console.log('end',format(range[0].endDate, 'MM/dd/yyyy'));

    return (
        <div className="DateRangeDetail">
            <h1>{`${resultDay} đêm tại Yourtours`}</h1>
            <p className='info_date'>{`${format(range[0].startDate, 'MM/dd/yyyy')} -- ${format(range[0].endDate, 'MM/dd/yyyy')}`}</p>
            <div>
                    <DateRangePicker
                        onChange={(item) => setRange([item.selection])}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={range}
                        months={2}
                        direction={props.size}
                        className="calendarElement"
                        showDateDisplay={false}
                    />
            </div>
        </div>
    );
};

export default DateRangeDetail;
