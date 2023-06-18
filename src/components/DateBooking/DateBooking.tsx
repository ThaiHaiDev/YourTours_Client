import { useEffect, useRef, useState } from 'react';
import { DateRangePicker } from 'react-date-range';

import format from 'date-fns/format';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import './DateBooking.scss';
import pricesOfHomeApi from '../../services/pricesOfHomeApi';
import { useDispatch } from 'react-redux';
import bookingSlice from '../../pages/BookingPage/bookingSlice';
import { t } from 'i18next';

const DateBooking = (props: any) => {
    const [range, setRange] = useState<any>([
        {
            startDate: new Date(props.dateStart),
            endDate: new Date(props.dateEnd),
            key: 'selection',
        },
    ]);

    const [open, setOpen] = useState(false);
    const refOne = useRef<HTMLInputElement | null>(null);

    const dispatch = useDispatch();

    useEffect(() => {
        document.addEventListener('keydown', hideOnEscape, true);
        document.addEventListener('click', hideOnClickOutside, true);
    }, []);

    // console.log('start',format(range[0].startDate, 'MM/dd/yyyy'));
    // console.log('end',format(range[0].endDate, 'MM/dd/yyyy'));

    const hideOnEscape = (e: any) => {
        if (e.key === 'Escape') {
            setOpen(false);
        }
    };

    const hideOnClickOutside = (e: any) => {
        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false);
        }
    };

    const handleChangeDayBooking = async (value: any) => {
        const dateFrom = format(value[0].startDate, 'yyyy-MM-dd');
        const dateTo = format(value[0].endDate, 'yyyy-MM-dd');
        dispatch(bookingSlice.actions.addDay({ dateFrom, dateTo }));
        pricesOfHomeApi.showPriceByRangeDay(props?.idHome, dateFrom, dateTo).then((dataResponse) => {
            if (props.handleChangePriceDay) {
                props.handleChangePriceDay(dataResponse?.data?.totalCost);
                dispatch(
                    bookingSlice.actions.addPriceTotal({ priceTotal: dataResponse?.data?.totalCostWithSurcharge }),
                );
            }
        });
    };

    return (
        <div className="date__booking">
            <div className="info-day">
                <div className="day">
                    <p style={{ fontWeight: 'bold', marginTop: '10px' }}>{t('title.bookingOfYou.day')}</p>
                    <p className="info_date">{`${format(range[0].startDate, 'MM/dd/yyyy')} -- ${format(
                        range[0].endDate,
                        'MM/dd/yyyy',
                    )}`}</p>
                </div>

                <p onClick={() => setOpen((open) => !open)} className="edit-date">
                    {t('common.edit')}
                </p>
            </div>
            <div ref={refOne}>
                {open && (
                    <DateRangePicker
                        onChange={(item) => {
                            setRange([item.selection]);
                            handleChangeDayBooking([item.selection]);
                        }}
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
