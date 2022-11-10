import ImageSetting from '../../../components/HostSetting/ImageSetting/ImageSetting';
import LocationSetting from '../../../components/HostSetting/LocationSetting/LocationSetting';
import NavbarOwner from '../../../components/NavbarOwner/NavbarOwner';
import ScrollspyComponent from '../../../components/Scrollspy/Scrollspy';
import TittleSetting from '../../../components/HostSetting/TitleSetting/TitleSetting';

import './ManagerRoom.scss';
import ConvenientSetting from '../../../components/HostSetting/ConvenientSetting/ConvenientSetting';
import CountRoomSetting from '../../../components/HostSetting/CountRoomSetting/CountRoomSetting';

const infoLink = {
    name: 'Chi tiết nhà cho thuê',
    urlLink: '/host/setting',
};

const item = ['', 'section1', 'section2', 'section3', 'section4'];

const children = [
    {
        id: '#section1',
        to: 'section1',
        info: 'Hình ảnh',
        comp: <ImageSetting />,
    },
    {
        id: '#section2',
        to: 'section2',
        info: 'Thông tin cơ bản',
        comp: <TittleSetting />,
    },
    {
        id: '#section3',
        to: 'section3',
        info: 'Chổ ở và phòng',
        comp: <CountRoomSetting />,
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
        comp: <ConvenientSetting />,
    },
];

const ManagerRoom = () => {
    return (
        <div className="manager-room">
            <NavbarOwner />
            <ScrollspyComponent children={children} item={item} infoLink={infoLink} />
        </div>
    );
};

export default ManagerRoom;
