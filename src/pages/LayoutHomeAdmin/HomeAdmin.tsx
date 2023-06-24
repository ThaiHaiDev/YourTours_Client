import React from 'react';

import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';
import Popup from 'reactjs-popup';
import LockIcon from '@mui/icons-material/Lock';

import LockOpenIcon from '@mui/icons-material/LockOpen';

import Table from '../../components/AllAdminComponents/Table/Table';
import homeApi from '../../services/homeApi';
import format3Dots from '../../utils/format3Dots';
import formatPrice from '../../utils/formatPrice';
import './HomeAdmin.scss';

const customerTableHead = ['', 'Tên nhà', 'Chủ nhà', 'Địa chỉ', 'Tỉnh thành', 'Giá theo đêm', 'Chính sách hoàn tiền'];

// const fieldData = [
//     {
//         nameRegister: 'name',
//         nameRequire: 'Tên nhà được yêu cầu',
//         placeholder: 'Name',
//     },
//     {
//         nameRegister: 'description',
//         nameRequire: 'Mô tả được yêu cầu',
//         placeholder: 'Description',
//     },
//     {
//         nameRegister: 'addressDetail',
//         nameRequire: 'Địa chỉ được yêu cầu',
//         placeholder: 'Địa chỉ',
//     },
//     {
//         nameRegister: 'provinceCode',
//         nameRequire: 'Mã tỉnh thành được yêu cầu',
//         placeholder: 'Mã tĩnh thành',
//     },
//     {
//         nameRegister: 'costPerNightDefault',
//         nameRequire: 'Giá nhà theo đêm được yêu cầu',
//         placeholder: 'Giá nhà theo đêm',
//     },
//     {
//         nameRegister: 'refundPolicy',
//         nameRequire: 'Chính sách hoàn tiền được yêu cầu',
//         placeholder: 'Chính sách hoàn tiền',
//     },
// ];

const renderHead = (item: any, index: number) => <th key={index}>{item}</th>;

const HomeAdmin = (props: any) => {
    const { enqueueSnackbar } = useSnackbar();
    const handleLockHome = async (id: any, status: any) => {
        const dataActive = {
            homeId: id,
            status: status,
        };

        await homeApi
            .activeHome(dataActive)
            .then((dataRes) => {
                enqueueSnackbar(`${status === 'LOCK' ? 'Active' : 'Unactive'} ngôi nhà thành công`, {
                    variant: 'success',
                });
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };
    const renderBody = (item: any, index: any) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{format3Dots(item.name, 30)}</td>
            <td>{format3Dots(item.ownerName, 30)}</td>
            <td>{item.addressDetail}</td>
            <td>{item?.provinceName ? item?.provinceName : ''}</td>
            <td>{formatPrice(item.costPerNightDefault)}</td>
            <td>{format3Dots(item.refundPolicy, 10)}</td>
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
                    position="top right"
                >
                    <div>
                        <p style={{ margin: '0', padding: '5px 10px', fontSize: '14px', marginBottom: '10px' }}>
                            {`Bạn chắc chắn muốn ${item.status === 'LOCK' ? 'khóa' : 'mở khóa'} ngôi nhà này không?`}
                        </p>
                        <p
                            style={{
                                background: '#ef5350',
                                margin: '0',
                                width: 'auto',
                                paddingLeft: '15px',
                                paddingTop: '5px',
                                paddingBottom: '5px',
                                marginLeft: '70%',
                                marginBottom: '7px',
                                marginRight: '10px',
                                cursor: 'pointer',
                                color: 'white',
                            }}
                            onClick={() => handleLockHome(item.id, item.status === 'LOCK' ? 'ACTIVE' : 'LOCK')}
                        >
                            Yes
                        </p>
                    </div>
                </Popup>
            </td>
        </tr>
    );

    return (
        <div className="home__admin">
            <div className="header__customer">
                <h2 className="page-header">Nhà cho thuê</h2>
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

export default HomeAdmin;
