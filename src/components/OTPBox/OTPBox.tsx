import { ChangeEvent, useEffect, useState } from 'react';
import authApi from '../../services/authApi';
import './OTPBox.scss';

import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';
import { OTPErrorResponse, ReSendOTPRequest } from '../../share/models/auth';

interface OTPBoxData {
    handleSubmitOTP: (otp: {}) => void;
    emailSend: string;
}

const OTPBox = (props: OTPBoxData) => {
    const [O1, setO1] = useState<string>('')
    const [O2, setO2] = useState<string>('')
    const [O3, setO3] = useState<string>('')
    const [O4, setO4] = useState<string>('')
    const [O5, setO5] = useState<string>('')

    const { enqueueSnackbar } = useSnackbar();

    const clickEvent = (last: string) => {
        document.getElementById(last)?.focus();
    };

    useEffect(() => {
        document.getElementById('ist')?.focus();
    }, []);

    const nameChangeHandler1 = (event: ChangeEvent<HTMLInputElement>) => {
        setO1(event.currentTarget?.value)
    };

    const nameChangeHandler2 = (event: ChangeEvent<HTMLInputElement>) => {
        setO2(event.currentTarget?.value)
    };

    const nameChangeHandler3 = (event: ChangeEvent<HTMLInputElement>) => {
        setO3(event.currentTarget?.value)
    };

    const nameChangeHandler4 = (event: ChangeEvent<HTMLInputElement>) => {
        setO4(event.currentTarget?.value)
    };

    const nameChangeHandler5 = (event: ChangeEvent<HTMLInputElement>) => {
        setO5(event.currentTarget?.value)
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newOtp = {
            otp: O1 + O2 + O3 + O4 + O5,
        };
        if (props.handleSubmitOTP) {
            props.handleSubmitOTP(newOtp);
        }
    };

    const handleReSendEmail = () => {
        const newDataReSend = {
            email: props.emailSend,
            otpType: 'CREATE_ACCOUNT',
        };
        authApi
            .reSendOtp(newDataReSend)
            .then((dataRe) => {
                console.log(dataRe);
            })
            .catch((error: AxiosError<OTPErrorResponse>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    return (
        <div className="otp-box">
            <div className="container">
                <h1>ENTER OTP</h1>
                <p>
                    Để bảo mật thông tin, chúng tôi cần bạn xác thực tài khoản. Chúng tôi đã gửi cho bạn mã OTP xác thực
                    qua gmail {`${props.emailSend.slice(0, 2)}****@***.***`}. Bạn vui lòng kiểm tra gmail và nhập mã xác
                    thực vào đây:
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="userInput">
                        <input
                            type="text"
                            id="ist"
                            maxLength={1}
                            onKeyUp={() => clickEvent('sec')}
                            onChange={nameChangeHandler1}
                        />
                        <input
                            type="text"
                            id="sec"
                            maxLength={1}
                            onKeyUp={() => clickEvent('third')}
                            onChange={nameChangeHandler2}
                        />
                        <input
                            type="text"
                            id="third"
                            maxLength={1}
                            onKeyUp={() => clickEvent('fourth')}
                            onChange={nameChangeHandler3}
                        />
                        <input
                            type="text"
                            id="fourth"
                            maxLength={1}
                            onKeyUp={() => clickEvent('fifth')}
                            onChange={nameChangeHandler4}
                        />
                        <input
                            type="text"
                            id="fifth"
                            maxLength={1}
                            onKeyUp={() => clickEvent('')}
                            onChange={nameChangeHandler5}
                        />
                    </div>
                    <button type="submit" className="customs-btn" onClick={handleSubmit}>
                        Xác thực
                    </button>
                </form>
                <p className="re-send" onClick={handleReSendEmail}>
                    Bạn không nhận được mã code, gửi lại?
                </p>
            </div>
        </div>
    );
};

export default OTPBox;
