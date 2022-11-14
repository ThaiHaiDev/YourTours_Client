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
        // Call api ở đây với /:id của tiện ích từ cha truyền xuống

        if (checkStatus === false) {
            const dataRequest = {
                isHave: null,
                amenityId: props?.amenityId,
                homeId: params.idHome,
            };
            amenityCategoryApi.updateActiveConvenientItem(dataRequest).then(() => {});
            setCheckStatus(null);
        } else {
            const dataRequest = {
                isHave: false,
                amenityId: props?.amenityId,
                homeId: params.idHome,
            };
            amenityCategoryApi.updateActiveConvenientItem(dataRequest).then(() => {});
            setCheckStatus(false);
        }
    };

    const handleCheckYes = () => {
        // Call api ở đây với /:id của tiện ích từ cha truyền xuống
        
        if (checkStatus === true) {
            setCheckStatus(null);
            const dataRequest = {
                isHave: null,
                amenityId: props?.amenityId,
                homeId: params.idHome,
            };
            amenityCategoryApi.updateActiveConvenientItem(dataRequest).then(() => {});
        } else {
            setCheckStatus(true);
            const dataRequest = {
                isHave: true,
                amenityId: props?.amenityId,
                homeId: params.idHome,
            };
            amenityCategoryApi.updateActiveConvenientItem(dataRequest).then(() => {});
        }
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
