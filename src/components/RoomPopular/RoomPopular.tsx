import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './RoomPopular.scss';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

import mapProvince from '../../utils/mapProvince';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import homeApi from '../../services/homeApi';
import SkeletonRoomItem from '../Skeleton/SkeletonRoomItem';
import favoriteApi from '../../services/favoriteApi';

import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';

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

    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setLoading(true);
        homeApi.getRoomFavorite().then((dataResponse) => {
            setListRoom(dataResponse.data.content);
            setLoading(false);
        });
    }, []);

    const handleFavorite = (idHome: string) => {
        const dataSend = {
            homeId: idHome,
        };
        favoriteApi
            .likeFavoriteRoom(dataSend)
            .then((data: any) => {
                if (data.data.success) {
                    enqueueSnackbar('Đã thêm vào mục đã thích', { variant: 'success' });
                } else {
                    enqueueSnackbar('Đã xóa khỏi mục đã thích', { variant: 'success' });
                }
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    return (
        <div className="room__popular">
            <h1>Room nổi bậc được xem nhiều nhất</h1>
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
                                            <img src={image.path} alt="room_hot" />
                                        </div>
                                    ))}
                            </Slider>
                            <div className="love_room">
                                <FavoriteOutlinedIcon
                                    className={room?.isFavorite ? 'icon_love__true' : 'icon_love'}
                                    onClick={() => handleFavorite(room?.id)}
                                />
                            </div>
                            <div className="info__room">
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
                                    <p>{mapProvince(room?.provinceCode)}</p>
                                </div>
                                <div className="price__room">
                                    <p>Giá: 700.000 VND / Đêm</p>
                                    <p>{`Lượt xem: ${room?.view}`}</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
