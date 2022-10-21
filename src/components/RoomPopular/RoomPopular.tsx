import React, { Component } from 'react';
import Slider from 'react-slick';
import './RoomPopular.scss';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class RoomPopular extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className="room__popular">
                <h1>Room nổi bậc được đặt nhiều nhất</h1>
                <div className="row">
                    <div className="col l-3 m-6 c-12">
                        <Slider {...settings}>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/c0b5943a-9c0c-449c-ab3b-cf148b8471c3.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e40a3f76-fefd-4fbb-893c-e1e2b2c6c8ca.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/788ec8d8-fdd2-4c45-b6ed-a8b44d98a8df.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/6713071b-519d-49ad-bc64-76db60d8de9d.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                        </Slider>
                        <div className="love_room">
                            <FavoriteOutlinedIcon className="icon_love" />
                        </div>
                        <div className="info__room">
                            <h2>Khách Sạn Hoài Niệm Hội An</h2>
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
                            <div className="price__room">
                                <p>Giá: 700.000 VND / Đêm</p>
                                <p>Đánh giá: 4.5</p>
                            </div>
                        </div>
                    </div>
                    <div className="col l-3 m-6 c-12">
                        <Slider {...settings}>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/c0b5943a-9c0c-449c-ab3b-cf148b8471c3.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e40a3f76-fefd-4fbb-893c-e1e2b2c6c8ca.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/788ec8d8-fdd2-4c45-b6ed-a8b44d98a8df.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/6713071b-519d-49ad-bc64-76db60d8de9d.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                        </Slider>
                        <div className="love_room">
                            <FavoriteOutlinedIcon className="icon_love" />
                        </div>
                        <div className="info__room">
                            <h2>Khách Sạn Hoài Niệm Hội An</h2>
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
                            <div className="price__room">
                                <p>Giá: 700.000 VND / Đêm</p>
                                <p>Đánh giá: 4.5</p>
                            </div>
                        </div>
                    </div>
                    <div className="col l-3 m-6 c-12">
                        <Slider {...settings}>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/c0b5943a-9c0c-449c-ab3b-cf148b8471c3.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e40a3f76-fefd-4fbb-893c-e1e2b2c6c8ca.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/788ec8d8-fdd2-4c45-b6ed-a8b44d98a8df.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/6713071b-519d-49ad-bc64-76db60d8de9d.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                        </Slider>
                        <div className="love_room">
                            <FavoriteOutlinedIcon className="icon_love" />
                        </div>
                        <div className="info__room">
                            <h2>Khách Sạn Hoài Niệm Hội An</h2>
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
                            <div className="price__room">
                                <p>Giá: 700.000 VND / Đêm</p>
                                <p>Đánh giá: 4.5</p>
                            </div>
                        </div>
                    </div>
                    <div className="col l-3 m-6 c-12">
                        <Slider {...settings}>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/c0b5943a-9c0c-449c-ab3b-cf148b8471c3.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e40a3f76-fefd-4fbb-893c-e1e2b2c6c8ca.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/788ec8d8-fdd2-4c45-b6ed-a8b44d98a8df.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/6713071b-519d-49ad-bc64-76db60d8de9d.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                        </Slider>
                        <div className="love_room">
                            <FavoriteOutlinedIcon className="icon_love" />
                        </div>
                        <div className="info__room">
                            <h2>Khách Sạn Hoài Niệm Hội An</h2>
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
                            <div className="price__room">
                                <p>Giá: 700.000 VND / Đêm</p>
                                <p>Đánh giá: 4.5</p>
                            </div>
                        </div>
                    </div>
                    <div className="col l-3 m-6 c-12">
                        <Slider {...settings}>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/c0b5943a-9c0c-449c-ab3b-cf148b8471c3.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e40a3f76-fefd-4fbb-893c-e1e2b2c6c8ca.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/788ec8d8-fdd2-4c45-b6ed-a8b44d98a8df.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/6713071b-519d-49ad-bc64-76db60d8de9d.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                        </Slider>
                        <div className="love_room">
                            <FavoriteOutlinedIcon className="icon_love" />
                        </div>
                        <div className="info__room">
                            <h2>Khách Sạn Hoài Niệm Hội An</h2>
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
                            <div className="price__room">
                                <p>Giá: 700.000 VND / Đêm</p>
                                <p>Đánh giá: 4.5</p>
                            </div>
                        </div>
                    </div>
                    <div className="col l-3 m-6 c-12">
                        <Slider {...settings}>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/c0b5943a-9c0c-449c-ab3b-cf148b8471c3.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e40a3f76-fefd-4fbb-893c-e1e2b2c6c8ca.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/788ec8d8-fdd2-4c45-b6ed-a8b44d98a8df.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/6713071b-519d-49ad-bc64-76db60d8de9d.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                        </Slider>
                        <div className="love_room">
                            <FavoriteOutlinedIcon className="icon_love" />
                        </div>
                        <div className="info__room">
                            <h2>Khách Sạn Hoài Niệm Hội An</h2>
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
                            <div className="price__room">
                                <p>Giá: 700.000 VND / Đêm</p>
                                <p>Đánh giá: 4.5</p>
                            </div>
                        </div>
                    </div>
                    <div className="col l-3 m-6 c-12">
                        <Slider {...settings}>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/c0b5943a-9c0c-449c-ab3b-cf148b8471c3.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e40a3f76-fefd-4fbb-893c-e1e2b2c6c8ca.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/788ec8d8-fdd2-4c45-b6ed-a8b44d98a8df.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/6713071b-519d-49ad-bc64-76db60d8de9d.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                        </Slider>
                        <div className="love_room">
                            <FavoriteOutlinedIcon className="icon_love" />
                        </div>
                        <div className="info__room">
                            <h2>Khách Sạn Hoài Niệm Hội An</h2>
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
                            <div className="price__room">
                                <p>Giá: 700.000 VND / Đêm</p>
                                <p>Đánh giá: 4.5</p>
                            </div>
                        </div>
                    </div>
                    <div className="col l-3 m-6 c-12">
                        <Slider {...settings}>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/c0b5943a-9c0c-449c-ab3b-cf148b8471c3.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/e40a3f76-fefd-4fbb-893c-e1e2b2c6c8ca.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/788ec8d8-fdd2-4c45-b6ed-a8b44d98a8df.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                            <div>
                                <img
                                    src="https://a0.muscache.com/im/pictures/6713071b-519d-49ad-bc64-76db60d8de9d.jpg?im_w=720"
                                    alt="room_hot"
                                />
                            </div>
                        </Slider>
                        <div className="love_room">
                            <FavoriteOutlinedIcon className="icon_love" />
                        </div>
                        <div className="info__room">
                            <h2>Khách Sạn Hoài Niệm Hội An</h2>
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
                            <div className="price__room">
                                <p>Giá: 700.000 VND / Đêm</p>
                                <p>Đánh giá: 4.5</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
