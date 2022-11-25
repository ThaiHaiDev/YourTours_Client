import { NavLink } from 'react-router-dom';
import DateBooking from '../../components/DateBooking/DateBooking';
import DialogCountCustomer from '../../components/DialogCountCustomer/DialogCountCustomer';

import './BookingPage.scss';

const BookingPage = () => {
    return (
        <div className="booking__page">
            <div className="nav">
                <NavLink to="#" className="logo">
                    <img
                        src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg"
                        alt="company logo"
                        className="logo-bg"
                    />
                </NavLink>
            </div>
            <div className="content-booking">
                <h1>Yêu cầu đặt phòng/đặt chỗ • Yourtours</h1>
                <div className="row">
                    <div className="col l-8" style={{ height: '100vh', paddingRight: '50px' }}>
                        <h2>Chuyến đi của bạn</h2>
                        <DateBooking size="horizontal" />
                        <hr className="line" />

                        <div className="count-customer">
                            <div>
                                <p className="customer-count__title">Khách</p>
                                <p className="count">1 khách</p>
                            </div>
                            <DialogCountCustomer />
                        </div>
                    </div>
                    <div className="col l-4">
                        <div className="card-booking__room">
                            <div className="header-room__booking">
                                <div className="image-room__booking">
                                    <img
                                        src="https://a0.muscache.com/im/pictures/miso/Hosting-29172819/original/8dae018e-ee08-4956-ab90-4a451e96e424.jpeg?im_w=720"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
