import './RoomPopular.scss';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import favoriteApi from '../../services/favoriteApi';
import { useState } from 'react';

import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';

const IconLove = (props: any) => {
    const [like, setLike] = useState<boolean>(props?.isFavorite);

    const { enqueueSnackbar } = useSnackbar();

    const handleFavorite = () => {
        const dataSend = {
            homeId: props.idHome,
        };
        favoriteApi
            .likeFavoriteRoom(dataSend)
            .then((data: any) => {
                setLike(!like);
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
        <div className="love_room">
            <FavoriteOutlinedIcon className={like ? 'icon_love__true' : 'icon_love'} onClick={handleFavorite} />
        </div>
    );
};

export default IconLove;