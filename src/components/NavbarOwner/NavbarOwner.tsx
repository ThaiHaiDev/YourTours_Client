import { NavLink } from 'react-router-dom';
import DropdownHost from '../DropdownHost/DropdownHost';
import './NavbarOwner.scss';

const NavbarOwner = () => {
    return (
        <div className="navbar-owner">
            <NavLink to="/host" className="logo">
                <div className="sidebar__logo">
                    <img
                        src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg"
                        alt="company logo"
                        className="logo-bg"
                    />
                </div>
            </NavLink>
            <div className="navbar-right menu">
                <NavLink to="/host" end={true}>Hôm nay</NavLink>
                <NavLink to="/host/setting" end={true}>Nhà / Phòng cho thuê</NavLink>
                <NavLink to="/list-room">Đặt phòng</NavLink>
                <NavLink to="/host/setting/calendar">Lịch</NavLink>
                <NavLink to="/intro-host">Tạo mục chủ nhà</NavLink>
                <NavLink to="/host/setting/transactionhistory">Lịch sử giao dịch</NavLink>
            </div>
            <div className="navbar-right">
                <DropdownHost />
            </div>
        </div>
    );
};

export default NavbarOwner;
