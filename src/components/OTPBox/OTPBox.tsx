import { ChangeEvent, useEffect, useState } from 'react';
import './OTPBox.scss';
const OTPBox = () => {
    const [otpCode, setOptCode] = useState<string>('')

    const clickEvent = (last: any) => {
        console.log(otpCode);
        document.getElementById(last)?.focus();
    };

    useEffect(() => {
        document.getElementById('ist')?.focus();
    }, []);

    const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setOptCode(otpCode + event.currentTarget?.value);
    };

    return (
        <div className="otp-box">
            <div className="container">
                <h1>ENTER OTP</h1>
                <p>Để bảo mật thông tin, chúng tôi cần bạn xác thực tài khoản. Chúng tôi đã gửi cho bạn mã OTP xác thực qua gmail. Bạn vui lòng kiểm tra gmail và nhập mã xác thực vào đây:</p>
                    <form>
                        <div className="userInput">
                            <input type="text" id="ist" maxLength={1} onKeyUp={() => clickEvent('sec')} onChange={nameChangeHandler} />
                            <input type="text" id="sec" maxLength={1} onKeyUp={() => clickEvent('third')} onChange={nameChangeHandler} />
                            <input type="text" id="third" maxLength={1} onKeyUp={() => clickEvent('fourth')} onChange={nameChangeHandler} />
                            <input type="text" id="fourth" maxLength={1} onKeyUp={() => clickEvent('fifth')} onChange={nameChangeHandler} />
                            <input type="text" id="fifth" maxLength={1} onKeyUp={() => clickEvent('')} onChange={nameChangeHandler} />
                         </div>
                        <button className="customs-btn">Xác thực</button>
                    </form>
            </div>
        </div>
    );
};

export default OTPBox;
