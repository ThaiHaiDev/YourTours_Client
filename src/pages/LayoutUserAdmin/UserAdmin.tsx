import React from 'react';
import './UserAdmin.scss';
import Table from '../../components/AllAdminComponents/Table/Table';

const customerTableHead = ['', 'Tên đầy đủ', 'Email', 'Ngày sinh', 'Số điện thoại', 'Chủ nhà', 'Quyền'];

const renderHead = (item: any, index: number) => <th key={index}>{item}</th>;

const UserAdmin = (props: any) => {
    const renderBody = (item: any, index: any) => (
        <tr key={index}>
            <td>{index}</td>
            <td>{item.fullName}</td>
            <td>{item.email}</td>
            <td>{item.dateOfBirth}</td>
            <td>{item.phoneNumber}</td>
            <td>{item.isOwner ? 'false' : 'true'}</td>
            <td>{item.role}</td>
        </tr>
    );

    return (
        <div className="user__admin">
            <div className="header__customer">
                <h2 className="page-header">Người dùng</h2>
            </div>

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
    );
};

export default UserAdmin;
