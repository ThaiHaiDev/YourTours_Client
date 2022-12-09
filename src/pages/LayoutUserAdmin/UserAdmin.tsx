import React, { useState } from 'react';
import './UserAdmin.scss';
import Table from '../../components/AllAdminComponents/Table/Table';

const customerTableHead = [
    '',
    'Tên đầy đủ',
    'Email',
    'Ngày sinh',
    'Số điện thoại',
    'Chủ nhà',
    'Quyền',
    '',
    ''
]

const renderHead = (item:any, index:number) => <th key={index}>{item}</th>

const UserAdmin = (props: any) => {
    const [onAddUser, setOnAddUser] = useState<Boolean>(false)

    const renderBody = (item:any, index:any) => (
        <tr key={index}>
            <td>{index}</td>
            <td>{item.fullName}</td>
            <td>{item.email}</td>
            <td>{item.dateOfBirth}</td>
            <td>{item.phoneNumber}</td>
            <td>{item.isOwner ? 'false' : 'true'}</td>
            <td>{item.isAdmin}</td>
            <td onClick={() => handleDeleteUser(item.id)} ><img src="https://img.icons8.com/plasticine/100/000000/filled-trash.png" alt='icon__delete' className='icon__btn'/></td>
            <td onClick={() => handleUpdateUser(item)} ><img src="https://img.icons8.com/color/48/000000/edit--v1.png" alt='icon__update' className='icon__btn'/></td>
        </tr>
    )

    const handleDeleteUser = (idUser: string) => {
        
    }

    const handleUpdateUser = async(user: any) => {

    }

    return (
        <div className='user__admin'>
            <div className='header__customer'>
                <h2 className="page-header">
                    Người dùng
                </h2>
                <button className='btn__add-customer__admin' onClick={() => setOnAddUser(!onAddUser)}>
                    <p className='icon__admin'>{onAddUser ? '' : '+'}</p>
                    <p className='text__admin'>{onAddUser ? 'List user' : 'Add user'}</p>
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
            </div> : ''}
        </div>
    )
}

export default UserAdmin