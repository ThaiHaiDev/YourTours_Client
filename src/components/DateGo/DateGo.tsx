import { useEffect, useRef, useState } from 'react';
import { DateRangePicker } from 'react-date-range';

import format from 'date-fns/format';
import { addDays } from 'date-fns';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import './DateGo.scss';

const DateRangePickerComp = (props:any) => {
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
    const hideOnEscape = (e:any) => {
        if (e.key === 'Escape') {
            setOpen(false);
        }
    };

    // Hide dropdown on outside click
    const hideOnClickOutside = (e : any) => {
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
                    <input
                        value={`${format(range[0].startDate, 'MM/dd/yyyy')}`}
                        readOnly
                        className="inputBox"
                        onClick={() => setOpen((open) => !open)}
                    ></input>
                </div>

                <div className="output end">
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
                            setRange([item.selection])
                            if (props?.setDataDay) {
                                props.setDataDay([item.selection])
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

export default DateRangePickerComp;
