import { useEffect, useRef, useState } from 'react';

import format from 'date-fns/format';
import { DateRangePicker } from 'react-date-range';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import './DateDiscount.tsx.scss';

const DateDiscount = (props: any) => {
    // date state
    const [range, setRange] = useState<any>([
        {
            startDate: props.dateStart ? new Date(props.dateStart) : new Date(),
            endDate: props.dateEnd ? new Date(props.dateEnd) : new Date(),
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
        <div className="calendarWrap">
            <div className="info_date">
                <div className="output start">
                    <p style={{ fontWeight: 'bold', margin: '0', marginBottom: '5px' }}>Ngày bắt đầu khuyến mãi</p>
                    <input
                        value={`${format(range[0].startDate, 'MM/dd/yyyy')}`}
                        readOnly
                        className="inputBox"
                        onClick={() => setOpen((open) => !open)}
                    ></input>
                </div>

                <div className="output end">
                    <p style={{ fontWeight: 'bold', margin: '0', marginBottom: '5px' }}>Ngày kết thúc khuyến mãi</p>
                    <input
                        value={`${format(range[0].endDate, 'MM/dd/yyyy')}`}
                        readOnly
                        className="inputBox"
                        onClick={() => setOpen((open) => !open)}
                    />
                </div>
            </div>

            <div ref={refOne}>
                {open && (
                    <DateRangePicker
                        onChange={(item) => {
                            setRange([item.selection]);
                            if (props?.setDataDay) {
                                props.setDataDay([item.selection]);
                            }
                        }}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        ranges={range}
                        months={2}
                        direction={props.size}
                        className="calendarElement"
                    />
                )}
            </div>
        </div>
    );
};

export default DateDiscount;
