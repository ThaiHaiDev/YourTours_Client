import './DropdownHost.scss';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import userSlice from '../../pages/AuthPage/userSlice';
import { RootState } from '../../redux/store';
import { t } from 'i18next';

function DropdownUser() {
    return (
        <div className="info-dropdown">
            <NavItem icon={<AccountCircleIcon />}>
                <DropdownMenu></DropdownMenu>
            </NavItem>
        </div>
    );
}

function NavItem(props: any) {
    const [open, setOpen] = useState(false);
    const refOne = useRef<any>(null);

    useEffect(() => {
        document.addEventListener('click', hideOnClickOutside, true);
    }, []);

    const hideOnClickOutside = (e: any) => {
        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false);
        }
    };

    return (
        <li className="nav-item" ref={refOne}>
            <Link to="#" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </Link>

            {open && props.children}
        </li>
    );
}

function DropdownMenu() {
    const dropdownRef = useRef<any>(null);
    const user = useSelector((state: RootState) => state.user);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleLogout = async () => {
        await dispatch(userSlice.actions.logout());
        navigate('/');
    };

    return (
        <div className="dropdown" style={{ height: '100px' }} ref={dropdownRef}>
            <Link to="/account" className="dropdown__link">
                {t('navbar.account')}
            </Link>
            {user.current.role === 'ADMIN' && (
                <Link to="/admin" className="dropdown__link">
                    {t('navbar.admin')}
                </Link>
            )}
            <Link to="/wishlists" className="dropdown__link">
                {t('navbar.listLove')}
            </Link>
            <Link to="/" className="dropdown__link">
                {t('navbar.backHome')}
            </Link>
            <Link to="#" onClick={handleLogout} className="dropdown__link">
                {t('navbar.signout')}
            </Link>
        </div>
    );
}

export default DropdownUser;
