import { NavLink } from 'react-router-dom';
import './ConfirmOwner.scss';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ConfirmOwner = () => {
    return (
        <div className="confirm-page">
            <div className="nav">
                <NavLink to="#" className="logo">
                    <img
                        src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg"
                        alt="company logo"
                        className="logo-bg"
                    />
                </NavLink>
            </div>
            <div className="content-confirm">
                <div className="row" style={{ margin: '0', width: '100%' }}>
                    <div
                        className="col l-8 m-7 c-12"
                        style={{
                            height: '90vh',
                            display: 'grid',
                            alignContent: 'center',
                        }}
                    >
                        <h1>Bạn đã sẵn sàng đăng!</h1>
                        <span>
                            Khi bạn nhấn đăng, khách có thể tìm thấy nhà/phòng cho thuê của bạn trên Yourtours và đặt
                            bất kì ngày nào còn trống.
                        </span>
                        <br /> <br /> <br />
                        <div className="status">
                            <p>Tạo mục nhà/phòng cho thuê </p>
                            <div className="status-icon">
                                <CheckCircleOutlineIcon className="icon-success" /> <p>Hoàn tất!</p>
                            </div>
                        </div>
                        <br />
                        <div className="status">
                            <p>Xác nhận tài khoản của bạn </p>
                            <span>
                                Khi bạn nhấn đăng, khách có thể tìm thấy nhà/phòng cho thuê của bạn trên Yourtours và
                                đặt bất kì ngày nào còn trống.
                            </span>
                            <div className="status-icon" style={{marginTop: '10px'}}>
                                <CheckCircleOutlineIcon className="icon-success" /> <p>Hoàn tất!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col l-4 m-5 c-12" style={{ background: 'green', height: '100px' }}></div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmOwner;
