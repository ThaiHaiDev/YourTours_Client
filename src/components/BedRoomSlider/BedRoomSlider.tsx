import React from 'react';
import Slider from 'react-slick';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './BedRoomSlider.scss';

import BedIcon from '@mui/icons-material/Bed';

export default function BedRoomSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="slider__bedroom">
            <Slider {...settings}>
                <div>
                    <div className="slider__item">
                        <div className="icon-bed">
                            <BedIcon />
                            <BedIcon />
                        </div>
                        <div className="title-bed">
                            <h2>Phòng ngủ 1</h2>
                            <p>2 giường đơn</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slider__item">
                        <div className="icon-bed">
                            <BedIcon />
                            <BedIcon />
                        </div>
                        <div className="title-bed">
                            <h2>Phòng ngủ 2</h2>
                            <p>2 giường đơn</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slider__item">
                        <div className="icon-bed">
                            <BedIcon />
                            <BedIcon />
                        </div>
                        <div className="title-bed">
                            <h2>Phòng ngủ 3</h2>
                            <p>2 giường đơn</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slider__item">
                        <div className="icon-bed">
                            <BedIcon />
                            <BedIcon />
                        </div>
                        <div className="title-bed">
                            <h2>Phòng ngủ 4</h2>
                            <p>2 giường đơn</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slider__item">
                        <div className="icon-bed">
                            <BedIcon />
                            <BedIcon />
                        </div>
                        <div className="title-bed">
                            <h2>Phòng ngủ 5</h2>
                            <p>2 giường đơn</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}
