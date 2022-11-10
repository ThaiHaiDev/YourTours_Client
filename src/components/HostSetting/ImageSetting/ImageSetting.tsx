import ListImage from '../../ListImage/ListImage';

import './ImageSetting.scss';

const ImageSetting = (props:any) => {
    return (
        <div className="setting-image">
            <div className="header-setting__image">
                <p>Hình ảnh</p>
                <p>Chỉnh sửa</p>
            </div>
            <ListImage listImage={props?.listImage} thumbnail={props?.thumbnail} />
        </div>
    );
};

export default ImageSetting;
