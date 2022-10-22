import ConvenientItem from "../../../components/ConvenientItem/ConvenientItem";
import ImageSetting from "../../../components/HostSetting/ImageSetting/ImageSetting";
import NavbarOwner from "../../../components/NavbarOwner/NavbarOwner";
import ScrollspyComponent from "../../../components/Scrollspy/Scrollspy";

const infoLink = {
    name: 'Tiện nghi',
    urlLink: '/host/setting/convenient',
};

const item = ['', 'section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7'];

const children = [
    {
        id: '#section1',
        to: 'section1',
        info: 'Phổ biến',
        comp: <ConvenientItem />,
    },
    {
        id: '#section2',
        to: 'section2',
        info: 'Phòng tắm',
        comp: <ImageSetting />,
    },
    {
        id: '#section3',
        to: 'section3',
        info: 'Phòng ngủ và giặc ủi',
        comp: <ImageSetting />,
    },
    {
        id: '#section4',
        to: 'section4',
        info: 'Giải trí',
        comp: <ImageSetting />,
    },
    {
        id: '#section5',
        to: 'section5',
        info: 'Gia đình',
        comp: <ImageSetting />,
    },
    {
        id: '#section6',
        to: 'section6',
        info: 'Hệ thống sưởi và làm mát',
        comp: <ImageSetting />,
    },
    {
        id: '#section7',
        to: 'section7',
        info: 'An toàn nơi ở',
        comp: <ImageSetting />,
    },
];


const ConvenientOwnerSetting = () => {
    return (
        <div className="owner-convenient__setting">
            <NavbarOwner />
            <ScrollspyComponent children={children} item={item} infoLink={infoLink} />
        </div>
    );
};

export default ConvenientOwnerSetting;
