import { useState } from "react";
import OTPBoxActiveAccount from "../../../components/OTPBoxActiveAccount/OTPBoxActiveAccount";

import './ActiveAccount.scss';

const ActiveAccount = () => {
    const [showOTP, setShowOTP] = useState<boolean>(false);

    const handleShowOTP = () => {
        setShowOTP(true)
    }

    const handleSubmitOTP = (value : any) => {

    }
    return (
        <>
            <h2>Kích hoạt tài khoản</h2>
            <p className="desc-info-content">
                Tài khoản của bạn khi đã kích hoạt có thể mở rộng hơn các đặc quyền
            </p>
            <div style={{marginTop: '50px'}}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    {!showOTP && <button className="btn-active" onClick={handleShowOTP}>Kích hoạt</button>}
                </div>
                {showOTP && <OTPBoxActiveAccount handleSubmitOTP={handleSubmitOTP}/>}
            </div>
        </>
    );
};

export default ActiveAccount;
