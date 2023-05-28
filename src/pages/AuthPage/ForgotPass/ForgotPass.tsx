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
import LoadingMaster from '../../../components/LoadingMaster/LoadingMaster';

const ForgotPass = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotPasswordRequest>();
    const [emailSend, setEmailSend] = useState<string>('');
    const [loadingMaster, setLoadingMaster] = useState<boolean>(false);

    const { enqueueSnackbar } = useSnackbar();

    const [hidenNoti, setHidenNoti] = useState<boolean>(false);

    const onSubmit: SubmitHandler<ForgotPasswordRequest> = (data: ForgotPasswordRequest) => {
        setEmailSend(data.email);
        setLoadingMaster(true);
        authApi
            .forgotPassword(data)
            .then(() => {
                setLoadingMaster(false);
                enqueueSnackbar('Thành công', { variant: 'success' });
                setHidenNoti(true);
                reset();
            })
            .catch((error: AxiosError<ForgotPasswordErrorResponse>) => {
                setLoadingMaster(false);
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    const handleSubmitOTP = (otp: OTPForgotPasswordRequest) => {
        setLoadingMaster(true);
        authApi
            .otpForgotPassword(otp)
            .then(() => {
                setLoadingMaster(false);
                enqueueSnackbar('Đổi mật khẩu thành công', { variant: 'success' });
            })
            .catch((error: AxiosError<OTPErrorResponse>) => {
                setLoadingMaster(false);
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    return (
        <div>
            <Navbar />
            <div className="forgot start-background">
                <div className="stars"></div>
                <div className="stars2"></div>
                <div className="stars3"></div>
                <div className="container__sign-in">
                    <LoadingMaster loadingMaster={loadingMaster} />
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
                        <OTPBoxForgotPass handleSubmitOTP={handleSubmitOTP} emailSend={emailSend} />
                    )}
                    <div className="forgot-password">
                        <Link to="/signin" className="link__forgot-password">
                            Đăng nhập ngay
                        </Link>
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
