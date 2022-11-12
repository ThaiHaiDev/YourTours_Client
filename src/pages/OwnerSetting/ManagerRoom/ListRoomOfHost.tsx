import NavbarOwner from '../../../components/NavbarOwner/NavbarOwner';
import { DataGrid, GridCallbackDetails, GridCellParams, GridColDef, MuiEvent } from '@mui/x-data-grid';

import './ListRoomOfHost.scss'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import homeDetailApi from '../../../services/homeDetailApi';
import mapProvince from '../../../utils/mapProvince';


const ListRoomOfHost = () => {
    const [dataListhome, setDataListHome] = useState<any>([])
    useEffect(() => {
        homeDetailApi.getListHomeOfHost().then((dataResponse:any) => {
            setDataListHome(dataResponse.data.content)
        })
    }, [])

    const test = []
    for (var i = 0; i < dataListhome.length; i++) {
        test.push({
            id: i,
            idroom: dataListhome[i].id,
            name: dataListhome[i]?.name ? dataListhome[i].name : '',
            status: dataListhome[i].status,
            bedroom: dataListhome[i].roomsImportant[0] ? dataListhome[i].roomsImportant[0].number : '0',
            giuong: dataListhome[i].numberOfBed,
            badroom:  dataListhome[i].roomsImportant[2] ? dataListhome[i].roomsImportant[2].number : 0,
            location: dataListhome[i].provinceCode ? mapProvince(dataListhome[i].provinceCode) : '',
            editrecent: dataListhome[i].lastModifiedDate.toString()
        })
    }
    const rows = [
        { id: 1, idroom: '123213213', name: 'Snow', status: 'Jon', bedroom: dataListhome.numberOfBed, giuong: 35, badroom: 20, location: 'Ho Chi Minh', editrecent: '1 ngày trước'},
        { id: 2, idroom: '000000000', name: 'Snow', status: 'Jon', bedroom: 35, giuong: 35, badroom: 20, location: 'Ho Chi Minh', editrecent: '1 ngày trước'},
    ];

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
                <DataTable rows={test}/>
            </div>
        </div>
    );
};

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'idroom', headerName: 'ID', width: 70, hide: true },
    { field: 'name', headerName: 'Nhà / phòng cho thuê', width: 400 },
    { field: 'status', headerName: 'Trạng thái', width: 130 },
    {
        field: 'bedroom',
        headerName: 'Phòng ngủ',
        type: 'number',
        width: 140,
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
        width: 140,
    },
    { field: 'location', headerName: 'Vị trí', width: 180 },
    { field: 'editrecent', headerName: 'Sửa đổi gần nhất', width: 180 },
];

function DataTable(props:any) {
    const navigate = useNavigate();

    const onCellClick = (params: GridCellParams, event: MuiEvent<React.MouseEvent>, details: GridCallbackDetails) => {
        navigate(`/host/setting/${params.row.idroom}`)
    }

    return (
        <div style={{ height: 350, width: '100%' }}>
            <DataGrid rows={props.rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection disableSelectionOnClick={true} sx={{fontSize: '17px'}} onCellClick={onCellClick}/>
        </div>
    );
}

export default ListRoomOfHost;
