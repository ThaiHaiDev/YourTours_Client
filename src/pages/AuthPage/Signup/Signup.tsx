import React, { useState, useEffect, useRef } from 'react';
import { AxiosError } from 'axios';

import { useSnackbar } from 'notistack';
import { useForm, ValidationRule, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import Navbar from '../../../components/Navbar/Navbar';
import OTPBox from '../../../components/OTPBox/OTPBox';
import regexCons from '../../../constants/regexCons';
import authApi from '../../../services/authApi';
import { OTPErrorResponse, RegisterErrorResponse } from '../../../share/models/auth';

import userSlice from '../userSlice';
import './Signup.scss';
import LoadingMaster from '../../../components/LoadingMaster/LoadingMaster';
import { t } from 'i18next';

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
            <div className="signup start-background">
                <div className="stars"></div>
                <div className="stars2"></div>
                <div className="stars3"></div>
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

    const [show, setShow] = useState<boolean>(false);
    const [showConfirm, setShowConfirm] = useState<boolean>(false);

    const regexPassword: ValidationRule<RegExp> = regexCons.email;

    const {
        register,
        reset,
        watch,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormRegisterData>();
    const [loadingMaster, setLoadingMaster] = useState<boolean>(false);

    const { enqueueSnackbar } = useSnackbar();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
    }, []);

    function calcHeight(el: any) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    const handleShowPass = () => {
        setShow(!show);
    };

    const handleShowPassConfirm = () => {
        setShowConfirm(!showConfirm);
    };

    const onSubmit: SubmitHandler<FormRegisterData> = (data: FormRegisterData) => {
        setEmailSend(data.email);
        setLoadingMaster(true);
        const dataSignUp = {
            email: data.email,
            fullName: data.fullName,
            password: data.password,
        };
        authApi
            .signUp(dataSignUp)
            .then((dataRes) => {
                dispatch(userSlice.actions.signup(dataRes));
                enqueueSnackbar(t('message.signup'), { variant: 'success' });
                setActiveMenu('info_user');
                setLoadingMaster(false);
                reset();
            })
            .catch((error: AxiosError<RegisterErrorResponse>) => {
                setLoadingMaster(false);
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    const handleSubmitOTP = (otp: {}) => {
        setLoadingMaster(true);
        authApi
            .otpConfirm(otp)
            .then(() => {
                setLoadingMaster(false);
                enqueueSnackbar(t('message.activeAccout'), { variant: 'success' });
                navigate('/signin');
            })
            .catch((error: AxiosError<OTPErrorResponse>) => {
                setLoadingMaster(false);
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
            <LoadingMaster loadingMaster={loadingMaster} />
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
                            <h1>{t('title.signup')}</h1>
                            <label>
                                <label className="label-email">{t('label.email')}</label>
                                <input
                                    type="text"
                                    {...register('email', {
                                        required: t('validate.emailRequire')! as string,
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: t('validate.emailError'),
                                        },
                                    })}
                                />
                                {errors.email && (
                                    <p className="message_error">{`${errors.email && errors.email?.message}`}</p>
                                )}
                            </label>
                            <label>
                                <label className="label-email">{t('label.fullname')}</label>
                                <input
                                    type="text"
                                    {...register('fullName', {
                                        required: t('validate.fullnameRequire')! as string,
                                    })}
                                />
                                {errors.fullName && (
                                    <p className="message_error">{`${errors.fullName && errors.fullName?.message}`}</p>
                                )}
                            </label>
                            <label>
                                <label className="label-email">{t('label.password')}</label>
                                <input
                                    className="signup__form-input"
                                    type={!show ? 'password' : 'text'}
                                    {...register('password', {
                                        required: t('validate.passwordRequire')! as string,
                                        pattern: {
                                            value: regexPassword,
                                            message: t('validate.passwordSpecialError'),
                                        },
                                        minLength: {
                                            value: 6,
                                            message: t('validate.passwordMinError'),
                                        },
                                        maxLength: {
                                            value: 16,
                                            message: t('validate.passwordMaxError'),
                                        },
                                    })}
                                />
                                {show ? (
                                    <VisibilityOffIcon className="icon-eye" onClick={handleShowPass} />
                                ) : (
                                    <VisibilityIcon className="icon-eye" onClick={handleShowPass} />
                                )}
                                {errors.password && (
                                    <p className="message_error">{`${errors.password && errors.password?.message}`}</p>
                                )}
                            </label>

                            <label>
                                <label className="label-email">{t('label.confirmPassword')}</label>
                                <input
                                    type={!showConfirm ? 'password' : 'text'}
                                    {...register('password_confirmation', {
                                        required: t('validate.passwordConfirmRequire')! as string,
                                        validate: (val: string | undefined) => {
                                            if (watch('password') !== val) {
                                                return t('validate.passwordConfirmError')! as string;
                                            }
                                        },
                                    })}
                                />
                                {showConfirm ? (
                                    <VisibilityOffIcon className="icon-eye" onClick={handleShowPassConfirm} />
                                ) : (
                                    <VisibilityIcon className="icon-eye" onClick={handleShowPassConfirm} />
                                )}
                                {errors.password_confirmation && (
                                    <p className="message_error">{`${
                                        errors.password_confirmation && errors.password_confirmation?.message
                                    }`}</p>
                                )}
                            </label>

                            <br />
                            <p style={{ fontStyle: 'italic', marginLeft: '5px', fontSize: '1.2rem', marginTop: '3px' }}>
                                {t('contentPolicy.informationOfYou')}
                            </p>
                            <button type="submit" className="customs-btn" disabled={isSubmitting}>
                                {t('common.signup')}
                            </button>
                        </form>
                        <div className="forgot-password">
                            <Link to="/forgotpassword" className="link__forgot-password">
                                {t('link.forgotpassword')}
                            </Link>
                            <Link to="/signin" className="link-create">
                                {t('link.signin')}
                            </Link>
                        </div>
                    </div>
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
                    <div className="form-otp" style={{ paddingBottom: '148px' }}>
                        <OTPBox handleSubmitOTP={handleSubmitOTP} emailSend={emailSend} />
                    </div>
                </div>
            </CSSTransition>
            <div className="policy">
                <p>
                    {t('contentPolicy.policyAuth')}
                    <Link to="" className="link-policy">
                        {t('link.rules')}
                    </Link>{' '}
                    {t('contentPolicy.and')}
                    <Link to="" className="link-policy">
                        {t('link.privacyPolicy')}
                    </Link>{' '}
                    {t('contentPolicy.ofYourtour')}
                </p>
            </div>
        </div>
    );
}

export default Signup;
