import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Book from '../Book/Book';
import DropdownUser from '../DropdownUser/DropdownUser';
import './Navbar.scss';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

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
                        <img
                            src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg"
                            alt="company logo"
                            className="logo-bg"
                        />
                    </div>
                </NavLink>
                <div className="navbar-right menu">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/detail">Detail</NavLink>
                    <NavLink to="#" onClick={() => setIsActive(!isActive)}>
                        Book
                    </NavLink>
                    <NavLink to="/intro-host">Owner</NavLink>
                    <NavLink to="/list-room">Room</NavLink>
                    <NavLink to="/contacts">Contacts</NavLink>
                </div>

                <div className="navbar-right">
                    {user.current?.id !== undefined ? (
                        <DropdownUser />
                    ) : (
                        <>
                            <NavLink to="/signin">Đăng nhập</NavLink>
                            <NavLink to="/signup">Đăng ký</NavLink>
                        </>
                    )}
                </div>
            </div>
            {isActive && <Book refOne={refOne} />}
        </div>
    );
};

export default Navbar;
