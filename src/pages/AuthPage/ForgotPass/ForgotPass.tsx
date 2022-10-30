import './ForgotPass.scss';
import { AxiosError } from 'axios';

import Navbar from '../../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import authApi from '../../../services/authApi';
import {
    ForgotPasswordErrorResponse,
    ForgotPasswordRequest,
    OTPErrorResponse,
    OTPForgotPasswordRequest,
} from '../../../share/models/auth';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import OTPBoxForgotPass from '../../../components/OTPBoxForgotPass/OTPBoxForgotPass';

const ForgotPass = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotPasswordRequest>();

    const { enqueueSnackbar } = useSnackbar();

    const [hidenNoti, setHidenNoti] = useState<boolean>(false);

    const onSubmit: SubmitHandler<ForgotPasswordRequest> = (data: ForgotPasswordRequest) => {
        authApi
            .forgotPassword(data)
            .then((userData) => {
                console.log(userData);
                enqueueSnackbar('Thành công', { variant: 'success' });
                setHidenNoti(true);
                reset();
            })
            .catch((error: AxiosError<ForgotPasswordErrorResponse>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    const handleSubmitOTP = (otp: OTPForgotPasswordRequest) => {
        console.log(otp);
        authApi
            .otpForgotPassword(otp)
            .then((dataResend) => {
                enqueueSnackbar('Đổi mật khẩu thành công', { variant: 'success' });
            })
            .catch((error: AxiosError<OTPErrorResponse>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    return (
        <div>
            <Navbar />
            <div className="signin">
                <div className="container__sign-in">
                    {!hidenNoti ? (
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1>Lấy lại mật khẩu</h1>
                            <span>
                                Nhập địa chỉ email sử dụng để tạo tài khoản Yourtours và chúng tôi sẽ gửi link để đặt
                                lại tài khoản đến bạn
                            </span>
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
                            <button type="submit">Lấy lại mật khẩu</button>
                        </form>
                    ) : (
                        <OTPBoxForgotPass handleSubmitOTP={handleSubmitOTP} emailSend="test" />
                    )}
                    <div className="forgot-password">
                        <p>Đăng nhập</p>
                        <Link to="/signup" className="link-create">
                            Tạo tài khoản ngay
                        </Link>
                    </div>
                    {hidenNoti && (
                        <div className="noti-reset">
                            <p>
                                Chúng tôi đã gửi OTP để thay đổi mật khẩu thông qua email. Vui lòng kiểm tra email của
                                bạn.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ForgotPass;
