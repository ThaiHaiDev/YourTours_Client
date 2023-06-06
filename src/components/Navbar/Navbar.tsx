import { useState, useRef, useEffect } from 'react';
import { t } from 'i18next';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/imgMaster/logo.svg';
import notifications from '../../mockdata/notification.json';

import { RootState } from '../../redux/store';
import BellRing from '../BellRing/BellRing';
import Book from '../Book/Book';
import DropdownUser from '../DropdownUser/DropdownUser';
import LanguageSelected from '../LanguageSelected/LanguageSelected';

import './Navbar.scss';

const renderNotificationItem = (item: any, index: any) => (
    <div className="notification-item" key={index}>
        <i className={`${item.icon} notification-icon`}></i>
        <span className="notification-content">{item.content}</span>
    </div>
);

const Navbar = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const refOne = useRef<HTMLInputElement | null>(null);

    const user = useSelector((state: RootState) => state.user);

    useEffect(() => {
        document.addEventListener('click', hideOnClickOutside, true);
        document.addEventListener('scroll', hideOnClickOutside);
    }, []);

    const hideOnClickOutside = (e: any) => {
        if (refOne.current && !refOne.current.contains(e.target)) {
            setIsActive(false);
        }
    };

    return (
        <div>
            <div className="navbar">
                <NavLink to="/" className="logo">
                    <div className="sidebar__logo">
                        <img src={Logo} alt="company logo" className="logo-bg" />
                    </div>
                </NavLink>
                <div className="navbar-right menu" style={{ display: 'flex' }}>
                    <LanguageSelected />
                    <NavLink to="/" end={true}>
                        {t('navbar.home')}
                    </NavLink>
                    {/* <NavLink to="#" onClick={() => setIsActive(!isActive)}>
                        Book
                    </NavLink> */}
                    <NavLink to="/intro-host">{t('navbar.host')}</NavLink>
                    <NavLink to="/list-room">{t('navbar.listroom')}</NavLink>
                    {user.current?.id !== undefined && (
                        <NavLink to="/historybooking">{t('navbar.historyBookingClient')}</NavLink>
                    )}
                </div>

                <div className="navbar-right" style={{ display: 'flex' }}>
                    {user.current?.id !== undefined ? (
                        <DropdownUser />
                    ) : (
                        <>
                            <NavLink to="/signin">{t('navbar.signin')}</NavLink>
                        </>
                    )}
                    <BellRing
                        icon="bx bx-bell"
                        badge="12"
                        contentData={notifications}
                        renderItems={(item: any, index: any) => renderNotificationItem(item, index)}
                        renderFooter={() => <p>View All</p>}
                    />
                </div>
            </div>
            {isActive && <Book refOne={refOne} />}
        </div>
    );
};

export default Navbar;
