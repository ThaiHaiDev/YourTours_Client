import ImageSetting from '../../../components/HostSetting/ImageSetting/ImageSetting';
import LocationSetting from '../../../components/HostSetting/LocationSetting/LocationSetting';
import NavbarOwner from '../../../components/NavbarOwner/NavbarOwner';
import ScrollspyComponent from '../../../components/Scrollspy/Scrollspy';
import TittleSetting from '../../../components/HostSetting/TitleSetting/TitleSetting';

import './OwnerSetting.scss';
import ConvenientSetting from '../../../components/HostSetting/ConvenientSetting/ConvenientSetting';

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
        info: 'Vị trí',
        comp: <LocationSetting />,
    },
    {
        id: '#section4',
        to: 'section4',
        info: 'Tiện nghi',
        comp: <ConvenientSetting />,
    },
];

const OwnerSetting = () => {
    return (
        <div className="owner__setting">
            <NavbarOwner />
            <ScrollspyComponent children={children} item={item} infoLink={infoLink} />
        </div>
    );
};

export default OwnerSetting;
