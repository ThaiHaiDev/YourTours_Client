import React, { useState } from 'react';
import './RoomAdmin.scss';
import Table from '../../components/AllAdminComponents/Table/Table';
import AddForm from '../../components/AllAdminComponents/AddForm/AddForm';

import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';
import roomCategoryApi from '../../services/roomCategoryApi';

const customerTableHead = ['', 'Tên phòng', 'Mô tả', 'Trạng thái', 'Config số lượng giường', '', ''];

const fieldData = [
    {
        nameRegister: 'name',
        nameRequire: 'Tên loại phòng được yêu cầu',
        placeholder: 'Tên loại phòng',
    },
    {
        nameRegister: 'description',
        nameRequire: 'Mô tả loại phòng được yêu cầu',
        placeholder: 'Mô tả loại phòng',
    },
];

const renderHead = (item: any, index: number) => <th key={index}>{item}</th>;

const RoomAdmin = (props: any) => {
    const [onAddUser, setOnAddUser] = useState<Boolean>(false);

    const { enqueueSnackbar } = useSnackbar();

    const handleAddData = (data: any) => {
        const dataAdd = {
            configBed: false,
            important: false,
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

    const handleDeleteUser = (idDelete: string | undefined) => {
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

    const renderBody = (item: any, index: any) => (
        <tr key={index}>
            <td>{index}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.status}</td>
            <td>{item.important ? 'True' : 'False'}</td>
            <td onClick={() => handleDeleteUser(item.id)}>
                <img
                    src="https://img.icons8.com/plasticine/100/000000/filled-trash.png"
                    alt="icon__delete"
                    className="icon__btn"
                />
            </td>
            <td>
                <img
                    src="https://img.icons8.com/color/48/000000/edit--v1.png"
                    alt="icon__update"
                    className="icon__btn"
                />
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
            {/* {userUpdate && <Modal open={onModal} onClick={handleSetModal} dataUpdate={userUpdate} />} */}
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
