import { useEffect, useRef, useState } from 'react';
import { DateRangePicker } from 'react-date-range';

import format from 'date-fns/format';
import { addDays } from 'date-fns';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import './DateBooking.scss';

const DateBooking = (props: any) => {
    // date state
    const [range, setRange] = useState<any>([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 0),
            key: 'selection',
        },
    ]);

    // open close
    const [open, setOpen] = useState(false);

    // get the target element to toggle
    const refOne = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        // event listeners
        document.addEventListener('keydown', hideOnEscape, true);
        document.addEventListener('click', hideOnClickOutside, true);
    }, []);

    // console.log('start',format(range[0].startDate, 'MM/dd/yyyy'));
    // console.log('end',format(range[0].endDate, 'MM/dd/yyyy'));

    // hide dropdown on ESC press
    const hideOnEscape = (e: any) => {
        if (e.key === 'Escape') {
            setOpen(false);
        }
    };

    // Hide dropdown on outside click
    const hideOnClickOutside = (e: any) => {
        // console.log(refOne.current)
        // console.log(e.target)
        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false);
        }
    };

    return (
        <div className="date__booking">
            <div className="info-day">
                <div className='day'>
                    <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Ngày</p>
                    <p className="info_date">{`${format(range[0].startDate, 'MM/dd/yyyy')} -- ${format(
                        range[0].endDate,
                        'MM/dd/yyyy',
                    )}`}</p>
                </div>

                <p onClick={() => setOpen((open) => !open)} className="edit-date">
                    Chỉnh sửa
                </p>
            </div>
            <div ref={refOne}>
                {open && (
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
                )}
            </div>
        </div>
    );
};

export default DateBooking;
