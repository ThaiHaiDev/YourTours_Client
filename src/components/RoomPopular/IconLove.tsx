import { useState } from 'react';
import { AxiosError } from 'axios';
import { t } from 'i18next';
import { useSnackbar } from 'notistack';

import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

import favoriteApi from '../../services/favoriteApi';
import './RoomPopular.scss';

const IconLove = (props: any) => {
    const [like, setLike] = useState<boolean>(props?.isFavorite);
    const [loading, setLoading] = useState<boolean>(false);

    const { enqueueSnackbar } = useSnackbar();

    const handleFavorite = () => {
        const dataSend = {
            homeId: props.idHome,
        };
        if (!loading) {
            setLoading(true);
            favoriteApi
                .likeFavoriteRoom(dataSend)
                .then((data: any) => {
                    setLike(!like);
                    setLoading(false);
                    if (data.data.success) {
                        enqueueSnackbar(t('message.love'), { variant: 'success' });
                    } else {
                        enqueueSnackbar(t('message.unlove'), { variant: 'success' });
                    }
                })
                .catch((error: AxiosError<any>) => {
                    setLoading(false);
                    enqueueSnackbar(error.response?.data.message, { variant: 'error' });
                });
        }
    };

    return (
        <div className="love_room">
            <FavoriteOutlinedIcon className={like ? 'icon_love__true' : 'icon_love'} onClick={handleFavorite} />
        </div>
    );
};

export default IconLove;
