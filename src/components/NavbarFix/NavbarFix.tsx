import { useState, useRef, useEffect } from 'react';
import { t } from 'i18next';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import BookOnlineIcon from '@mui/icons-material/BookOnline';
import HomeIcon from '@mui/icons-material/Home';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';

import Logo from '../../assets/imgMaster/logo.svg';
import notifications from '../../mockdata/notification.json';
import { RootState } from '../../redux/store';

import notificationApi from '../../services/notificationApi';
import BellRing from '../BellRing/BellRing';
import Book from '../Book/Book';
import DropdownUser from '../DropdownUser/DropdownUser';
import LanguageSelected from '../LanguageSelected/LanguageSelected';
import './NavbarFix.scss';

const NavbarFix = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const refOne = useRef<HTMLInputElement | null>(null);

    const user = useSelector((state: RootState) => state.user);
    const noti = useSelector((state: RootState) => state.notification);

    const navigate = useNavigate();

    useEffect(() => {
        document.addEventListener('click', hideOnClickOutside, true);
        document.addEventListener('scroll', hideOnClickOutside);
    }, []);

    const hideOnClickOutside = (e: any) => {
        if (refOne.current && !refOne.current.contains(e.target)) {
            setIsActive(false);
        }
    };

    const renderIcon = (type: string | undefined, view: boolean) => {
        if (type === 'BOOKING_NOTIFICATION') {
            return <BookOnlineIcon sx={{ color: `${!view ? '#2962ff' : 'black'}`, fontSize: '18px' }} />;
        }
        if (type === 'HOME_NOTIFICATION') {
            return <HomeIcon sx={{ color: `${!view ? '#2962ff' : 'black'}`, fontSize: '18px' }} />;
        }
        if (type === 'OWNER_HOME_NOTIFICATION') {
            return <ManageHistoryIcon sx={{ color: `${!view ? '#2962ff' : 'black'}`, fontSize: '18px' }} />;
        }
    };

    const renderNotificationItem = (item: any, index: any) => (
        <div
            className="notification-item"
            key={index}
            onClick={() => handleSetView(item.id, item.view, item.homeId, item.type)}
        >
            <div className="icon-notification">{renderIcon(item.type, item.view)}</div>
            <span className={`${!item.view ? 'no-view ' : ''} notification-content`}>{item.description}</span>
        </div>
    );

    const handleSetView = (
        id: string | undefined,
        view: boolean,
        homeId: string | undefined,
        type: string | undefined,
    ) => {
        if (!view) {
            notificationApi.showOffViewNotification({ notificationId: id }).then(() => {
                if (type === 'BOOKING_NOTIFICATION') {
                    navigate(`/historybooking`);
                }
                if (type === 'HOME_NOTIFICATION') {
                    navigate(`/detail/${homeId}`);
                }
                if (type === 'OWNER_HOME_NOTIFICATION') {
                    navigate(`/host`);
                }
            });
        } else {
            if (type === 'BOOKING_NOTIFICATION') {
                navigate(`/historybooking`);
            }
            if (type === 'HOME_NOTIFICATION') {
                navigate(`/detail/${homeId}`);
            }
            if (type === 'OWNER_HOME_NOTIFICATION') {
                navigate(`/host`);
            }
        }
    };

    return (
        <div>
            <div className="navbar-fix">
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
                        badge={
                            noti.numberOfNotification !== -1
                                ? noti.numberOfNotification
                                : user.current.numberOfNotification
                        }
                        contentData={notifications}
                        renderItems={(item: any, index: any) => renderNotificationItem(item, index)}
                        renderFooter={() => <p>View all</p>}
                    />
                </div>
            </div>
            {isActive && <Book refOne={refOne} />}
        </div>
    );
};

export default NavbarFix;
