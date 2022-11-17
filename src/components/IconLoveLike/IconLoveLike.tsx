import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useState } from 'react';
import favoriteApi from '../../services/favoriteApi';

const IconLoveLike = (props: any) => {
    const [like, setLike] = useState<boolean>(true);

    const handleFavorite = () => {
        const dataSend = {
            homeId: props.idHome,
        };
        favoriteApi.likeFavoriteRoom(dataSend).then((data: any) => {
            setLike(!like)
        });
    };

    return (
        <div className="card-like">
            <FavoriteOutlinedIcon
                className={like ? 'icon_love__true' : 'icon_love'}
                onClick={handleFavorite}
            />
            <p>{like ? 'Bỏ khỏi mục yêu thích' : 'Thêm vào mục yêu thích'}</p>
        </div>
    );
};

export default IconLoveLike;
