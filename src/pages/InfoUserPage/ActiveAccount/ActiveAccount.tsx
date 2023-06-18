import { useState } from 'react';
import OTPBoxActiveAccount from '../../../components/OTPBoxActiveAccount/OTPBoxActiveAccount';
import userApi from '../../../services/userApi';

import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

import './ActiveAccount.scss';
import { t } from 'i18next';

const ActiveAccount = () => {
    const user = useSelector((state: RootState) => state.user);

    const [showOTP, setShowOTP] = useState<boolean>(false);

    const { enqueueSnackbar } = useSnackbar();

    const handleShowOTP = () => {
        userApi
            .sendEmailActiveAccount()
            .then(() => {
                setShowOTP(true);
                enqueueSnackbar(t('message.OTPActived'), { variant: 'success' });
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    const handleSubmitOTP = (value: any) => {
        userApi
            .activeAccount(value)
            .then(() => {
                enqueueSnackbar(t('message.isActiveAccount'), { variant: 'success' });
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };
    return (
        <>
            {user.current?.status !== 'ACTIVE' ? (
                <>
                    <h2>{t('title.activeAccout')}</h2>
                    <p className="desc-info-content">{t('contentMain.roleActive')}</p>
                    <div style={{ marginTop: '50px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            {!showOTP && (
                                <button className="btn-active" onClick={handleShowOTP}>
                                    {t('common.actived')}
                                </button>
                            )}
                        </div>
                        {showOTP && <OTPBoxActiveAccount handleSubmitOTP={handleSubmitOTP} />}
                    </div>
                </>
            ) : (
                <>
                    <h2>{t('message.isActiveAccount')}</h2>
                    <div
                        style={{ display: 'grid', justifyContent: 'center', alignItems: 'center', marginTop: '140px' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src="https://img.icons8.com/ios/100/null/ok--v1.png" alt="active-success" />
                        </div>
                        <h1 style={{ color: '#66bb6a' }}>{t('message.isActiveAccount')}</h1>
                    </div>
                </>
            )}
        </>
    );
};

export default ActiveAccount;
