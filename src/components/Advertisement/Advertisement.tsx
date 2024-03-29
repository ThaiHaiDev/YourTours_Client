import React, { useEffect, useState } from 'react';
import { t } from 'i18next';

// Import css files
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';

import 'slick-carousel/slick/slick.css';

import advertisementApi from '../../services/advertisementApi';
import SkeletonAdvertisement from '../Skeleton/SkeletonAdvertisement';
import './Advertisement.scss';

export default function SimpleSlider() {
    const [listDiscount, setListDiscount] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        advertisementApi.getDiscountsCampaign().then((dataResponse: any) => {
            setListDiscount(dataResponse?.data?.content);
            setLoading(false);
        });
    }, []);

    var settings = {
        dots: true,
        infinite: false,
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
                breakpoint: 800,
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
        <div className="slider__adversiment">
            <h1>{t('title.endow')}</h1>
            {loading ? (
                <SkeletonAdvertisement />
            ) : (
                <Slider {...settings}>
                    {listDiscount?.map((baner: any, index: number) => (
                        <div key={index}>
                            <img src={baner.banner} alt="advertise" className="slider__item" />
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
}
