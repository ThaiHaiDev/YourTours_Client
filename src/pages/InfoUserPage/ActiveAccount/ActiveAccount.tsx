import { useState } from 'react';
import OTPBoxActiveAccount from '../../../components/OTPBoxActiveAccount/OTPBoxActiveAccount';
import userApi from '../../../services/userApi';

import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import './ActiveAccount.scss';

const ActiveAccount = () => {
    const [showOTP, setShowOTP] = useState<boolean>(false);

    const { enqueueSnackbar } = useSnackbar();

    const handleShowOTP = () => {
        userApi
            .sendEmailActiveAccount()
            .then(() => {
                setShowOTP(true);
                enqueueSnackbar('Đã gửi OTP về gmail của bạn', { variant: 'success' });
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    const handleSubmitOTP = (value: any) => {
        userApi
        .activeAccount(value)
        .then(() => {
            enqueueSnackbar('Tài khoản của bạn đã được kích hoạt', { variant: 'success' });
        })
        .catch((error: AxiosError<any>) => {
            enqueueSnackbar(error.response?.data.message, { variant: 'error' });
        });
    };
    return (
        <>
            <h2>Kích hoạt tài khoản</h2>
            <p className="desc-info-content">Tài khoản của bạn khi đã kích hoạt có thể mở rộng hơn các đặc quyền</p>
            <div style={{ marginTop: '50px' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {!showOTP && (
                        <button className="btn-active" onClick={handleShowOTP}>
                            Kích hoạt
                        </button>
                    )}
                </div>
                {showOTP && <OTPBoxActiveAccount handleSubmitOTP={handleSubmitOTP} />}
            </div>
        </>
    );
};

export default ActiveAccount;
