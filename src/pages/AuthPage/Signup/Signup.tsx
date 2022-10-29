import './Signup.scss';
import { AxiosError } from 'axios';

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useSnackbar } from 'notistack';

import { useForm, ValidationRule, SubmitHandler } from 'react-hook-form';
import OTPBox from '../../../components/OTPBox/OTPBox';
import { useDispatch } from 'react-redux';
import userSlice from '../userSlice';
import authApi from '../../../services/authApi';

import regexCons from '../../../constants/regexCons';
import { OTPErrorResponse, RegisterErrorResponse } from '../../../share/models/auth';

interface FormRegisterData {
    password: string;
    fullName: string;
    email: string;
    password_confirmation: string;
}

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
    const [emailSend, setEmailSend] = useState<string>('');
    const dropdownRef = useRef<any>(null);

    const regexPassword: ValidationRule<RegExp> = regexCons.email;

    const {
        register,
        reset,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<FormRegisterData>();

    const { enqueueSnackbar } = useSnackbar();

    const dispatch = useDispatch();

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
    }, []);

    function calcHeight(el: any) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    const onSubmit: SubmitHandler<FormRegisterData> = (data: FormRegisterData) => {
        setEmailSend(data.email);
        const dataSignUp = {
            email: data.email,
            fullName: data.fullName,
            password: data.password,
        };
        authApi
            .signUp(dataSignUp)
            .then((dataRes) => {
                dispatch(userSlice.actions.signup(dataRes));
                enqueueSnackbar('Đăng kí thành công', { variant: 'success' });
                setActiveMenu('info_user');
                reset();
            })
            .catch((error: AxiosError<RegisterErrorResponse>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    const handleSubmitOTP = (otp: {}) => {
        authApi
            .otpConfirm(otp)
            .then((dataResend) => {
                // dispatch(userSlice.actions.signup(data))
                enqueueSnackbar('Xác thực tài khoản thành công', { variant: 'success' });
                console.log(dataResend);
            })
            .catch((error: AxiosError<OTPErrorResponse>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    function DropdownItem(props: any) {
        return (
            <Link to="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </Link>
        );
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }}>
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1>Đăng ký</h1>
                            <label>
                                <label className="label-email">Địa chỉ Email</label>
                                <input
                                    type="text"
                                    {...register('email', {
                                        required: 'Email được yêu cầu',
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: 'Đây không phải là một email hợp lệ',
                                        },
                                    })}
                                />
                                {errors.email && (
                                    <p className="message_error">{`${errors.email && errors.email?.message}`}</p>
                                )}
                            </label>
                            <label>
                                <label className="label-email">Họ tên</label>
                                <input
                                    type="text"
                                    {...register('fullName', {
                                        required: 'Họ tên được yêu cầu',
                                    })}
                                />
                                {errors.fullName && (
                                    <p className="message_error">{`${errors.fullName && errors.fullName?.message}`}</p>
                                )}
                            </label>
                            <label>
                                <label className="label-email">Mật khẩu</label>
                                <input
                                    className="signup__form-input"
                                    type="password"
                                    {...register('password', {
                                        required: 'Mật khẩu được yêu cầu',
                                        pattern: {
                                            value: regexPassword,
                                            message:
                                                'Mật khẩu phải bao gồm chữ thường và kí tự in hoa, ít nhất 1 kí tự đặt biệt và 1 con số.',
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Mật khẩu phải ít từ 6 kí tự ',
                                        },
                                        maxLength: {
                                            value: 16,
                                            message: 'Mật khẩu chỉ có thể nhiều nhất 16 kí tự',
                                        },
                                    })}
                                />
                                {errors.password && (
                                    <p className="message_error">{`${errors.password && errors.password?.message}`}</p>
                                )}
                            </label>

                            <label>
                                <label className="label-email">Xác nhận mật khẩu</label>
                                <input
                                    type="password"
                                    {...register('password_confirmation', {
                                        required: 'Mật khẩu được yêu cầu',
                                        validate: (val: string | undefined) => {
                                            if (watch('password') !== val) {
                                                return 'Xác nhận mật khẩu không khớp với mật khẩu của bạn';
                                            }
                                        },
                                    })}
                                />
                                {errors.password_confirmation && (
                                    <p className="message_error">{`${
                                        errors.password_confirmation && errors.password_confirmation?.message
                                    }`}</p>
                                )}
                            </label>

                            <br />
                            <button type="submit" className="customs-btn">
                                Đăng kí
                            </button>
                        </form>
                    </div>
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
                    <div className="form-otp">
                        <OTPBox handleSubmitOTP={handleSubmitOTP} emailSend={emailSend} />
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
