import { useEffect, useState } from 'react';
import format from 'date-fns/format';

import Popup from 'reactjs-popup';

import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import NavbarOwner from '../../../components/NavbarOwner/NavbarOwner';
import homeDetailApi from '../../../services/homeDetailApi';
import './ListRoomOfHost.scss';

const ListRoomOfHost = () => {
    const [dataListhome, setDataListHome] = useState<any>([]);

    useEffect(() => {
        homeDetailApi.getListHomeOfHost().then((dataResponse: any) => {
            setDataListHome(dataResponse.data.content);
        });
    }, []);

    const rows = [];
    for (var i = 0; i < dataListhome.length; i++) {
        rows.push({
            id: i,
            idroom: dataListhome[i].id,
            name: dataListhome[i]?.name ? dataListhome[i].name : '',
            status: dataListhome[i].status,
            bedroom: dataListhome[i].roomsImportant[0] ? dataListhome[i].roomsImportant[0].number : '0',
            giuong: dataListhome[i].numberOfBed,
            badroom: dataListhome[i].roomsImportant[2] ? dataListhome[i].roomsImportant[2].number : 0,
            location: dataListhome[i].provinceName ? dataListhome[i].provinceName : '',
            editrecent: format(new Date(dataListhome[i].lastModifiedDate.toString()), 'hh:mm MM/dd/yyyy'),
            view: dataListhome[i].id,
            remove: dataListhome[i].id,
        });
    }

    return (
        <div className="listroom__host">
            <NavbarOwner />
            <div className="welcome-card">
                <div className="welcome-content">
                    <h1>Quản lý hiệu quả</h1>
                    <p>Chào mừng bạn! Việc quản lý tốt sẽ giúp thu hút khách hàng hơn</p>
                </div>
            </div>
            <div className="header-listroom">
                <h1>{`${rows.length} nhà/phòng cho thuê`}</h1>
            </div>
            <div className="data-table">
                <DataTable rows={rows} />
            </div>
            ;
        </div>
    );
};

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'idroom', headerName: 'ID', width: 70, hide: true },
    { field: 'name', headerName: 'Nhà / phòng cho thuê', width: 360 },
    { field: 'status', headerName: 'Trạng thái', width: 100 },
    {
        field: 'bedroom',
        headerName: 'Phòng ngủ',
        type: 'number',
        width: 120,
    },
    {
        field: 'giuong',
        headerName: 'Giường',
        type: 'number',
        width: 125,
    },
    {
        field: 'badroom',
        headerName: 'Phòng tắm',
        type: 'number',
        width: 120,
    },
    { field: 'location', headerName: 'Vị trí', width: 180 },
    { field: 'editrecent', headerName: 'Sửa đổi gần nhất', width: 180 },
    {
        field: 'view',
        headerName: '',
        width: 10,
        renderCell: (params) => <RemoveRedEyeIcon onClick={() => handleView(params.row.remove)} />,
    },
    // {
    //     field: 'remove',
    //     headerName: '',
    //     width: 10,
    //     renderCell: (params) => <DeleteIcon color="secondary" onClick={() => handleDelete(params.row.remove)} />,
    // },
    {
        field: 'remove',
        headerName: '',
        width: 10,
        renderCell: (params) => (
            <Popup
                trigger={
                    <DeleteIcon className="icon__btn" sx={{ color: 'red', cursor: 'pointer', fontSize: '18px' }} />
                }
                position="top right"
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
                        onClick={() => handleDelete(params.row.remove)}
                    >
                        Yes
                    </p>
                </div>
            </Popup>
        ),
    },
];

function handleDelete(id: string | undefined) {
    console.log('id remove', id);
}

function handleView(id: string | undefined) {
    window.location.href = `/host/setting/${id}`;
}

function DataTable(props: any) {
    // const navigate = useNavigate();

    // const onCellClick = (params: GridCellParams, event: MuiEvent<React.MouseEvent>, details: GridCallbackDetails) => {
    //     navigate(`/host/setting/${params.row.idroom}`);
    // };

    return (
        <div style={{ height: 400, width: '100%', marginBottom: '50px' }}>
            <DataGrid
                rows={props.rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick={true}
                sx={{ fontSize: '17px', overflowX: 'hidden' }}
                // onCellClick={onCellClick}
            />
        </div>
    );
}

export default ListRoomOfHost;
