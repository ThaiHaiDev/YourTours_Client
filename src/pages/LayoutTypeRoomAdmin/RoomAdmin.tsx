import React, { useState } from 'react';
import './RoomAdmin.scss';
import Table from '../../components/AllAdminComponents/Table/Table';
import AddForm from '../../components/AllAdminComponents/AddForm/AddForm';

import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DeleteIcon from '@mui/icons-material/Delete';

import roomCategoryApi from '../../services/roomCategoryApi';
import UpdateForm from '../../components/AllAdminComponents/UpdateForm/UpdateForm';

const customerTableHead = ['', 'Tên phòng', 'Mô tả', 'Config giường', 'Quan trọng', '', ''];

const fieldData = [
    {
        title: 'Tên loại phòng',
        nameRegister: 'name',
        nameRequire: 'Tên loại phòng được yêu cầu',
        placeholder: 'Vd: abc...',
    },
    {
        title: 'Mô tả loại phòng',
        nameRegister: 'description',
        nameRequire: 'Mô tả loại phòng được yêu cầu',
        placeholder: 'Vd: abc...',
    },
    {
        title: 'Config giường',
        nameRegister: 'configBed',
        nameRequire: 'Config giường được yêu cầu dạng true / false',
        placeholder: 'Vd: true hoặc false',
    },
    {
        title: 'Quan trọng',
        nameRegister: 'important',
        nameRequire: 'Quan trọng được yêu cầu dạng true / false',
        placeholder: 'Vd: true hoặc false',
    },
];

const renderHead = (item: any, index: number) => <th key={index}>{item}</th>;

const RoomAdmin = (props: any) => {
    const [onAddUser, setOnAddUser] = useState<Boolean>(false);

    const { enqueueSnackbar } = useSnackbar();

    const handleAddData = (data: any) => {
        const dataAdd = {
            ...data,
        };
        roomCategoryApi
            .addRoomCategory(dataAdd)
            .then((dataResponse) => {
                props.setListTypeRoom([...props.data, dataResponse.data]);
                enqueueSnackbar('Thêm mới thành công', { variant: 'success' });
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    const handleDelete = (idDelete: string | undefined) => {
        roomCategoryApi
            .deleteRoomCategory(idDelete)
            .then(() => {
                const dataAfterDelete = props.data.filter((dataDelete: any) => {
                    return dataDelete.id !== idDelete;
                });
                props.setListTypeRoom([...dataAfterDelete]);
                enqueueSnackbar('Xóa thành công', { variant: 'success' });
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    const Update = (id: string | undefined, data: any) => {
        props.setListTypeRoom(
            props.data?.map((item: any) => {
                if (item.id === id) {
                    item = data;
                }
                return item;
            }),
        );
    };

    const handleUpdate = (data: any) => {
        roomCategoryApi
            .updateRoomCategory(data)
            .then((dataResponse) => {
                Update(data.id, dataResponse.data);
                enqueueSnackbar('Cập nhật thành công', { variant: 'success' });
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    const renderBody = (item: any, index: any) => (
        <tr key={index}>
            <td>{index}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.configBed ? 'true' : 'false'}</td>
            <td>{item.important ? 'true' : 'false'}</td>
            <td>
                <Popup
                    trigger={
                        <DeleteIcon className="icon__btn" sx={{ color: 'red', cursor: 'pointer', fontSize: '18px' }} />
                    }
                    position="bottom center"
                >
                    <div>
                        <p style={{ margin: '0', padding: '5px', fontSize: '14px' }}>
                            Bạn chắc chắn muốn xóa dữ liệu này không?
                        </p>
                        <p
                            style={{
                                background: '#ef5350',
                                margin: '0',
                                width: 'auto',
                                paddingLeft: '15px',
                                paddingTop: '5px',
                                paddingBottom: '5px',
                                marginLeft: '75%',
                                cursor: 'pointer',
                                color: 'white',
                            }}
                            onClick={() => handleDelete(item.id)}
                        >
                            Yes
                        </p>
                    </div>
                </Popup>
            </td>
            <td>
                <UpdateForm fieldData={fieldData} data={item} updateData={handleUpdate} />
            </td>
        </tr>
    );

    return (
        <div className="room__admin">
            <div className="header__customer">
                <h2 className="page-header">Loại phòng</h2>
                <button className="btn__add-customer__admin" onClick={() => setOnAddUser(!onAddUser)}>
                    <p className="text__admin">{onAddUser ? 'Danh sách loại phòng' : 'Thêm mới'}</p>
                </button>
            </div>

            {!onAddUser ? (
                <div className="row">
                    <div className="col l-12">
                        <div className="card-admin">
                            <div className="card__body">
                                {props.data.length !== 0 && (
                                    <Table
                                        limit="10"
                                        headData={customerTableHead}
                                        renderHead={(item: any, index: any) => renderHead(item, index)}
                                        bodyData={props.data}
                                        renderBody={(item: any, index: any) => renderBody(item, index)}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <AddForm fieldData={fieldData} addDataNew={handleAddData} />
            )}
        </div>
    );
};

export default RoomAdmin;
