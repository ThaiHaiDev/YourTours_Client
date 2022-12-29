import Navbar from '../../components/Navbar/Navbar';

import './HistoryBookingPage.scss';

import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { useEffect, useState } from 'react';
import bookingApi from '../../services/bookingApi';
import ModalConfirmDelete from '../../components/ModalConfirmDelete/ModalConfirmDelete';
import formatPrice from '../../utils/formatPrice';
import mapProvince from '../../utils/mapProvince';

import LinearProgress from '@mui/material/LinearProgress';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const HistoryBookingPage = () => {
    const [dataHistory, setDataHistory] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        bookingApi.getHistoryOfUser().then((dataResponse) => {
            setDataHistory(dataResponse.data.content);
            setLoading(false);
        });
    }, []);

    return (
        <div>
            <Navbar />
            <div className="history-booking__page">
                <h1>Danh sách đặt phòng của bạn</h1>
                {loading && <LinearProgress />}
                <div
                    data-aos="fade-up"
                    data-aos-duration="1900"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    <div className="list-booking-history">
                        {dataHistory?.map((history: any, index: number) => {
                            var status = '';
                            if (history?.status === 'CANCELED') {
                                status = 'Đã hủy';
                            } else if (history?.status === 'CHECK_IN') {
                                status = 'Đã nhận phòng';
                            } else if (history?.status === 'CHECK_OUT') {
                                status = 'Đã trả phòng';
                            }
                            return (
                                <div className="item__booking" key={index}>
                                    <div className="img-item__booking">
                                        <img src={history?.thumbnail} alt="img-booking" />
                                    </div>
                                    <div className="info-history__booking">
                                        <p className="name-history__booking">{history?.homeName}</p>
                                        <p className="name-host-history__booking">{`(Chủ nhà ${history?.owner})`}</p>
                                        <div className="locate-hictory__booking">
                                            <FmdGoodIcon className="icon-locate-booking" />
                                            <p>{`${
                                                history?.homeAddressDetail !== null ? history?.homeAddressDetail : ''
                                            } ${history?.homeAddressDetail !== null ? ',' : ''} ${mapProvince(
                                                history?.homeProvinceCode ? history?.homeProvinceCode : undefined,
                                            )}`}</p>
                                        </div>
                                        <p className="guests-history___booking">{`Tổng lượng khách: ${history?.numberOfGuests}`}</p>
                                        <div className="date-history__booking">
                                            <p>{`Ngày đặt phòng: ${history?.dateStart}`}</p>
                                            <p>{`Ngày trả phòng: ${history?.dateEnd}`}</p>
                                        </div>
                                    </div>
                                    <div className="price-history__booking">
                                        <div className="price-day__booking">
                                            <p>Giá theo đêm:</p>
                                            <p style={{ paddingLeft: '5px', fontWeight: '600' }}>
                                                {formatPrice(history?.cost)}
                                            </p>
                                        </div>
                                        <div className="price-total__booking">
                                            <p>Tổng tiền thanh toán:</p>
                                            <p style={{ paddingLeft: '5px', fontWeight: '700', color: 'red' }}>
                                                {formatPrice(history?.totalCost)}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="btn__booking">
                                        {history?.status !== 'WAITING' ? (
                                            <p>{status}</p>
                                        ) : (
                                            <ModalConfirmDelete idRemove={history.id} />
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryBookingPage;
