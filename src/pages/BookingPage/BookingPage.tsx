import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

import CheckBoxPayment from '../../components/CheckBoxPayment/CheckBoxPayment';
import DateBooking from '../../components/DateBooking/DateBooking';

import FormEvaluate from '../../components/FormEvaluate/FormEvaluate';

import Paypal from '../../components/Paypal/Paypal';
import { RootState } from '../../redux/store';
import bookingApi from '../../services/bookingApi';
import homeDetailApi from '../../services/homeDetailApi';
import convertDola from '../../utils/convertDola';
import formatPrice from '../../utils/formatPrice';
import userSlice from '../AuthPage/userSlice';
import './BookingPage.scss';

const BookingPage = () => {
    const infoBooking = useSelector((state: RootState) => state.booking);
    const userLogin = useSelector((state: RootState) => state.user);

    const [dataDetailHomeBooking, setDataDetalHomeBooking] = useState<any>([]);
    const [priceDay, setPriceDay] = useState<string>('');
    const [idBooking, setIdBooking] = useState<string | undefined>('');

    const [priceAfterChoosePayment, setPriceAfterChoosePayment] = useState<any>(infoBooking?.priceTotal);

    const { enqueueSnackbar } = useSnackbar();

    const dispatch = useDispatch();

    const navigate = useNavigate();
    useEffect(() => {
        if (!infoBooking.checkBooking) {
            navigate('/');
        } else if (userLogin.current.id === undefined) {
            enqueueSnackbar('Để đặt thuê nhà, bạn cần đăng nhập!', { variant: 'warning' });
        }
    }, [infoBooking, navigate, userLogin, enqueueSnackbar]);

    useEffect(() => {
        homeDetailApi.getDetailHome(infoBooking.homeId).then((dataResponse) => {
            setDataDetalHomeBooking(dataResponse.data);
        });
    }, [infoBooking.homeId]);

    const handleBookingRoom = () => {
        const dataBooking = {
            ...infoBooking,
            moneyPayed: priceAfterChoosePayment,
        };
        bookingApi
            .bookingRoom(dataBooking)
            .then((dataResponse) => {
                dispatch(userSlice.actions.updateHost());
                enqueueSnackbar('Đặt phòng thành công', { variant: 'success' });
                setIdBooking(dataResponse?.data?.id);
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    const handleChangePriceDay = (value: string) => {
        setPriceDay(value);
        setPriceAfterChoosePayment(value);
    };

    const handleCloseReview = () => {};

    return (
        <div className="booking__page">
            <div className="nav">
                <NavLink to="/" className="logo">
                    <img
                        src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg"
                        alt="company logo"
                        className="logo-bg"
                    />
                </NavLink>
            </div>
            {idBooking !== '' && idBooking !== undefined ? (
                <FormEvaluate showFormReview={true} idBook={idBooking} handleCloseReview={handleCloseReview} />
            ) : (
                <></>
            )}
            <div className="content-booking">
                <h1>Yêu cầu đặt phòng/đặt chỗ • Yourtours</h1>
                <div className="row">
                    <div className="col l-8" style={{ height: '100vh', paddingRight: '50px' }}>
                        <h2>Chuyến đi của bạn</h2>
                        <DateBooking
                            size="horizontal"
                            dateStart={infoBooking.dateStart}
                            dateEnd={infoBooking.dateEnd}
                            idHome={infoBooking.homeId}
                            handleChangePriceDay={handleChangePriceDay}
                        />
                        <hr className="line" />

                        <div className="count-customer">
                            <div>
                                <p className="customer-count__title">Khách</p>
                                <p className="count">{infoBooking?.titleGuests}</p>
                            </div>
                        </div>

                        <hr className="line" />
                        <div className="count-customer">
                            <div>
                                <p className="customer-count__title">
                                    Thanh toán online (Bạn vui lòng thanh toán trước để đặt phòng)
                                </p>
                                <p className="count">{`Số tiền bạn cần thanh toán online: ${convertDola(
                                    priceAfterChoosePayment,
                                )} $`}</p>
                            </div>
                        </div>
                        <CheckBoxPayment
                            setPriceAfterChoosePayment={setPriceAfterChoosePayment}
                            price={infoBooking?.priceTotal}
                        />
                        <div className="payment__paypal">
                            <Paypal pricePayment={convertDola(priceAfterChoosePayment)} booking={handleBookingRoom} />
                        </div>
                    </div>
                    <div className="col l-4">
                        <div className="card-booking__room">
                            <div className="header-room__booking">
                                <div className="image-room__booking">
                                    <img src={dataDetailHomeBooking?.thumbnail} alt="" />
                                </div>
                                <div className="desc-room__booking">
                                    <p className="desc-all">Toàn bộ ngôi nhà</p>
                                    <p className="name-room-booking">{dataDetailHomeBooking?.name}</p>
                                    <div className="locate-room-booking">
                                        <FmdGoodIcon className="icon-locate-booking" />
                                        <p>{`${
                                            dataDetailHomeBooking?.addressDetail !== null
                                                ? dataDetailHomeBooking?.addressDetail
                                                : ''
                                        } ${dataDetailHomeBooking?.addressDetail !== null ? ',' : ''} ${
                                            dataDetailHomeBooking?.provinceName
                                                ? dataDetailHomeBooking?.provinceName
                                                : ''
                                        }`}</p>
                                    </div>
                                    <p className="name-host-room">{`Chủ nhà ${dataDetailHomeBooking?.ownerName}`}</p>
                                </div>
                            </div>
                            <hr className="line-card" />
                            <div className="policy-booking">Đặt phòng của bạn được bảo vệ bởi Yourtours.</div>

                            <hr className="line-card" />
                            <div className="card-surcharge">
                                <p>Phụ phí bao gồm</p>
                                {dataDetailHomeBooking?.surcharges?.map((sur: any, index: number) => (
                                    <li key={index}>{sur?.surchargeCategoryName}</li>
                                ))}
                            </div>

                            <div className="price-booking">
                                <div className="price-room-booking">
                                    <p style={{ color: '#757575' }}>Giá phòng</p>
                                    <p style={{ fontWeight: '550' }}>
                                        {formatPrice(priceDay !== '' ? priceDay : infoBooking?.priceDay)}
                                    </p>
                                </div>
                                <div className="price-total-booking">
                                    <p style={{ color: '#757575' }}>Tổng tiền thanh toán</p>
                                    <p style={{ fontWeight: '550' }}>{formatPrice(infoBooking?.priceTotal)}</p>
                                </div>
                            </div>
                            {/* <button onClick={handleBookingRoom} className="btn-booking">
                                Đặt phòng
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
