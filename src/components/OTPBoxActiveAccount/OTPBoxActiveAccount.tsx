import { ChangeEvent, useEffect, useState } from 'react';
import './OTPBoxActiveAccount.scss';

import { OTPActiveAccountRequest } from '../../share/models/auth';

interface OTPBoxActiveAccountData {
    handleSubmitOTP: (otp: OTPActiveAccountRequest) => void;
    emailSend?: string;
}

const OTPBoxActiveAccount = (props: OTPBoxActiveAccountData) => {
    const [O1, setO1] = useState<string>('');
    const [O2, setO2] = useState<string>('');
    const [O3, setO3] = useState<string>('');
    const [O4, setO4] = useState<string>('');
    const [O5, setO5] = useState<string>('');

    const clickEvent = (last: string) => {
        document.getElementById(last)?.focus();
    };

    useEffect(() => {
        document.getElementById('ist')?.focus();
    }, []);

    const nameChangeHandler1 = (event: ChangeEvent<HTMLInputElement>) => {
        setO1(event.currentTarget?.value);
    };

    const nameChangeHandler2 = (event: ChangeEvent<HTMLInputElement>) => {
        setO2(event.currentTarget?.value);
    };

    const nameChangeHandler3 = (event: ChangeEvent<HTMLInputElement>) => {
        setO3(event.currentTarget?.value);
    };

    const nameChangeHandler4 = (event: ChangeEvent<HTMLInputElement>) => {
        setO4(event.currentTarget?.value);
    };

    const nameChangeHandler5 = (event: ChangeEvent<HTMLInputElement>) => {
        setO5(event.currentTarget?.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newOtp = {
            otp: O1 + O2 + O3 + O4 + O5,
        };
        console.log(newOtp);
    };
    return (
        <div className="otp-box-active__account">
            <div className="container">
                <h1>Nhập mã code mà chúng tôi đã gửi về gmail của bạn</h1>
                <form onSubmit={handleSubmit}>
                    <div className="userInput">
                        <input
                            className="input-otp"
                            type="text"
                            id="ist"
                            maxLength={1}
                            onKeyUp={() => clickEvent('sec')}
                            onChange={nameChangeHandler1}
                        />
                        <input
                            className="input-otp"
                            type="text"
                            id="sec"
                            maxLength={1}
                            onKeyUp={() => clickEvent('third')}
                            onChange={nameChangeHandler2}
                        />
                        <input
                            className="input-otp"
                            type="text"
                            id="third"
                            maxLength={1}
                            onKeyUp={() => clickEvent('fourth')}
                            onChange={nameChangeHandler3}
                        />
                        <input
                            className="input-otp"
                            type="text"
                            id="fourth"
                            maxLength={1}
                            onKeyUp={() => clickEvent('fifth')}
                            onChange={nameChangeHandler4}
                        />
                        <input
                            className="input-otp"
                            type="text"
                            id="fifth"
                            maxLength={1}
                            onKeyUp={() => clickEvent('')}
                            onChange={nameChangeHandler5}
                        />
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <button type="submit" className="customs-btn">
                            Xác thực
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OTPBoxActiveAccount;
