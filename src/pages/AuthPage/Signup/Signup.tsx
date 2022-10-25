import './Signup.scss';

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import OTPBox from '../../../components/OTPBox/OTPBox';

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

    const initialValues = { email: '', password: '', confirmPassword: '' };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState<any>({});

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
    }, []);

    function calcHeight(el: any) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props: any) {
        return (
            <Link to="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </Link>
        );
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        if (formErrors.email === '' && formErrors.password === '') {
            setActiveMenu('info_user');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const validate = (values: any) => {
        const errors = { email: '', password: '', confirmPassword: '' };
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.email) {
            errors.email = 'Email is required!';
        } else if (!regex.test(values.email)) {
            errors.email = 'This is not a valid email format!';
        }
        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 4) {
            errors.password = 'Password must be more than 4 characters';
        } else if (values.password.length > 10) {
            errors.password = 'Password cannot exceed more than 10 characters';
        }
        return errors;
    };

    return (
        <div className="dropdown" style={{ height: menuHeight }} >
            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}
                nodeRef={dropdownRef}
            >
                <div className="menu" ref={dropdownRef}>
                    <div className="form-email">
                        <form onSubmit={handleSubmit}>
                            <h1>Đăng ký</h1>
                            <label>
                                <label className="label-email">Địa chỉ Email</label>
                                <input type="email" name="email" value={formValues.email} onChange={handleChange} />
                                {formErrors.email && <p className="message_error">{`${formErrors.email}`}</p>}
                            </label>

                            <label style={{ paddingTop: '5px' }}>
                                <label className="label-email">Mật khẩu</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formValues.password}
                                    onChange={handleChange}
                                />
                                {formErrors.password && <p className="message_error">{`${formErrors.password}`}</p>}
                            </label>

                            <label>
                                <label className="label-email">Xác nhận mật khẩu</label>
                                <input type="password" />
                            </label>
                            <br />
                            <button className="customs-btn">Tiếp tục</button>
                        </form>
                    </div>
                    {/* <OTPBox /> */}
                    <p style={{ fontStyle: 'italic', marginLeft: '5px', fontSize: '1.2rem', marginTop: '3px' }}>
                        Thông tin của bạn hoàn toàn được bảo mật.
                    </p>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'info_user'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}
                nodeRef={dropdownRef}
            >
                <div className="menu" ref={dropdownRef}>
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
                    <Link to="" className="link-policy">
                        Điều Khoản Sử Dụng
                    </Link>{' '}
                    và{' '}
                    <Link to="" className="link-policy">
                        Chính Sách Bảo Mật
                    </Link>{' '}
                    của Yourtours.
                </p>
            </div>
        </div>
    );
}

export default Signup;
