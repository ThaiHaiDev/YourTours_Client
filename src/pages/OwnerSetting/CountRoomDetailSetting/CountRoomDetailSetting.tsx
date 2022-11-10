import NavbarOwner from '../../../components/NavbarOwner/NavbarOwner';

import './CountRoomDetailSetting.scss';

const CountRoomDetailSetting = () => {
    return (
        <div className="count-roomdetal__setting">
            <NavbarOwner />
            <div className="content-count__roomdetail__setting">
                <h3>Phòng và không gian</h3>
                <p>Thêm hoặc chỉnh sửa khu vực mà khách có thể sử dụng và đánh dấu không gian họ sẽ dùng chung với người khác</p>
            </div>
        </div>
    );
};

export default CountRoomDetailSetting;
