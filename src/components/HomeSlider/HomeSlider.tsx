import React from 'react';
import Slider from 'react-slick';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './HomeSlider.scss';
import SearchHome from '../SearchHome/SearchHome';

import SearchData from '../../mockdata/SearchData.json';
import { t } from 'i18next';

export default function HomeSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
        <div className="slider__home">
            <Slider {...settings}>
                <div>
                    <img
                        src="https://res.klook.com/image/upload/fl_lossy.progressive,q_90/c_fill,,w_2560,/v1650872737/banner/ozdxi0pcsdxhlo5ogkjv.webp"
                        alt="home"
                        className="slider__home-item"
                    />
                </div>
                <div>
                    <img
                        src="https://res.klook.com/image/upload/fl_lossy.progressive,q_90/c_fill,,w_2560,/v1650872771/banner/bkxv5zzqmccyoupu8vx1.webp"
                        alt="home"
                        className="slider__home-item"
                    />
                </div>
                <div>
                    <img
                        src="https://res.klook.com/image/upload/fl_lossy.progressive,q_90/c_fill,,w_2560,/v1650872737/banner/ozdxi0pcsdxhlo5ogkjv.webp"
                        alt="home"
                        className="slider__home-item"
                    />
                </div>
            </Slider>
            <div className="content-search">
                <h1 className="title-home">{t('title.home')}</h1>
                <p>{t('contentMain.homeinsearch')}</p>
                <SearchHome placeholder={t('placeholder.searchHome')} data={SearchData} />
            </div>
        </div>
    );
}
