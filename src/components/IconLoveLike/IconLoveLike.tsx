import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useState } from 'react';
import favoriteApi from '../../services/favoriteApi';
import { t } from 'i18next';

const IconLoveLike = (props: any) => {
    const [like, setLike] = useState<boolean>(true);

    const handleFavorite = () => {
        const dataSend = {
            homeId: props.idHome,
        };
        favoriteApi.likeFavoriteRoom(dataSend).then((data: any) => {
            setLike(!like);
        });
    };

    return (
        <div className="card-like" onClick={handleFavorite}>
            <FavoriteOutlinedIcon className={like ? 'icon_love__true' : 'icon_love'} />
            <p>{like ? t('common.unlove') : t('common.love')}</p>
        </div>
    );
};

export default IconLoveLike;
