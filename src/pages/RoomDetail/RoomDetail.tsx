import ListImage from '../../components/ListImage/ListImage';
import Navbar from '../../components/Navbar/Navbar';

import './RoomDetail.scss';

import FmdGoodIcon from '@mui/icons-material/FmdGood';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import Convenient from '../../components/Convenient/Convenient';
import DateGo from '../../components/DateGo/DateGo';
import Dropdown from '../../components/Dropdown/Dropdown';
import DialogConvenient from '../../components/DialogConvenient/DialogConvenient';
import DateRangeDetail from '../../components/DateRangeDetail/DateRangeDetail';
import Footer from '../../components/Footer/Footer';
import BedRoomSlider from '../../components/BedRoomSlider/BedRoomSlider';

const RoomDetail = () => {
    return (
        <div className='detail-room'>
            <Navbar />
            <div className="info-room">
                <div className="header-room">
                    <h1>Khách Sạn Hoài Niệm Hội An</h1>
                    <div className="heading">
                        <div className="heading__left">
                            <div className="obility__room">
                                <p>Khách Sạn</p>
                                <img
                                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6a1fad158b76ff0ed231eceede8458f2.svg"
                                    alt="icon__star"
                                />
                                <img
                                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6a1fad158b76ff0ed231eceede8458f2.svg"
                                    alt="icon__star"
                                />
                                <img
                                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6a1fad158b76ff0ed231eceede8458f2.svg"
                                    alt="icon__star"
                                />
                                <img
                                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6a1fad158b76ff0ed231eceede8458f2.svg"
                                    alt="icon__star"
                                />
                                <img
                                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6a1fad158b76ff0ed231eceede8458f2.svg"
                                    alt="icon__star"
                                />
                            </div>
                            <div className="locate__room">
                                <FmdGoodIcon className="icon_locate" />
                                <p>Hội An, Quảng Nam</p>
                            </div>
                        </div>
                        <div className="heading__right">
                            <StarIcon className="icon_rate" />
                            <p>5.0</p>
                            <Link to="/" className="link__rate">
                                (100 lượt đánh giá)
                            </Link>
                        </div>
                    </div>
                </div>
                <ListImage />
                <div className="about-room">
                    <div className="row">
                        <div className="col l-8 m-7 c-12">
                            <div className="title-room">
                                <h1>Toàn bộ biệt thự. Chủ nhà Hải Nguyễn</h1>
                                <p className="count-detail">4 khách . 2 phòng ngủ . 2 giường . 2 phòng tắm</p>
                                <hr className="line" />
                                <Convenient />
                                <DialogConvenient />
                                <hr className="line" />
                                
                                <div className="desc-room">
                                    <h1>Giới thiệu về nhà / phòng</h1>
                                    <p>
                                        Rooms are equipped with full facilities: mineral water, free tea, coffee, cable TV, free Wi-Fi, IDD telephone, air conditioning, wardrobe, mini bar, hairdryer, electric kettle, Hooks, Hangers, Towels, Restroom with standing bathtub, Free toiletries in bathroom, Child safety door.
                                        Rooms are equipped with full facilities: mineral water, free tea, coffee, cable TV, free Wi-Fi, IDD telephone, air conditioning, wardrobe, mini bar, hairdryer, electric kettle, Hooks, Hangers, Towels, Restroom with standing bathtub, Free toiletries in bathroom, Child safety door.
                                        Rooms are equipped with full facilities: mineral water, free tea, coffee, cable TV, free Wi-Fi, IDD telephone, air conditioning, wardrobe, mini bar, hairdryer, electric kettle, Hooks, Hangers, Towels, Restroom with standing bathtub, Free toiletries in bathroom, Child safety door.
                                    </p>
                                </div>

                                <hr className="line" />
                                <div className="bed-room">
                                    <h1>Nơi bạn sẽ ngủ nghỉ</h1>
                                    <BedRoomSlider />
                                </div>

                                <hr className="line" />
                                <DateRangeDetail size="horizontal" />

                                <hr className="line" />
                                <h1>Đánh giá</h1>
                            </div>
                        </div>

                        <div className="col l-4 m-5 c-12">
                            <div className="card-book__detail">
                                <div className="price-room">700.000 VND</div>
                                <div className="date-book">
                                    <div className="title__date-book">
                                        <p>Nhận phòng</p>
                                        <p>Trả phòng</p>
                                    </div>
                                    <DateGo size="vertical" />
                                </div>
                                <div className="count__guest">
                                    <p>Số khách</p>
                                    <Dropdown />
                                </div>

                                <div className="line">
                                    <hr />
                                </div>

                                <div className="price-total">
                                    <div className="title-price">
                                        <p>700.000 x 7 ngày</p>
                                    </div>
                                    <div className="real-price">
                                        <p>4.900.000 VND</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-page'>
                <Footer />
            </div>
        </div>
    );
};

export default RoomDetail;
