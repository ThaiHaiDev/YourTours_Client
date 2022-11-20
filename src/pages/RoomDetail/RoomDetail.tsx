import ListImage from '../../components/ListImage/ListImage';
import Navbar from '../../components/Navbar/Navbar';

import './RoomDetail.scss';

import FmdGoodIcon from '@mui/icons-material/FmdGood';
import StarIcon from '@mui/icons-material/Star';
import { Link, useParams } from 'react-router-dom';
import Convenient from '../../components/Convenient/Convenient';
import DateGo from '../../components/DateGo/DateGo';
import Dropdown from '../../components/Dropdown/Dropdown';
import DialogConvenient from '../../components/DialogConvenient/DialogConvenient';
import DateRangeDetail from '../../components/DateRangeDetail/DateRangeDetail';
import Footer from '../../components/Footer/Footer';
import BedRoomSlider from '../../components/BedRoomSlider/BedRoomSlider';
import { useEffect, useState } from 'react';
import homeDetailApi from '../../services/homeDetailApi';
import mapProvince from '../../utils/mapProvince';
import SkeletonRoomDetail from '../../components/Skeleton/SkeletonRoomDetail';

import format from 'date-fns/format';
import pricesOfHomeApi from '../../services/pricesOfHomeApi';
import formatPrice from '../../utils/formatPrice';

const RoomDetail = () => {
    const [dataDetailHome, setDataDetalHome] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [priceDay, setPriceDay] = useState<any>('');

    const params = useParams();

    useEffect(() => {
        setLoading(true);
        homeDetailApi.getDetailHome(params?.idHome).then((dataResponse) => {
            setDataDetalHome(dataResponse.data);
            setLoading(false);
        });
    }, [params?.idHome]);

    const handleChangeDayBooking = (value : any) => {
        const dateFrom = format(value[0].startDate, 'yyyy-MM-dd');
        const dateTo = format(value[0].endDate, 'yyyy-MM-dd');
        pricesOfHomeApi.showPriceByRangeDay(params?.idHome, dateFrom, dateTo).then((dataResponse) => {
            setPriceDay(dataResponse.data.totalCost)
        })
    }

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
                                        <p>{`${dataDetailHome?.addressDetail}, ${mapProvince(
                                            dataDetailHome?.provinceCode,
                                        )}`}</p>
                                    </div>
                                </div>
                                <div className="heading__right">
                                    <StarIcon className="icon_rate" />
                                    <p>5.0</p>
                                    <Link to="/" className="link__rate">
                                        {`(${dataDetailHome?.view} lượt xem)`}
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
                                <h1>Toàn bộ biệt thự. Chủ nhà {dataDetailHome?.ownerName}</h1>
                                <p className="count-detail">4 khách . 2 phòng ngủ . 2 giường . 2 phòng tắm</p>
                                <hr className="line" />
                                <Convenient listConvenient={dataDetailHome?.amenitiesView} />
                                <DialogConvenient listConvenient={dataDetailHome?.amenitiesView} />
                                <hr className="line" />

                                <div className="desc-room">
                                    <h1>Giới thiệu về nhà / phòng</h1>
                                    <p>{dataDetailHome?.description}</p>
                                </div>

                                <hr className="line" />
                                <div className="bed-room">
                                    <h1>Nơi bạn sẽ ngủ nghỉ</h1>
                                    <BedRoomSlider listRoom={dataDetailHome?.rooms} />
                                </div>

                                <hr className="line" />
                                <DateRangeDetail size="horizontal" setDataDay={handleChangeDayBooking} />

                                <hr className="line" />
                                <h1>Đánh giá</h1>
                            </div>
                        </div>

                        <div className="col l-4 m-5 c-12">
                            <div className="card-book__detail">
                                <div className="price-room">{formatPrice(dataDetailHome?.costPerNightDefault)}</div>
                                <div className="date-book">
                                    <div className="title__date-book">
                                        <p>Nhận phòng</p>
                                        <p>Trả phòng</p>
                                    </div>
                                    <DateGo size="vertical" setDataDay={handleChangeDayBooking}/>
                                </div>
                                <div className="count__guest">
                                    <p>Số khách</p>
                                    <Dropdown />
                                </div>

                                <div className="line">
                                    <hr />
                                </div>

                                <div className="price-total">
                                    <div className="title-price">
                                        <p>700.000 x 7 ngày</p>
                                    </div>
                                    <div className="real-price">
                                        <p>{formatPrice(priceDay)}</p>
                                    </div>
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
