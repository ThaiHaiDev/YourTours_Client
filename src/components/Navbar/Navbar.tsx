import { useState, useRef, useEffect } from 'react';
import { t } from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

import Logo from '../../assets/imgMaster/logo.svg';
import notifications from '../../mockdata/notification.json';

import userSlice from '../../pages/AuthPage/userSlice';
import { RootState } from '../../redux/store';
import userApi from '../../services/userApi';
import BellRing from '../BellRing/BellRing';
import Book from '../Book/Book';

import DropdownUser from '../DropdownUser/DropdownUser';
import LanguageSelected from '../LanguageSelected/LanguageSelected';
import './Navbar.scss';
import notificationApi from '../../services/notificationApi';

const Navbar = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const refOne = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    const user = useSelector((state: RootState) => state.user);
    const noti = useSelector((state: RootState) => state.notification);

    const dispatch = useDispatch();

    useEffect(() => {
        document.addEventListener('click', hideOnClickOutside, true);
        document.addEventListener('scroll', hideOnClickOutside);
    }, []);

    useEffect(() => {
        userApi.getProfile().then((dataRes: any) => {
            if (dataRes.data !== undefined) {
                dispatch(userSlice.actions.setProfile({ data: dataRes.data }));
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [noti.numberOfNotification]);

    const hideOnClickOutside = (e: any) => {
        if (refOne.current && !refOne.current.contains(e.target)) {
            setIsActive(false);
        }
    };

    const renderNotificationItem = (item: any, index: any) => (
        <div className="notification-item" key={index} onClick={() => handleSetView(item.id, item.view, item.homeId)}>
            <i className={`${item.icon} bx bx-package`}></i>
            {/* <i className={`notification-icon`}></i> */}
            <span className={`${!item.view ? 'no-view ' : ''} notification-content`}>{item.description}</span>
        </div>
    );

    const handleSetView = (id: string | undefined, view: boolean, homeId: string | undefined) => {
        if (!view) {
            notificationApi.showOffViewNotification({ notificationId: id }).then(() => {
                navigate(`/detail/${homeId}`);
            });
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
                        renderFooter={() => <p>View All</p>}
                    />
                </div>
            </div>
            {isActive && <Book refOne={refOne} />}
        </div>
    );
};

export default Navbar;
