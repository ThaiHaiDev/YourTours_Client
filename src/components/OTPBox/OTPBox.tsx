import { ChangeEvent, useEffect, useState } from 'react';
import authApi from '../../services/authApi';
import './OTPBox.scss';

const OTPBox = (props: any) => {
    const [otpCode, setOptCode] = useState<string>('');

    const clickEvent = (last: any) => {
        document.getElementById(last)?.focus();
    };

    useEffect(() => {
        document.getElementById('ist')?.focus();
    }, []);

    const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setOptCode(otpCode + event.currentTarget?.value);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const newOtp = {
            otp: otpCode,
        };
        if (props.handleSubmitOTP) {
            props.handleSubmitOTP(newOtp);
        }
    };

    const handleReSendEmail = async () => {
        try {
            const newDataReSend = {
                email: props.emailSend,
                otpType: "CREATE_ACCOUNT"
            }
            await authApi.reSendOtp(newDataReSend).then((dataRe) => {
                // dispatch(userSlice.actions.signup(data))
                console.log(dataRe)
            })
            
        } catch (error) {
            console.log(error);
        }
    }

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
                            onChange={nameChangeHandler}
                        />
                        <input
                            type="text"
                            id="sec"
                            maxLength={1}
                            onKeyUp={() => clickEvent('third')}
                            onChange={nameChangeHandler}
                        />
                        <input
                            type="text"
                            id="third"
                            maxLength={1}
                            onKeyUp={() => clickEvent('fourth')}
                            onChange={nameChangeHandler}
                        />
                        <input
                            type="text"
                            id="fourth"
                            maxLength={1}
                            onKeyUp={() => clickEvent('fifth')}
                            onChange={nameChangeHandler}
                        />
                        <input
                            type="text"
                            id="fifth"
                            maxLength={1}
                            onKeyUp={() => clickEvent('')}
                            onChange={nameChangeHandler}
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
