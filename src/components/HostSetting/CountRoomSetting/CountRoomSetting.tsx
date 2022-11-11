import { useNavigate } from 'react-router-dom';
import './CountRoomSetting.scss';

const CountRoomSetting = (props:any) => {
    const navigate = useNavigate();

    const handleChangePage = () => {
        navigate('/host/setting/countroomdetail')
    }

    return (
        <div className="setting-count__room">
            <div className="header-setting__count__room">
                <p>Chỗ ở và phòng</p>
            </div>
            <div className="content-count__room">
                <div className="title-count__room">
                    <h3>Loại chỗ ở</h3>
                    <p>Mặc định</p>
                </div>
                <p className="item-room">Loại phòng thuê: Resort</p>
                <p className="item-room">Loại hình cho thuê: Phòng riêng</p>

                <div className="title-count__room">
                    <h3>Phòng ngủ và không gian khác</h3>
                    <p onClick={handleChangePage}>Chỉnh sửa</p>
                </div>
                {props?.countRoom?.map((count:any, index:number) => (
                    <p className="item-room" key={index}>{`${count.roomCategoryName} : ${count.number}`}</p>
                ))}
                <p>Khách có thể dùng chung một số khu vực</p>
            </div>
            {/* <ListImage /> */}
        </div>
    );
};

export default CountRoomSetting;
