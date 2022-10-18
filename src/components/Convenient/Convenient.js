import './Convenient.scss';

import SoupKitchenRoundedIcon from '@mui/icons-material/SoupKitchenRounded';
import CountertopsOutlinedIcon from '@mui/icons-material/CountertopsOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import BalconyOutlinedIcon from '@mui/icons-material/BalconyOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';
import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined';
import YardOutlinedIcon from '@mui/icons-material/YardOutlined';

const Convenient = () => {
    return (
        <div className="convenient-room">
            <h1>Nơi này có những gì cho bạn</h1>
            <div className="row">
                <div className="col l-6">
                    <div className="convenient-item">
                        <SoupKitchenRoundedIcon className="icon-convenient" />
                        <p>Bếp</p>
                    </div>
                    <div className="convenient-item">
                        <CountertopsOutlinedIcon className="icon-convenient" />
                        <p>Không gian riêng để làm việc</p>
                    </div>
                    <div className="convenient-item">
                        <PoolOutlinedIcon className="icon-convenient" />
                        <p>Hồ bơi Riêng</p>
                    </div>
                    <div className="convenient-item">
                        <BalconyOutlinedIcon className="icon-convenient" />
                        <p>Sân hiên hoặc ban công riêng</p>
                    </div>
                </div>
                <div className="col l-6">
                    <div className="convenient-item">
                        <WifiOutlinedIcon className="icon-convenient" />
                        <p>Wi-fi</p>
                    </div>
                    <div className="convenient-item">
                        <LocalParkingOutlinedIcon className="icon-convenient" />
                        <p>Chỗ đỗ xe miễn phí tại nơi ở</p>
                    </div>
                    <div className="convenient-item">
                        <ThermostatOutlinedIcon className="icon-convenient" />
                        <p>Điều hòa nhiệt độ</p>
                    </div>
                    <div className="convenient-item">
                        <YardOutlinedIcon className="icon-convenient" />
                        <p>Sân sau</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Convenient;
