import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import format from 'date-fns/format';

import moment from 'moment';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import StarIcon from '@mui/icons-material/Star';

import BedRoomSlider from '../../components/BedRoomSlider/BedRoomSlider';
import CommentRating from '../../components/Comment/Comment';
import Convenient from '../../components/Convenient/Convenient';
import DateGo from '../../components/DateGo/DateGo';
import DateIsBooking from '../../components/DateIsBooking/DateIsBooking';
import DialogConvenient from '../../components/DialogConvenient/DialogConvenient';

import Dropdown from '../../components/Dropdown/Dropdown';
import Footer from '../../components/Footer/Footer';

import ListImage from '../../components/ListImage/ListImage';

import Navbar from '../../components/Navbar/Navbar';
import PopoverPrice from '../../components/PopoverPrice/PopoverPrice';
import SkeletonRoomDetail from '../../components/Skeleton/SkeletonRoomDetail';
import { RootState } from '../../redux/store';
import bookingApi from '../../services/bookingApi';
import homeDetailApi from '../../services/homeDetailApi';
import pricesOfHomeApi from '../../services/pricesOfHomeApi';
import formatPrice from '../../utils/formatPrice';
import bookingSlice from '../BookingPage/bookingSlice';
import './RoomDetail.scss';
import { t } from 'i18next';

