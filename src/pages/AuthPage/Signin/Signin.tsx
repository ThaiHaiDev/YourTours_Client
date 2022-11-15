import './Signin.scss';
import { AxiosError } from 'axios';

import Navbar from '../../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import authApi from '../../../services/authApi';
import { LoginErrorResponse, LoginRequest } from '../../../share/models/auth';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import userSlice from '../userSlice';

const Signin = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginRequest>();

    const { enqueueSnackbar } = useSnackbar();

    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<LoginRequest> = (data: LoginRequest) => {
        authApi
            .signIn(data)
            .then((userData) => {
                dispatch(userSlice.actions.signin(userData.data));
                enqueueSnackbar('Đăng nhập thành công', { variant: 'success' });
                reset();
                document.location = '/';
            })
            .catch((error: AxiosError<LoginErrorResponse>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    return (
        <div>
            <Navbar />
            <div className="signin">
                <div className="container__sign-in">
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                type="password"
                                placeholder="Enter password"
                                {...register('password', {
                                    required: 'Mật khẩu được yêu cầu',
                                    maxLength: {
                                        value: 16,
                                        message: 'Mật khẩu chỉ giới hạn 16 kí tự',
                                    },
                                })}
                            />
                            {errors.password && <span className="message_error">{`${errors.password?.message}`}</span>}
                        </label>
                        <button type="submit">Đăng nhập</button>
                    </form>
                    <div className="forgot-password">
                        <p>Quên mật khẩu</p>
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
