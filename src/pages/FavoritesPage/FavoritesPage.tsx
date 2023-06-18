import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './FavoritesPage.scss';

import favoriteApi from '../../services/favoriteApi';
import formatPrice from '../../utils/formatPrice';
import IconLoveLike from '../../components/IconLoveLike/IconLoveLike';
import { useNavigate } from 'react-router-dom';

import LinearProgress from '@mui/material/LinearProgress';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { t } from 'i18next';
AOS.init();

const FavoritesPage = () => {
    const [listDataFavorites, setListDataFavorites] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const navigate = useNavigate();

    useEffect(() => {
        favoriteApi.getAllFavoritesRoom().then((dataResponse: any) => {
            setListDataFavorites(dataResponse.data.content);
            setLoading(false);
        });
    }, []);

    const handleLinkToDetail = (idRoom: string) => {
        navigate(`/detail/${idRoom}`);
    };

    return (
        <div className="favorites__page">
            <Navbar />
            {loading ? (
                <div className="no__favorites">
                    <h1>{t('title.love')}</h1>
                    <h2>{t('title.firstLove')}</h2>
                    <p>{t('contentMain.love')}</p>
                    <LinearProgress />
                </div>
            ) : (
                <div className="yes__favorites">
                    <h1>{t('title.love')}</h1>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center"
                    >
                        <div className="row">
                            {listDataFavorites?.map((room: any, index: number) => (
                                <div className="col l-4" key={index}>
                                    <div className="card-item__favorite">
                                        <div className="content__favorite" onClick={() => handleLinkToDetail(room?.id)}>
                                            <img src={room?.thumbnail} alt="" />
                                            <p className="name__favorite">{room?.name}</p>
                                            <p className="price__favorite">{`${t('label.pricelove')} ${formatPrice(
                                                room?.costPerNightDefault,
                                            )}`}</p>
                                            <p className="book-now">{t('common.bookRightNow')}</p>
                                        </div>
                                        <IconLoveLike idHome={room?.id} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FavoritesPage;
