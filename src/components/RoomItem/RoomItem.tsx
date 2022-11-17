import React from 'react';
import Slider from 'react-slick';
import './RoomItem.scss';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import mapProvince from '../../utils/mapProvince';

const RoomItem = (props: any) => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="col l-3 m-6 c-12">
            <div className="room-item">
                <Slider {...settings}>
                    {props?.infoRoom?.imagesOfHome?.map((image: any, index: number) => (
                        <div key={index}>
                            <img
                                src={image?.path}
                                alt="room_hot"
                            />
                        </div>
                    ))}

                </Slider>
                <div className="love_room">
                    <FavoriteOutlinedIcon className="icon_love" />
                </div>
                <div className="info__room">
                    <h2>{props?.infoRoom?.name}</h2>
                    <div className="obility__room">
                        <p>Resort</p>
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
                        <p>{mapProvince(props?.infoRoom?.provinceCode)}</p>
                    </div>
                    <div className="price__room">
                        <p>Giá: 700.000 VND / Đêm</p>
                        <p>Đánh giá: 4.5</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomItem;
