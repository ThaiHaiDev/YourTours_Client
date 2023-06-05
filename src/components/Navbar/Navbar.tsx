import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Book from '../Book/Book';
import DropdownUser from '../DropdownUser/DropdownUser';
import Logo from '../../assets/imgMaster/logo.svg';
import './Navbar.scss';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { t } from 'i18next';
import LanguageSelected from '../LanguageSelected/LanguageSelected';

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
                <div className="navbar-right menu">
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

                <div className="navbar-right">
                    {user.current?.id !== undefined ? (
                        <DropdownUser />
                    ) : (
                        <>
                            <NavLink to="/signin">{t('navbar.signin')}</NavLink>
                        </>
                    )}
                    <LanguageSelected />
                </div>
            </div>
            {isActive && <Book refOne={refOne} />}
        </div>
    );
};

export default Navbar;
