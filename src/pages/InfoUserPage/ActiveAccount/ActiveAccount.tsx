import { useState } from 'react';
import OTPBoxActiveAccount from '../../../components/OTPBoxActiveAccount/OTPBoxActiveAccount';
import userApi from '../../../services/userApi';

import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

import './ActiveAccount.scss';

const ActiveAccount = () => {
    const user = useSelector((state: RootState) => state.user);

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
            {user.current?.status !== 'ACTIVE' ? (
                <>
                    <h2>Kích hoạt tài khoản</h2>
                    <p className="desc-info-content">
                        Tài khoản của bạn khi đã kích hoạt có thể mở rộng hơn các đặc quyền
                    </p>
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
            ) : (
                <>
                    <h2>Tài khoản của bạn đã được kích hoạt</h2>
                    <div style={{display: 'grid', justifyContent: 'center', alignItems: 'center', marginTop: '140px'}}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <img src="https://img.icons8.com/ios/100/null/ok--v1.png" alt='active-success'/>
                        </div>
                        <h1 style={{color: '#66bb6a'}}>Tài khoản của bạn đã được kích hoạt</h1>
                    </div>
                </>
            )}
        </>
    );
};

export default ActiveAccount;
