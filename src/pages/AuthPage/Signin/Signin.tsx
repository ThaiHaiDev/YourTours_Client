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
                enqueueSnackbar('Đăng nhập thành công', { variant: 'success' });
                setTimeout(function () {
                    document.location = '/';
                }, 2000);
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
                        <h1>Đăng nhập</h1>
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
                        <span>hoặc đăng nhập bằng</span>
                        <label>
                            <input
                                type="email"
                                placeholder="Email"
                                {...register('email', {
                                    required: 'Email được yêu cầu',
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'Đây không phải là một email hợp lệ',
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
                                    required: 'Mật khẩu được yêu cầu',
                                    maxLength: {
                                        value: 16,
                                        message: 'Mật khẩu chỉ giới hạn 16 kí tự',
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
                            Đăng nhập
                        </button>
                    </form>
                    <div className="forgot-password">
                        <Link to="/forgotpassword" className="link__forgot-password">
                            Quên mật khẩu
                        </Link>
                        <Link to="/signup" className="link-create">
                            Tạo tài khoản ngay
                        </Link>
                    </div>
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
            </div>
        </div>
    );
};

export default Signin;