const RoomDetail = () => {
    const userLogin = useSelector((state: RootState) => state.user);

    const [dataDetailHome, setDataDetalHome] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [priceDay, setPriceDay] = useState<any>('');
    const [detailPrice, setDetailPrice] = useState<any>([]);
    const [dateBook, setDateBook] = useState<string[]>([moment().format('YYYY-MM-DD'), moment().format('YYYY-MM-DD')]);
    const [guests, setGuests] = useState<any>([]);
    const [titleGuests, setTitleGuests] = useState<any>(t('contentMess.countClient'));
    const [priceTotal, setPriceTotal] = useState<any>('');
    const [discount, setDiscount] = useState<number>(0);
    const [priceNoDiscount, setPriceNoDiscount] = useState<any>('');

    const params = useParams();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setLoading(true);
        homeDetailApi.getDetailHome(params?.idHome).then((dataResponse) => {
            setDataDetalHome(dataResponse.data);
            setPriceTotal(dataResponse.data.totalCostBooking);
            setLoading(false);
        });
    }, [params?.idHome]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChangeGuests = (value: any) => {
        setGuests(value);
    };

    const handleChangeDayBooking = (value: any) => {
        const dateFrom = format(value[0].startDate, 'yyyy-MM-dd');
        const dateTo = format(value[0].endDate, 'yyyy-MM-dd');
        setDateBook([dateFrom, dateTo]);
        pricesOfHomeApi.showPriceByRangeDay(params?.idHome, dateFrom, dateTo).then((dataResponse) => {
            setPriceDay(dataResponse?.data?.totalCost);
            setDetailPrice(dataResponse?.data?.detail);
            setPriceTotal(dataResponse?.data?.totalCostWithSurcharge);
            setDiscount(dataResponse?.data?.percent !== null ? Number(dataResponse?.data?.percent) : 0);
            setPriceNoDiscount(dataResponse?.data?.totalCostWithNoDiscount);
        });
    };

    const handleBooking = async () => {
        if (userLogin.current.id === undefined) {
            enqueueSnackbar(t('message.warningSignin'), { variant: 'warning' });
        } else {
            const dataCheck = {
                dateStart: dateBook[0],
                dateEnd: dateBook[1],
                homeId: params?.idHome,
                guests: guests,
            };
            const dataBooking = {
                dateStart: dateBook[0],
                dateEnd: dateBook[1],
                homeId: params?.idHome,
                priceDay: priceDay === '' ? dataDetailHome?.costPerNightDefault : priceDay,
                guests: guests,
                titleGuests: titleGuests,
                priceTotal: priceTotal,
            };
            bookingApi
                .checkBooking(dataCheck)
                .then(() => {
                    dispatch(bookingSlice.actions.addInfoBooking(dataBooking));
                    navigate('/booking');
                })
                .catch((error: AxiosError<any>) => {
                    enqueueSnackbar(error.response?.data.message, { variant: 'error' });
                });
        }
    };

    return (
        <div className="detail-room">
            <Navbar />
            <div className="info-room">
                {loading ? (
                    <SkeletonRoomDetail />
                ) : (
                    <>
                        <div className="header-room">
                            <h1>{dataDetailHome?.name}</h1>
                            <div className="heading">
                                <div className="heading__left">
                                    <div className="obility__room">
                                        <p>Resort</p>
                                        <img
                                            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6a1fad158b76ff0ed231eceede8458f2.svg"
                                            alt="icon__star"
                                        />
                                        <img
                                            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6a1fad158b76ff0ed231eceede8458f2.svg"
                                            alt="icon__star"
                                        />
                                        <img
                                            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6a1fad158b76ff0ed231eceede8458f2.svg"
                                            alt="icon__star"
                                        />
                                        <img
                                            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6a1fad158b76ff0ed231eceede8458f2.svg"
                                            alt="icon__star"
                                        />
                                        <img
                                            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6a1fad158b76ff0ed231eceede8458f2.svg"
                                            alt="icon__star"
                                        />
                                    </div>
                                    <div className="locate__room">
                                        <FmdGoodIcon className="icon_locate" />
                                        <p>{`${
                                            dataDetailHome?.addressDetail !== null ? dataDetailHome?.addressDetail : ''
                                        } ${dataDetailHome?.addressDetail !== null ? ',' : ''} ${
                                            dataDetailHome?.provinceName ? dataDetailHome?.provinceName : ''
                                        }`}</p>
                                    </div>
                                </div>
                                <div className="heading__right">
                                    <StarIcon className="icon_rate" />
                                    <p>{dataDetailHome?.averageRate}</p>
                                    <Link to="/" className="link__rate">
                                        {`(${dataDetailHome?.view} ${t('numberCount.viewInDetal')})`}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <ListImage listImage={dataDetailHome?.imagesOfHome} thumbnail={dataDetailHome?.thumbnail} />
                    </>
                )}
                <div className="about-room">
                    <div className="row">
                        <div className="col l-8 m-7 c-12">
                            <div className="title-room">
                                <h1>
                                    {t('contentMain.allHome')} {dataDetailHome?.ownerName}
                                </h1>
                                <p className="count-detail">{dataDetailHome?.descriptionHomeDetail}</p>
                                <hr className="line" />
                                <Convenient listConvenient={dataDetailHome?.amenitiesView} />
                                <DialogConvenient listConvenient={dataDetailHome?.amenitiesView} />
                                <hr className="line" />

                                <div className="desc-room">
                                    <h1>{t('contentMain.descHome')}</h1>
                                    <p>{dataDetailHome?.description}</p>
                                </div>

                                <hr className="line" />
                                <div className="bed-room">
                                    <h1>{t('contentMain.bedroom')}</h1>
                                    <BedRoomSlider listRoom={dataDetailHome?.rooms} />
                                </div>

                                <hr className="line" />
                                {/* <DateRangeDetail size="horizontal" setDataDay={handleChangeDayBooking} /> */}
                                <DateIsBooking dateIsBooked={dataDetailHome?.dateIsBooked} />

                                <hr className="line" />
                                <h1
                                    style={{
                                        marginTop: '5px',
                                        padding: '8px 10px',
                                        borderLeft: '7px solid blue',
                                    }}
                                >
                                    {t('contentMain.rateTitle')}
                                </h1>
                                <div style={{ marginTop: '10px' }}>
                                    <CommentRating idHome={dataDetailHome.id} rate={dataDetailHome.averageRate} />
                                </div>
                            </div>
                        </div>

                        <div className="col l-4 m-5 c-12">
                            <div className="card-book__detail">
                                <div className="price-room">{formatPrice(dataDetailHome?.costPerNightDefault)}</div>
                                <div className="date-book">
                                    <div className="title__date-book">
                                        <p>{t('contentMain.fromDay')}</p>
                                        <p>{t('contentMain.toDay')}</p>
                                    </div>
                                    <DateGo
                                        size="vertical"
                                        setDataDay={handleChangeDayBooking}
                                        setDateBook={setDateBook}
                                    />
                                </div>
                                <div className="count__guest">
                                    <p>{t('numberCount.countClient')}</p>
                                    <Dropdown handleChangeGuests={handleChangeGuests} setTitleGuests={setTitleGuests} />
                                </div>

                                <div className="line">
                                    <hr />
                                </div>

                                <div className="price-total">
                                    <div className="title-price">
                                        <PopoverPrice detailPrice={detailPrice} />
                                    </div>
                                    <div className="real-price">
                                        <p style={{ fontWeight: '550' }}>
                                            {priceDay !== ''
                                                ? formatPrice(priceDay)
                                                : formatPrice(dataDetailHome?.costPerNightDefault)}
                                        </p>
                                    </div>
                                </div>

                                {dataDetailHome?.surcharges?.map((sur: any, index: number) => (
                                    <div className="price-total" key={index}>
                                        <div className="title-price">
                                            <p className="name-surcharge">{`${sur?.surchargeCategoryName}`}</p>
                                        </div>
                                        <div className="real-price">
                                            <p className="cost-surcharge">{formatPrice(sur?.cost)}</p>
                                        </div>
                                    </div>
                                ))}

                                <div className="line" style={{ marginTop: '10px' }}>
                                    <hr />
                                </div>

                                {dataDetailHome?.discounts && dataDetailHome?.discounts.length > 0 && (
                                    <>
                                        <div className="discount-campain">
                                            <div className="discount-campain__title">
                                                <h2 className="title">{t('title.discountCompain')}</h2>
                                                <img src="https://img.icons8.com/emoji/30/null/fire.png" alt="" />
                                            </div>
                                            {dataDetailHome?.discounts?.map((discount: any, index: number) => (
                                                <div
                                                    key={index}
                                                    style={{ display: 'flex', justifyContent: 'space-between' }}
                                                >
                                                    <p>{discount.category.name}</p>
                                                    <p>{`${discount.config.percent}%`}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="line" style={{ marginTop: '10px' }}>
                                            <hr />
                                        </div>
                                    </>
                                )}

                                {discount !== 0 && (
                                    <div className="price-total">
                                        <div className="title-price">
                                            <p className="name-surcharge">{t('contentMain.discount')}</p>
                                        </div>
                                        <div className="real-price" style={{ display: 'flex' }}>
                                            <p
                                                className="cost-surcharge"
                                                style={{
                                                    textDecoration: 'line-through',
                                                    marginRight: '10px',
                                                    fontSize: '13px',
                                                }}
                                            >{`${formatPrice(priceNoDiscount)}`}</p>
                                            <p
                                                className="cost-surcharge"
                                                style={{ fontSize: '14px' }}
                                            >{`${discount}%`}</p>
                                        </div>
                                    </div>
                                )}

                                <div className="price-total">
                                    <div className="title-price">
                                        <p className="name-surcharge">{t('contentMain.totalPrice')}</p>
                                    </div>
                                    <div className="real-price">
                                        <p className="cost-surcharge">
                                            {formatPrice(priceTotal === '' ? '0' : priceTotal)}
                                        </p>
                                    </div>
                                </div>

                                <div className="btn-booking">
                                    <button className="btn-booking-room" onClick={handleBooking}>
                                        {t('common.booking')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-page">
                <Footer />
            </div>
        </div>
    );
};

export default RoomDetail;
