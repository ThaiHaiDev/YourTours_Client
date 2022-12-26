import React, { useState } from 'react';
import './TypeAmenityAdmin.scss';
import Table from '../../components/AllAdminComponents/Table/Table';

import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DeleteIcon from '@mui/icons-material/Delete';
import amenityCategoryApi from '../../services/amenityCategoryApi';
import UpdateForm from '../../components/AllAdminComponents/UpdateForm/UpdateForm';
import AddForm from '../../components/AllAdminComponents/AddForm/AddForm';
import format3Dots from '../../utils/format3Dots';

const customerTableHead = ['', 'Tên loại tiện nghi', 'Mô tả', '', ''];

const fieldData = [
    {
        title: 'Tên loại tiện nghi',
        nameRegister: 'name',
        nameRequire: 'Tên loại tiện nghi',
        placeholder: 'Vd: abc...',
    },
    {
        title: 'Mô tả loại tiện nghi',
        nameRegister: 'description',
        nameRequire: 'Mô tả loại tiện ích được yêu cầu',
        placeholder: 'Vd: abc...',
    },
];

const renderHead = (item: any, index: number) => <th key={index}>{item}</th>;

const TypeAmenityAdmin = (props: any) => {
    const [onAddUser, setOnAddUser] = useState<Boolean>(false);

    const { enqueueSnackbar } = useSnackbar();

    const renderBody = (item: any, index: any) => (
        <tr key={index}>
            <td>{index}</td>
            <td>{format3Dots(item.name, 30)}</td>
            <td>{format3Dots(item.description, 80)}</td>
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

    const handleAddData = (data: any) => {
        const dataAdd = {
            ...data,
        };
        amenityCategoryApi
            .addAmenityCategories(dataAdd)
            .then((dataResponse) => {
                props.setList([...props.data, dataResponse.data]);
                enqueueSnackbar('Thêm mới thành công', { variant: 'success' });
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    const handleDelete = (idDelete: string | undefined) => {
        amenityCategoryApi
            .deleteAmenityCategories(idDelete)
            .then(() => {
                const dataAfterDelete = props.data.filter((dataDelete: any) => {
                    return dataDelete.id !== idDelete;
                });
                props.setList([...dataAfterDelete]);
                enqueueSnackbar('Xóa thành công', { variant: 'success' });
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    const Update = (id: string | undefined, data: any) => {
        props.setList(
            props.data?.map((item: any) => {
                if (item.id === id) {
                    item = data;
                }
                return item;
            }),
        );
    };

    const handleUpdate = (data: any) => {
        amenityCategoryApi
            .updateAmenityCategories(data)
            .then((dataResponse) => {
                Update(data.id, dataResponse.data);
                enqueueSnackbar('Cập nhật thành công', { variant: 'success' });
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    return (
        <div className="typeamenity__admin">
            <div className="header__customer">
                <h2 className="page-header">Loại tiện nghi</h2>
                <button className="btn__add-customer__admin" onClick={() => setOnAddUser(!onAddUser)}>
                    <p className="text__admin">{onAddUser ? 'Danh sách loại tiện nghi' : 'Thêm mới'}</p>
                </button>
            </div>

            {!onAddUser ? (
                <div className="row">
                    <div className="col l-12">
                        <div className="card-admin">
                            <div className="card__body">
                                <Table
                                    limit="10"
                                    headData={customerTableHead}
                                    renderHead={(item: any, index: any) => renderHead(item, index)}
                                    bodyData={props?.data}
                                    renderBody={(item: any, index: any) => renderBody(item, index)}
                                />
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

export default TypeAmenityAdmin;
