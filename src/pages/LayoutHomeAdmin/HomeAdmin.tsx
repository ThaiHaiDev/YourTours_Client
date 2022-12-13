import React, { useState } from 'react';
import './HomeAdmin.scss';
import Table from '../../components/AllAdminComponents/Table/Table';
import mapProvince from '../../utils/mapProvince';
import formatPrice from '../../utils/formatPrice';
import AddForm from '../../components/AllAdminComponents/AddForm/AddForm';

const customerTableHead = [
    '',
    'Tên nhà',
    'Mô tả',
    'Địa chỉ',
    'Tỉnh thành',
    'Giá theo đêm',
    'Chính sách hoàn tiền',
    '',
]

const fieldData = [
    {
        nameRegister: 'name',
        nameRequire: 'Tên nhà được yêu cầu',
        placeholder: 'Name',
    },
    {
        nameRegister: 'description',
        nameRequire: 'Mô tả được yêu cầu',
        placeholder: 'Description',
    },
    {
        nameRegister: 'addressDetail',
        nameRequire: 'Địa chỉ được yêu cầu',
        placeholder: 'Địa chỉ',
    },
    {
        nameRegister: 'provinceCode',
        nameRequire: 'Mã tỉnh thành được yêu cầu',
        placeholder: 'Mã tĩnh thành',
    },
    {
        nameRegister: 'costPerNightDefault',
        nameRequire: 'Giá nhà theo đêm được yêu cầu',
        placeholder: 'Giá nhà theo đêm',
    },
    {
        nameRegister: 'refundPolicy',
        nameRequire: 'Chính sách hoàn tiền được yêu cầu',
        placeholder: 'Chính sách hoàn tiền',
    },
];

const renderHead = (item:any, index:number) => <th key={index}>{item}</th>

const HomeAdmin = (props: any) => {
    const [onAddUser, setOnAddUser] = useState<Boolean>(false)

    const renderBody = (item:any, index:any) => (
        <tr key={index}>
            <td>{index}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.addressDetail}</td>
            <td>{mapProvince(item.provinceCode)}</td>
            <td>{formatPrice(item.costPerNightDefault)}</td>
            <td>{item.refundPolicy}</td>
            <td onClick={() => handleDeleteUser(item.id)} ><img src="https://img.icons8.com/plasticine/100/000000/filled-trash.png" alt='icon__delete' className='icon__btn'/></td>
        </tr>
    )

    const handleDeleteUser = (idUser: string) => {
        
    }

    return (
        <div className='home__admin'>
            <div className='header__customer'>
                <h2 className="page-header">
                    Nhà cho thuê
                </h2>
                <button className='btn__add-customer__admin' onClick={() => setOnAddUser(!onAddUser)}>
                    <p className='text__admin'>{onAddUser ? 'Danh sách nhà' : 'Thêm mới'}</p>
                </button>
            </div>
            {/* {userUpdate && <Modal open={onModal} onClick={handleSetModal} dataUpdate={userUpdate} />} */}
            {!onAddUser ? <div className="row">
                <div className="col l-12">
                    <div className="card-admin">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={customerTableHead}
                                renderHead={(item:any, index:any) => renderHead(item, index)}
                                bodyData={props?.data}
                                renderBody={(item:any, index:any) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div> : <AddForm fieldData={fieldData}/>}
        </div>
    )
}

export default HomeAdmin