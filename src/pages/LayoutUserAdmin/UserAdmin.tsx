import React from 'react';
import { AxiosError } from 'axios';

import { useSnackbar } from 'notistack';

import Popup from 'reactjs-popup';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import Table from '../../components/AllAdminComponents/Table/Table';
import userApi from '../../services/userApi';
import './UserAdmin.scss';

const customerTableHead = ['', 'Tên đầy đủ', 'Email', 'Ngày sinh', 'Số điện thoại', 'Chủ nhà', 'Quyền'];

const renderHead = (item: any, index: number) => <th key={index}>{item}</th>;

const UserAdmin = (props: any) => {
    const { enqueueSnackbar } = useSnackbar();
    const handleLockAccount = (idDelete: string | undefined) => {
        const dataAccount = {
            id: idDelete,
            status: 'LOCK',
        };
        userApi
            .lockAccount(dataAccount)
            .then(() => {
                enqueueSnackbar('Khóa tài khoản thành công', { variant: 'success' });
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    const renderBody = (item: any, index: any) => (
        <tr key={index}>
            <td>{index}</td>
            <td>{item.fullName}</td>
            <td>{item.email}</td>
            <td>{item.dateOfBirth}</td>
            <td>{item.phoneNumber}</td>
            <td>{item.isOwner ? 'false' : 'true'}</td>
            <td>{item.role}</td>
            <td>
                <Popup
                    trigger={
                        item.status === 'LOCK' ? (
                            <LockOpenIcon
                                className="icon__btn"
                                sx={{ color: 'red', cursor: 'pointer', fontSize: '18px' }}
                            />
                        ) : (
                            <LockIcon
                                className="icon__btn"
                                sx={{ color: 'red', cursor: 'pointer', fontSize: '18px' }}
                            />
                        )
                    }
                    position="bottom center"
                >
                    <div>
                        <p style={{ margin: '0', padding: '5px', fontSize: '14px' }}>
                            {`Bạn chắc chắn muốn ${item.status === 'LOCK' ? 'mở khóa' : 'khóa'} tài khoản này không?`}
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
                            onClick={() => handleLockAccount(item.id)}
                        >
                            Yes
                        </p>
                    </div>
                </Popup>
            </td>
        </tr>
    );

    return (
        <div className="user__admin">
            <div className="header__customer">
                <h2 className="page-header">Người dùng</h2>
            </div>

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
        </div>
    );
};

export default UserAdmin;
