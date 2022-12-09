import { useParams } from 'react-router-dom';
import DialogCountRoom from '../../../components/DialogCountRoom/DialogCountRoom';
import ImageOfRoomSetting from '../../../components/HostSetting/ImageOfRoomSetting/ImageOfRoomSetting';
import NavbarOwner from '../../../components/NavbarOwner/NavbarOwner';

import './CountRoomDetailSetting.scss';

import { useEffect, useState } from 'react';
import roomOfHomeApi from '../../../services/roomOfHome';
import roomCategoryApi from '../../../services/roomCategoryApi';

import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';

const CountRoomDetailSetting = () => {
    const [listRoomOfHome, setListRoomOfHome] = useState<any>([]);
    const [listCategoryRoom, setListCategoryRoom] = useState<any>([]);

    console.log(listRoomOfHome)

    const params = useParams();

    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        roomOfHomeApi.getAllRoomOfHome(`${params.idHome}&`).then((dataRoom) => {
            setListRoomOfHome(dataRoom.data.content);
        });
        roomCategoryApi.getAllRoomCategoryOfHome(params?.idHome).then((dataResponse) => {
            setListCategoryRoom(dataResponse.data.content);
        });
    }, [params.idHome]);

    const handleRemoveRoom = (idRoom: string) => {
        roomOfHomeApi
            .deleteRoomOfHome(idRoom)
            .then(() => {
                enqueueSnackbar('Xóa thành công', { variant: 'success' });
                setListRoomOfHome(listRoomOfHome.filter(((room:any) => {return room.id !== idRoom})))
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    const handleSaveAddRoom = (dataSetRoomCount: any) => {
        const newCount = {
            homeId: params?.idHome,
            listCreate: dataSetRoomCount.filter((data: any) => { return data.number !== 0}),
        };
        roomCategoryApi
            .saveCountRoomOfHome(newCount)
            .then((data: any) => {
                setListRoomOfHome(data.data)
                enqueueSnackbar('Lưu thành công', { variant: 'success' });
            })

            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    return (
        <div className="count-roomdetal__setting">
            <NavbarOwner />
            <div className="content-count__roomdetail__setting">
                <h1>Phòng và không gian</h1>
                <p>Thêm hoặc chỉnh sửa khu vực mà khách có thể sử dụng và đánh dấu không gian họ sẽ dùng chung với người khác</p>
                <div className="card-roomdetail__count">
                    <p>Phòng ngủ · Phòng tắm đầy đủ · Bồn tắm nước nóng · Ngoại thất</p>
                    <DialogCountRoom listCategoryRoom={listCategoryRoom} handleSaveAddRoom={handleSaveAddRoom}/>
                </div>
                <ImageOfRoomSetting listRoomOfHome={listRoomOfHome} handleRemoveRoom={handleRemoveRoom}/>
            </div>
        </div>
    );
};

export default CountRoomDetailSetting;
