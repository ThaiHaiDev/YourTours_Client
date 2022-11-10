import ConvenientItem from "../../../components/ConvenientItem/ConvenientItem";
import NavbarOwner from "../../../components/NavbarOwner/NavbarOwner";
import ScrollspyComponent from "../../../components/Scrollspy/Scrollspy";


const infoLink = {
    name: 'Tiện nghi',
    urlLink: '/host/setting/convenient',
};

const item = ['', 'section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7'];

const backUrl = '/host/setting'

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
        comp: <ConvenientItem />,
    },
    {
        id: '#section3',
        to: 'section3',
        info: 'Phòng ngủ và giặc ủi',
        comp: <ConvenientItem />,
    },
    {
        id: '#section4',
        to: 'section4',
        info: 'Giải trí',
        comp: <ConvenientItem />,
    },
    {
        id: '#section5',
        to: 'section5',
        info: 'Gia đình',
        comp: <ConvenientItem />,
    },
    {
        id: '#section6',
        to: 'section6',
        info: 'Hệ thống sưởi và làm mát',
        comp: <ConvenientItem />,
    },
    {
        id: '#section7',
        to: 'section7',
        info: 'An toàn nơi ở',
        comp: <ConvenientItem />,
    },
];


const ConvenientOwnerSetting = () => {
    return (
        <div className="owner-convenient__setting">
            <NavbarOwner />
            <ScrollspyComponent children={children} item={item} infoLink={infoLink} backUrl={backUrl} />
        </div>
    );
};

export default ConvenientOwnerSetting;
