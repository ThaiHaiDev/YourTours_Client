import Navbar from '../../components/Navbar/Navbar';

import './HistoryBookingPage.scss';

import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { useEffect, useState } from 'react';
import bookingApi from '../../services/bookingApi';
import ModalConfirmDelete from '../../components/ModalConfirmDelete/ModalConfirmDelete';
import formatPrice from '../../utils/formatPrice';

const HistoryBookingPage = () => {
    const [dataHistory, setDataHistory] = useState<any>([]);

    useEffect(() => {
        bookingApi.getHistoryOfUser().then((dataResponse) => {
            setDataHistory(dataResponse.data.content);
            console.log(dataResponse.data.content);
        });
    }, []);

    return (
        <div>
            <Navbar />
            <div className="history-booking__page">
                <h1>Danh sách đặt phòng của bạn</h1>
                <div className="list-booking-history">
                    {dataHistory?.map((history: any, index: number) => (
                        <div className="item__booking" key={index}>
                            <div className="img-item__booking">
                                <img
                                    src="https://a0.muscache.com/im/pictures/a390fa99-8237-49d5-8546-f2bb8a248f3f.jpg?im_w=720"
                                    alt="img-booking"
                                />
                            </div>
                            <div className="info-history__booking">
                                <p className="name-history__booking">{history?.homeName}</p>
                                <p className="name-host-history__booking">(Chủ nhà Hai test)</p>
                                <div className="locate-hictory__booking">
                                    <FmdGoodIcon className="icon-locate-booking" />
                                    {/* <p>{`${
                                          dataDetailHomeBooking?.addressDetail !== null
                                              ? dataDetailHomeBooking?.addressDetail
                                              : ''
                                      } ${dataDetailHomeBooking?.addressDetail !== null ? ',' : ''} ${mapProvince(
                                          dataDetailHomeBooking?.provinceCode
                                              ? dataDetailHomeBooking?.provinceCode
                                              : undefined,
                                      )}`}</p> */}
                                    <p>Hội an</p>
                                </div>
                                <p className="guests-history___booking">Tổng lượng khách: 12</p>
                                <div className="date-history__booking">
                                    <p>Ngày đặt phòng: 2022-12-12</p>
                                    <p>Ngày trả phòng: 2022-12-12</p>
                                </div>
                            </div>
                            <div className="price-history__booking">
                                <div className="price-day__booking">
                                    <p>Giá theo đêm:</p>
                                    <p style={{ paddingLeft: '5px', fontWeight: '600' }}>{formatPrice(history?.cost)}</p>
                                </div>
                                <div className="price-total__booking">
                                    <p>Tổng tiền thanh toán:</p>
                                    <p style={{ paddingLeft: '5px', fontWeight: '700', color: 'red' }}>{formatPrice(history?.totalCost)}</p>
                                </div>
                            </div>
                            <div className="btn__booking">
                                <ModalConfirmDelete idRemove={history.id} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HistoryBookingPage;
