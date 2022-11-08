import './DropdownUser.scss';

import YardOutlinedIcon from '@mui/icons-material/YardOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SettingsIcon from '@mui/icons-material/Settings';

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

function DropdownUser() {
    return (
        <div className="info-dropdown">
            <NavItem icon={<AccountCircleIcon />}>
                <DropdownMenu></DropdownMenu>
            </NavItem>
        </div>
    );
}

function NavItem(props : any) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <Link to="#" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </Link>

            {open && props.children}
        </li>
    );
}

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState<any>(null);
    const dropdownRef = useRef<any>(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
    }, []);

    function calcHeight(el:any) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props:any) {
        return (
            <Link to="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </Link>
        );
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem>Tài khoản</DropdownItem>
                    <DropdownItem>Danh sách yêu thích</DropdownItem>
                    <DropdownItem>Trợ giúp</DropdownItem>
                    <DropdownItem>Quản lý nhà / phòng cho thuê</DropdownItem>
                    <DropdownItem leftIcon={<SettingsIcon />} rightIcon={<NavigateNextIcon />} goToMenu="settings">
                        Settings
                    </DropdownItem>
                    <DropdownItem>Đăng xuất</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<YardOutlinedIcon />}>
                        <h2>My Tutorial</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon={<YardOutlinedIcon />}>HTML</DropdownItem>
                    <DropdownItem leftIcon={<YardOutlinedIcon />}>CSS</DropdownItem>
                    <DropdownItem leftIcon={<YardOutlinedIcon />}>JavaScript</DropdownItem>
                    <DropdownItem leftIcon={<YardOutlinedIcon />}>Awesome!</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'animals'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<YardOutlinedIcon />}>
                        <h2>Animals</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
                    <DropdownItem leftIcon="🐸">Frog</DropdownItem>
                    <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
                    <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}

export default DropdownUser
