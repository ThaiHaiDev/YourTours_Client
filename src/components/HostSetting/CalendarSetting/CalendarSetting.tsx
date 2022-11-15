import './CalendarSetting.scss';
import SelectedIdRoom from './SelectedIdRoom';
import pricesOfHomeApi from '../../../services/pricesOfHomeApi';
import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import moment from 'moment';

import dayjs, { Dayjs } from 'dayjs';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { useSnackbar } from 'notistack';
import homeDetailApi from '../../../services/homeDetailApi';

import { useForm, SubmitHandler } from 'react-hook-form';

import formatPrice from '../../../utils/formatPrice';
import { Link } from 'react-router-dom';

export default function CalendarSetting() {
    const [date, setDate] = useState<Dayjs | null>(dayjs(moment().format('YYYY-MM-DD')));
    const [dateFormat, setDateFormat] = useState<string>(
        `${moment().format('DD')} tháng ${moment().format('MM')} năm ${moment().format('YYYY')}`,
    );
    const [idRoom, setIdRoom] = useState<string>('');

    const [month, setMonth] = useState<string>(moment().format('MM'));
    const [day, setDay] = useState<string>(moment().format('DD'));
    const [year, setYear] = useState<string>(moment().format('YYYY'));

    const [dataListhome, setDataListHome] = useState<any>([]);
    const [listPriceDay, setListPriceDay] = useState<any>([]);
    const [priceDay, setPriceDay] = useState<string>('');

    const { enqueueSnackbar } = useSnackbar();

    const { register, reset, handleSubmit } = useForm<any>();

    const onSubmit: SubmitHandler<any> = (data: any) => {
        const newDataPrice = {
            price: parseInt(data.price),
            homeId: idRoom,
            dateStart: `${year}-${month}-${day}`,
            dateEnd: `${year}-${month}-${day}`,
        };
        pricesOfHomeApi
            .customePriceDay(newDataPrice)
            .then((dataResponse: any) => {
                enqueueSnackbar('Cập nhật giá tiền thành công', { variant: 'success' });
                reset();
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data?.data.homeId, { variant: 'error' });
            });
    };

    const handleChangeIdRoom = (value: string) => {
        setIdRoom(value);
    };

    useEffect(() => {
        homeDetailApi.getListHomeOfHost().then((dataResponse: any) => {
            setDataListHome(dataResponse.data.content);
        });
        if (idRoom !== '') {
            pricesOfHomeApi.getPriceByMonthOfRoom(month, idRoom).then((data: any) => {
                setListPriceDay(data.data.prices);
            });
        }
    }, [idRoom, month]);

    const handleChangeMonth = (newValue: any) => {
        setDate(newValue);
        setDateFormat(`${newValue.$D} tháng ${parseInt(newValue.$M) + 1} năm ${newValue.$y}`);
        setMonth(`${parseInt(newValue.$M) + 1}`);
        setDay(parseInt(newValue.$D) < 10 ? `0${newValue.$D}` : `${newValue.$D}`);
        setYear(`${newValue.$y}`);
        setPriceDay(listPriceDay[parseInt(newValue.$D) - 1]?.price);
    };

    return (
        <div className="calendar">
            <div className="idRoom-selected">
                <SelectedIdRoom
                    handleChangeIdRoom={handleChangeIdRoom}
                    dataListhome={dataListhome}
                    idFirst={dataListhome[0]?.id}
                />
            </div>
            <div className="row" style={{ margin: 0 }}>
                <div className="col l-6 c-6" style={{ paddingRight: '30px' }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <CalendarPicker date={date} onChange={handleChangeMonth} />
                            </Grid>
                        </Grid>
                    </LocalizationProvider>
                </div>
                <div className="col l-6 c-6">
                    <div className="card-price__calendar">
                        <h2 className="title-date">{`${dateFormat}`}</h2>
                        <p className="price-show">
                            {idRoom !== '' ? `Định giá theo đêm: ${formatPrice(priceDay)}` : 'Vui lòng chọn nhà'}
                        </p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="number" className="input-price" {...register('price')} />
                            {idRoom !== '' ? (
                                <button type="submit" className="btn-save__price">
                                    Lưu
                                </button>
                            ) : (
                                <button className="btn-save__price-notallow">Lưu</button>
                            )}
                        </form>
                        <div className="img-price">
                            <img
                                src="https://raw.githubusercontent.com/ThaiHaiDev/StoreImage/main/pricehome.png"
                                alt=""
                            />
                        </div>
                        <p className="policy__edit-price">
                            Bạn luôn có quyền kiểm soát mục cho thuê, giá cả và tình trạng phòng trống.
                            <Link to="" className="link-plus">
                                Tìm hiểu thêm.
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
