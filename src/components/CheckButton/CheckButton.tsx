import './CheckButton.scss';

import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';

const CheckButton = () => {
    const [checkStatus, setCheckStatus] = useState<boolean | null>(null)

    const handleCheckNo = () => {
        setCheckStatus(false)
        // Call api ở đây với /:id của tiện ích từ cha truyền xuống
    }

    const handleCheckYes = () => {
        setCheckStatus(true)
        // Call api ở đây với /:id của tiện ích từ cha truyền xuống
    }

    return (
        <div className="check-btn">
            <div className={`btn-no ${checkStatus === false ? 'check-yes' : ''}`} onClick={handleCheckNo}><CloseIcon /></div>
            <div className={`btn-yes ${checkStatus === true ? 'check-yes' : ''}`} onClick={handleCheckYes}><CheckIcon /></div>
        </div>
    );
};

export default CheckButton;
