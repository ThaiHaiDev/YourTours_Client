import ListImage from '../../ListImage/ListImage';

import './ImageSetting.scss';

const ImageSetting = () => {
    return (
        <div className="setting-image">
            <div className="header-setting__image">
                <p>Hình ảnh</p>
                <p>Chỉnh sửa</p>
            </div>
            <ListImage />
        </div>
    );
};

export default ImageSetting;
