import { useEffect, useRef, useState } from 'react';

import format from 'date-fns/format';
import { DateRangePicker } from 'react-date-range';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import './DateForStatistic.scss';

const DateForStatistic = (props: any) => {
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
        <div className="calendar-statistic">
            <div className="info_date">
                <div className="output start" style={{ display: 'flex', alignItems: 'center' }}>
                    <p
                        style={{
                            fontWeight: 'bold',
                            margin: '0',
                            marginBottom: '5px',
                            fontSize: '13px',
                            paddingTop: '4px',
                        }}
                    >
                        Từ ngày
                    </p>
                    <input
                        value={`${format(range[0].startDate, 'MM/dd/yyyy')}`}
                        readOnly
                        className="inputBox"
                        onClick={() => setOpen((open) => !open)}
                    ></input>
                </div>

                <div className="output end" style={{ display: 'flex', alignItems: 'center' }}>
                    <p
                        style={{
                            fontWeight: 'bold',
                            margin: '0',
                            marginBottom: '5px',
                            fontSize: '13px',
                            paddingTop: '4px',
                            paddingRight: '8px',
                        }}
                    >
                        Đến ngày
                    </p>
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

export default DateForStatistic;
