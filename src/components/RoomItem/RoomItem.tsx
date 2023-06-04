import React from 'react';
import Slider from 'react-slick';
import './RoomItem.scss';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import formatPrice from '../../utils/formatPrice';
import { useNavigate } from 'react-router-dom';
import IconLove from '../RoomPopular/IconLove';
import { t } from 'i18next';

const RoomItem = (props: any) => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const navigate = useNavigate();

    const handleLinkToDetail = (idRoom: string) => {
        navigate(`/detail/${idRoom}`);
    };

    return (
        <div className="col l-3 m-6 c-12">
            <div className="room-item">
                <Slider {...settings}>
                    {props?.infoRoom?.imagesOfHome?.map((image: any, index: number) => (
                        <div key={index}>
                            <img src={image?.path} alt="room_hot" className="image-home" />
                        </div>
                    ))}
                </Slider>
                <IconLove idHome={props?.infoRoom?.id} isFavorite={props?.infoRoom?.isFavorite} />
                <div className="info__room" onClick={() => handleLinkToDetail(props?.infoRoom?.id)}>
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
                        <p>{props?.infoRoom?.provinceName ? props?.infoRoom?.provinceName : ''}</p>
                    </div>
                    <div className="price__room">
                        <p>{`${t('numberCount.price')} ${formatPrice(props?.infoRoom?.costPerNightDefault)} ${t(
                            'numberCount.priceDay',
                        )}`}</p>
                        <p>{`${t('numberCount.view')} ${props?.infoRoom?.view}`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomItem;
