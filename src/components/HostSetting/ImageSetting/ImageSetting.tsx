import ListImageInSetting from '../../ListImage/ListImageInSetting';

import './ImageSetting.scss';

const ImageSetting = (props:any) => {
    return (
        <div className="setting-image">
            <div className="header-setting__image">
                <p>Hình ảnh</p>
                <p>Chỉnh sửa</p>
            </div>
            <ListImageInSetting listImage={props?.listImage} thumbnail={props?.thumbnail} />
        </div>
    );
};

export default ImageSetting;
