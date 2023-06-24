import { t } from 'i18next';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/imgMaster/logo.svg';
import DropdownHost from '../DropdownHost/DropdownHost';
import './NavbarOwner.scss';

const NavbarOwner = () => {
    return (
        <div className="navbar-owner">
            <NavLink to="/host" className="logo">
                <div className="sidebar__logo">
                    <img src={Logo} alt="company logo" className="logo-bg" />
                </div>
            </NavLink>
            <div className="navbar-right menu">
                <NavLink to="/host" end={true}>
                    {t('navbar.today')}
                </NavLink>
                <NavLink to="/host/setting" end={true}>
                    {t('navbar.homeHost')}
                </NavLink>
                {/* <NavLink to="/list-room">{t('navbar.book')}</NavLink> */}
                <NavLink to="/host/setting/calendar">{t('navbar.calender')}</NavLink>
                <NavLink to="/intro-host">{t('navbar.setHost')}</NavLink>
                <NavLink to="/host/setting/transactionhistory">{t('navbar.historyHost')}</NavLink>
            </div>
            <div className="navbar-right">
                <DropdownHost />
            </div>
        </div>
    );
};

export default NavbarOwner;
