import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import './CalendarSetting.scss';
import SelectedIdRoom from './SelectedIdRoom';
import pricesOfHomeApi from '../../../services/pricesOfHomeApi';

const isWeekend = (date: Dayjs) => {
    const day = date.day();

    return day === 0 || day === 6;
};

export default function CalendarSetting() {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-07'));
    const [idRoom, setIdRoom] = React.useState<string>('')

    const handleChangeIdRoom = (value: string) => {
        setIdRoom(value)
    }

    const handleChangeMonth = (newValue: any) => {
        setValue(newValue.$M);
        pricesOfHomeApi.getPriceByMonthOfRoom(newValue?.$M, idRoom).then((data:any) => {
            console.log(data)
        })
    }

    return (
        <div className="calendar">
            <SelectedIdRoom handleChangeIdRoom={handleChangeIdRoom}/>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker
                    orientation="landscape"
                    openTo="day"
                    value={value}
                    className="calendar-setting"
                    shouldDisableDate={isWeekend}
                    onChange={handleChangeMonth}
                    renderInput={(params: any) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>
    );
}
