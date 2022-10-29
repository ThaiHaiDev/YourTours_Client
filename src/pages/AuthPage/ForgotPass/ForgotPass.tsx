import './ForgotPass.scss';
import { AxiosError } from 'axios';

import Navbar from '../../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import authApi from '../../../services/authApi';
import { ForgotPasswordRequest, LoginErrorResponse } from '../../../share/models/auth';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import userSlice from '../userSlice';

const ForgotPass = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotPasswordRequest>();

    const { enqueueSnackbar } = useSnackbar();

    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<ForgotPasswordRequest> = (data: ForgotPasswordRequest) => {
        // authApi
        //     .signIn(data)
        //     .then((userData) => {
        //         dispatch(userSlice.actions.signin(userData.data));
        //         console.log(userData)
        //         enqueueSnackbar('Đăng nhập thành công', { variant: 'success' });
        //         reset();
        //         document.location = '/';
        //     })
        //     .catch((error: AxiosError<LoginErrorResponse>) => {
        //         enqueueSnackbar(error.response?.data.message, { variant: 'error' });
        //     });
    };

    return (
        <div>
            <Navbar />
            <div className="signin">
                <div className="container__sign-in">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1>Lấy lại mật khẩu</h1>
                        <label>
                            <input
                                type="email"
                                placeholder="Email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'This is not a valid email',
                                    },
                                })}
                            />
                            {errors.email && (
                                <span className="message_error">{`${errors.email && errors.email?.message}`}</span>
                            )}
                        </label>
                        <button type="submit">Lấy lại mật khẩu</button>
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

export default ForgotPass;
