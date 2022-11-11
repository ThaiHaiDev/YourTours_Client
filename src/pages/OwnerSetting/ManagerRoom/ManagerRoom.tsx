import ImageSetting from '../../../components/HostSetting/ImageSetting/ImageSetting';
import LocationSetting from '../../../components/HostSetting/LocationSetting/LocationSetting';
import NavbarOwner from '../../../components/NavbarOwner/NavbarOwner';
import ScrollspyComponent from '../../../components/Scrollspy/Scrollspy';
import TittleSetting from '../../../components/HostSetting/TitleSetting/TitleSetting';

import './ManagerRoom.scss';
import ConvenientSetting from '../../../components/HostSetting/ConvenientSetting/ConvenientSetting';
import CountRoomSetting from '../../../components/HostSetting/CountRoomSetting/CountRoomSetting';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import homeApi from '../../../services/homeApi';
import ValuationDiscountSetting from '../../../components/HostSetting/ValuationDiscountSetting/ValuationDiscount';

const infoLink = {
    name: 'Chi tiết nhà cho thuê',
    urlLink: '/host/setting',
};

const item = ['', 'section1', 'section2', 'section3', 'section4', 'section5', 'section6'];

const ManagerRoom = () => {
    const [dataHomeDetail, setDataHomeDetail] = useState<any>();

    const infoRoom = {
        name: dataHomeDetail?.name,
        desc: dataHomeDetail?.description,
        guide: dataHomeDetail?.guide,
        refundPolicy: dataHomeDetail?.refundPolicy
    }

    const children = [
        {
            id: '#section1',
            to: 'section1',
            info: 'Hình ảnh',
            comp: <ImageSetting listImage={dataHomeDetail?.imagesOfHome} thumbnail={dataHomeDetail?.thumbnail}/>,
        },
        {
            id: '#section2',
            to: 'section2',
            info: 'Thông tin cơ bản',
            comp: <TittleSetting infoRoom={infoRoom} />,
        },
        {
            id: '#section3',
            to: 'section3',
            info: 'Chổ ở và phòng',
            comp: <CountRoomSetting countRoom={dataHomeDetail?.numberOfRooms} />,
        },
        {
            id: '#section4',
            to: 'section4',
            info: 'Vị trí',
            comp: <LocationSetting />,
        },
        {
            id: '#section5',
            to: 'section5',
            info: 'Tiện nghi',
            comp: <ConvenientSetting />,
        },
        {
            id: '#section6',
            to: 'section6',
            info: 'Định giá và tình trạng phòng',
            comp: <ValuationDiscountSetting />,
        },
    ];

    const params = useParams();

    console.log(dataHomeDetail)

    useEffect(() => {
        homeApi.getRoomCategory(params.idHome).then((dataResponse: any) => {
            setDataHomeDetail(dataResponse.data)
        })
    }, [params.idHome])

    return (
        <div className="manager-room">
            <NavbarOwner />
            <ScrollspyComponent children={children} item={item} infoLink={infoLink} />
        </div>
    );
};

export default ManagerRoom;
