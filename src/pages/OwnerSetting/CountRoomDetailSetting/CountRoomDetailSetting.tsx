import DialogCountRoom from '../../../components/DialogCountRoom/DialogCountRoom';
import ImageOfRoomSetting from '../../../components/HostSetting/ImageOfRoomSetting/ImageOfRoomSetting';
import NavbarOwner from '../../../components/NavbarOwner/NavbarOwner';

import './CountRoomDetailSetting.scss';

const CountRoomDetailSetting = () => {
    return (
        <div className="count-roomdetal__setting">
            <NavbarOwner />
            <div className="content-count__roomdetail__setting">
                <h1>Phòng và không gian</h1>
                <p>Thêm hoặc chỉnh sửa khu vực mà khách có thể sử dụng và đánh dấu không gian họ sẽ dùng chung với người khác</p>
                <div className="card-roomdetail__count">
                    <p>Phòng ngủ · Phòng tắm đầy đủ · Bồn tắm nước nóng · Ngoại thất</p>
                    <DialogCountRoom />
                </div>
                <ImageOfRoomSetting />
            </div>
        </div>
    );
};

export default CountRoomDetailSetting;
