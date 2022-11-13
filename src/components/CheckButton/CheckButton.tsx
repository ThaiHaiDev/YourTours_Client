import './CheckButton.scss';

import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import amenityCategoryApi from '../../services/amenityCategoryApi';

interface CheckButtonData {
    active: boolean | null;
    amenityId: string;
}

const CheckButton = (props: CheckButtonData) => {
    const [checkStatus, setCheckStatus] = useState<boolean | null>(props.active);
    const params = useParams();

    const handleCheckNo = () => {
        setCheckStatus(false);
        const dataRequest = {
            isHave: false,
            amenityId: props?.amenityId,
            homeId: params.idHome,
        };
        amenityCategoryApi.updateActiveConvenientItem(dataRequest).then(() => {});
        // Call api ở đây với /:id của tiện ích từ cha truyền xuống
    };

    const handleCheckYes = () => {
        setCheckStatus(true);
        const dataRequest = {
            isHave: true,
            amenityId: props?.amenityId,
            homeId: params.idHome,
        };
        amenityCategoryApi.updateActiveConvenientItem(dataRequest).then(() => {});
        // Call api ở đây với /:id của tiện ích từ cha truyền xuống
    };

    return (
        <div className="check-btn">
            <div className={`btn-no ${checkStatus === false ? 'check-yes' : ''}`} onClick={handleCheckNo}>
                <CloseIcon />
            </div>
            <div className={`btn-yes ${checkStatus === true ? 'check-yes' : ''}`} onClick={handleCheckYes}>
                <CheckIcon />
            </div>
        </div>
    );
};

export default CheckButton;
