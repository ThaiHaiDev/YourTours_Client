import './Signup.scss';

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Signup() {
    return (
        <div>
            <Navbar />
            <div className="signup">
                <DropdownMenu></DropdownMenu>
            </div>
        </div>
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

    function DropdownItem(props : any) {
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
                    <div className="form-email">
                        <h1>Đăng ký</h1>
                        <label>
                            <label className="label-email">Địa chỉ Email</label>
                            <input type="email" placeholder="Địa chỉ Email" />
                        </label>
                    </div>
                    <p style={{ fontStyle: 'italic', marginLeft: '5px', fontSize: '1.2rem', marginTop: '3px' }}>
                        Thông tin của bạn hoàn toàn được bảo mật.
                    </p>
                    <Link to="#" className="customs-btn" onClick={() => setActiveMenu('animals')}>
                        Đăng ký
                    </Link>
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
                    <DropdownItem goToMenu="main" leftIcon={<ArrowBackIosIcon style={{ marginLeft: '5px' }} />}>
                        <p style={{ marginTop: '12px', marginLeft: '-5px', color: 'black' }}>Quay lại</p>
                    </DropdownItem>
                    <div className="form-info">
                        <label>
                            <input type="text" placeholder="Họ và tên đệm" />
                        </label>
                        <label>
                            <input type="text" placeholder="Tên đầy đủ" />
                        </label>
                    </div>
                </div>
            </CSSTransition>
            <div className="policy">
                <p>
                    Bằng cách đăng ký hoặc đăng nhập, bạn đã hiểu và đồng ý với{' '}
                    <Link to='' className="link-policy">Điều Khoản Sử Dụng</Link> và{' '}
                    <Link to='' className="link-policy">Chính Sách Bảo Mật</Link> của Yourtours.
                </p>
            </div>
        </div>
    );
}

export default Signup;
