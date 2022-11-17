import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './FavoritesPage.scss';

import favoriteApi from '../../services/favoriteApi';
import formatPrice from '../../utils/formatPrice';
import IconLoveLike from '../../components/IconLoveLike/IconLoveLike';

const FavoritesPage = () => {
    const [listDataFavorites, setListDataFavorites] = useState<any>([]);
    

    useEffect(() => {
        favoriteApi.getAllFavoritesRoom().then((dataResponse: any) => {
            setListDataFavorites(dataResponse.data.content);
            console.log(dataResponse.data.content);
        });
    }, []);


    return (
        <div className="favorites__page">
            <Navbar />
            {listDataFavorites.length === 0 ? (
                <div className="no__favorites">
                    <h1>Yêu thích</h1>
                    <h2>Tạo danh sách Yêu thích đầu tiên</h2>
                    <p>
                        Trong quá trình tìm kiếm, hãy nhấn vào biểu tượng hình trái tim để lưu các chỗ ở yêu thích hoặc
                        những điều nên trải nghiệm vào danh sách Yêu thích.
                    </p>
                </div>
            ) : (
                <div className="yes__favorites">
                    <h1>Yêu thích</h1>
                    <div className="row">
                        {listDataFavorites?.map((room: any, index: number) => (
                            <div className="col l-4" key={index}>
                                <div className="card-item__favorite">
                                    <div className="content__favorite">
                                        <img src={room?.thumbnail} alt="" />
                                        <p className="name__favorite">Resort Hội An</p>
                                        <p className="price__favorite">{`Giá chỉ ${formatPrice(
                                            room?.costPerNightDefault,
                                        )}`}</p>
                                        <p className="book-now">Đặt ngay hôm nay</p>
                                    </div>
                                    <IconLoveLike idHome={room?.id} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FavoritesPage;
