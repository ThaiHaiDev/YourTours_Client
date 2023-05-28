import { useState } from 'react';

import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import Navbar from '../../../components/Navbar/Navbar';
import authApi from '../../../services/authApi';
import { LoginErrorResponse, LoginRequest } from '../../../share/models/auth';
import userSlice from '../userSlice';

import './Signin.scss';
import LoadingMaster from '../../../components/LoadingMaster/LoadingMaster';
import { t } from 'i18next';

const Signin = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginRequest>();

    const { enqueueSnackbar } = useSnackbar();
    const [loading, setLoading] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [loadingMaster, setLoadingMaster] = useState<boolean>(false);

    const dispatch = useDispatch();

    const handleShowPass = () => {
        setShow(!show);
    };

    const onSubmit: SubmitHandler<LoginRequest> = (data: LoginRequest) => {
        setLoading(true);
        setLoadingMaster(true);
        authApi
            .signIn(data)
            .then((userData) => {
                setLoading(false);
                dispatch(userSlice.actions.signin(userData.data));
                setLoadingMaster(true);
                setLoadingMaster(false);
                enqueueSnackbar(t('message.signin'), { variant: 'success' });
                setTimeout(function () {
                    document.location = '/';
                }, 1500);
                reset();
            })
            .catch((error: AxiosError<LoginErrorResponse>) => {
                setLoadingMaster(false);
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    return (
        <div>
            <Navbar />
            <div className="signin start-background">
                <div className="stars"></div>
                <div className="stars2"></div>
                <div className="stars3"></div>
                <LoadingMaster loadingMaster={loadingMaster} />
                <div className="container__sign-in">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {loading ? '' : ''}
                        <h1>{t('title.signin')}</h1>
                        <div className="social-container">
                            <Link to="#" className="socialg">
                                <img src="https://img.icons8.com/color/344/google-logo.png" alt="go_icon" />
                            </Link>
                            <Link to="#" className="social">
                                <img src="https://img.icons8.com/fluency/344/facebook-new.png" alt="fa_icon" />
                            </Link>
                            <Link to="#" className="social">
                                <img src="https://img.icons8.com/ios-glyphs/344/github.png" alt="gi_icon" />
                            </Link>
                        </div>
                        <span>{t('title.orSignin')}</span>
                        <label>
                            <input
                                type="email"
                                placeholder="Email"
                                {...register('email', {
                                    required: t('validate.emailRequire')! as string,
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: t('validate.emailError'),
                                    },
                                })}
                            />
                            {errors.email && (
                                <span className="message_error">{`${errors.email && errors.email?.message}`}</span>
                            )}
                        </label>

                        <label>
                            <input
                                className="signup__form-input"
                                type={!show ? 'password' : 'text'}
                                placeholder="Enter password"
                                {...register('password', {
                                    required: t('validate.passwordRequire')! as string,
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

                            {errors.password && <span className="message_error">{`${errors.password?.message}`}</span>}
                        </label>
                        <button type="submit" disabled={isSubmitting}>
                            {t('common.signin')}
                        </button>
                    </form>
                    <div className="forgot-password">
                        <Link to="/forgotpassword" className="link__forgot-password">
                            {t('link.forgotpassword')}
                        </Link>
                        <Link to="/signup" className="link-create">
                            {t('link.signup')}
                        </Link>
                    </div>
                    <div className="policy">
                        <p>
                            {t('contentPolicy.policyAuth')}
                            <Link to="" className="link-policy">
                                {t('link.rules')}
                            </Link>
                            {t('contentPolicy.and')}
                            <Link to="" className="link-policy">
                                {t('link.privacyPolicy')}
                            </Link>{' '}
                            {t('contentPolicy.ofYourtour')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
