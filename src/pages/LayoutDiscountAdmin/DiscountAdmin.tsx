import React, { useState } from 'react';
import './DiscountAdmin.scss';
import Table from '../../components/AllAdminComponents/Table/Table';

import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateForm from '../../components/AllAdminComponents/UpdateForm/UpdateForm';
import discountApi from '../../services/discountApi';
import AddForm from '../../components/AllAdminComponents/AddForm/AddForm';

const customerTableHead = [
    '',
    'Tên chính sách giảm giá',
    'Mô tả chính sách',
    'Số ngày giảm giá',
    'Loại giảm giá',
    '',
    '',
];

const fieldData = [
    {
        title: 'Tên chính sách giảm giá',
        nameRegister: 'name',
        nameRequire: 'Tên chính sách giảm giá được yêu cầu',
        placeholder: 'Vd: abc...',
    },
    {
        title: 'Mô tả chính sách giảm giá',
        nameRegister: 'description',
        nameRequire: 'Mô tả chính sách giảm giá được yêu cầu',
        placeholder: 'Vd: abc...',
    },
    {
        title: 'Số ngày giảm giá',
        nameRegister: 'numDateDefault',
        nameRequire: 'Số ngày giảm giá được yêu cầu',
        placeholder: 'Vd: 7',
    },
    {
        title: 'Loại giảm giá',
        nameRegister: 'type',
        nameRequire: 'Loại giảm giá được yêu cầu',
        placeholder: 'Vd: BY_DATE',
    },
];

const renderHead = (item: any, index: number) => <th key={index}>{item}</th>;

const DiscountAdmin = (props: any) => {
    const [onAddUser, setOnAddUser] = useState<Boolean>(false);

    const { enqueueSnackbar } = useSnackbar();

    const renderBody = (item: any, index: any) => (
        <tr key={index}>
            <td>{index}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.numDateDefault}</td>
            <td>{item.type}</td>
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
        discountApi
            .addDiscount(dataAdd)
            .then((dataResponse) => {
                props.setList([...props.data, dataResponse.data]);
                enqueueSnackbar('Thêm mới thành công', { variant: 'success' });
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    const handleDelete = (idDelete: string | undefined) => {
        discountApi
            .deleteDiscount(idDelete)
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
        discountApi
            .updateDiscount(data)
            .then((dataResponse) => {
                Update(data.id, dataResponse.data);
                enqueueSnackbar('Cập nhật thành công', { variant: 'success' });
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    return (
        <div className="discount__admin">
            <div className="header__customer">
                <h2 className="page-header">Nhà cho thuê</h2>
                <button className="btn__add-customer__admin" onClick={() => setOnAddUser(!onAddUser)}>
                    <p className="icon__admin">{onAddUser ? '' : '+'}</p>
                    <p className="text__admin">{onAddUser ? 'List user' : 'Add user'}</p>
                </button>
            </div>
            {/* {userUpdate && <Modal open={onModal} onClick={handleSetModal} dataUpdate={userUpdate} />} */}
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

export default DiscountAdmin;
