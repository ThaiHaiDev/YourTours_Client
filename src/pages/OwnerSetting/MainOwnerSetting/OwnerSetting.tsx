import NavbarOwner from '../../../components/NavbarOwner/NavbarOwner';

import './OwnerSetting.scss';
import TabComponent from './TabComponent';

const OwnerSetting = () => {
    return (
        <div className="owner__setting">
            <NavbarOwner />
            <div className="welcome-card">
                <div className="welcome-content">
                    <h1>Hôm nay bạn thế nào</h1>
                    <p>Chào mừng bạn! Bạn sắp trở thành một Chủ nhà tuyệt vời. Bắt đầu ngay nào.</p>
                </div>
                <div className="tab-content">
                    <TabComponent />
                </div>
            </div>
        </div>
    );
};

export default OwnerSetting;
