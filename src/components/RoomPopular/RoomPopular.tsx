import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './RoomPopular.scss';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import homeApi from '../../services/homeApi';
import SkeletonRoomItem from '../Skeleton/SkeletonRoomItem';

import { useNavigate } from 'react-router-dom';
import IconLove from './IconLove';
import formatPrice from '../../utils/formatPrice';
import { t } from 'i18next';

export default function RoomPopular() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const [listRoom, setListRoom] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        homeApi.getRoomFavorite().then((dataResponse) => {
            setListRoom(dataResponse?.data?.content);
            setLoading(false);
        });
    }, []);

    const navigate = useNavigate();

    const handleLinkToDetail = (idRoom: string) => {
        navigate(`/detail/${idRoom}`);
    };

    return (
        <div className="room__popular">
            <h1>{t('title.popularRoom')}</h1>
            <div className="row">
                {loading ? (
                    <SkeletonRoomItem />
                ) : (
                    listRoom?.map((room: any, index: number) => (
                        <div className="col l-3 m-6 c-12" key={index}>
                            <Slider {...settings}>
                                {room.imagesOfHome.length !== 0 &&
                                    room?.imagesOfHome?.map((image: any) => (
                                        <div key={image?.id}>
                                            <img src={image.path} alt="room_hot" className="image-home" />
                                        </div>
                                    ))}
                            </Slider>
                            <IconLove idHome={room?.id} isFavorite={room?.isFavorite} />
                            <div className="info__room" onClick={() => handleLinkToDetail(room?.id)}>
                                <h2>{room?.name}</h2>
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
                                    <p>{room?.provinceName ? room?.provinceName : undefined}</p>
                                </div>
                                <div className="price__room">
                                    <p>{`${t('numberCount.price')} ${formatPrice(room?.costPerNightDefault)} ${t(
                                        'numberCount.priceDay',
                                    )}`}</p>
                                    <p>{`${t('numberCount.view')} ${room?.view}`}</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
