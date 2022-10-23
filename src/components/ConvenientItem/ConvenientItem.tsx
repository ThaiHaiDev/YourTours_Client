import './ConvenientItem.scss';

import CheckButton from '../CheckButton/CheckButton';

const PopularConvenient = {
    title: 'Phổ biến',
    desc: 'Đây là những tiện nghi mà khách thường tìm kiếm khi đặt chỗ ở.',
    infoConvenient: [
        {
            name: 'Điều hòa nhiệt độ',
            urlAPI: '',
        },
        {
            name: 'Đồ nấu ăn cơ bản',
            urlAPI: '',
        },
        {
            name: 'Không gian riêng để làm việc',
            urlAPI: '',
        },
        {
            name: 'Máy sấy quần áo',
            urlAPI: '',
        },
        {
            name: 'Hệ thống sưởi',
            urlAPI: '',
        },
    ],
};

const ConvenientItem = () => {
    return (
        <div className="convenient-item">
            <div className="title-item">
                <h1>{PopularConvenient.title}</h1>
                <span>{PopularConvenient.desc}</span>
            </div>
            {PopularConvenient.infoConvenient?.map((item, index) => (
                <div>
                    <div className="item">
                        <p>{item.name}</p>
                        <CheckButton />
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default ConvenientItem;
