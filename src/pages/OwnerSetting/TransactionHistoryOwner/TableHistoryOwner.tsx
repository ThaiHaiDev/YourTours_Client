import { DataGrid, GridColDef } from '@mui/x-data-grid';

// import './TableHistoryOwner.scss';
import { useEffect, useState } from 'react';
import homeDetailApi from '../../../services/homeDetailApi';
import mapProvince from '../../../utils/mapProvince';

import format from 'date-fns/format';

const TableHistoryOwner = () => {
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
            idHistory: dataListhome[i].id,
            name: dataListhome[i]?.name ? dataListhome[i].name : '',
            status: dataListhome[i].status,
            bedroom: dataListhome[i].roomsImportant[0] ? dataListhome[i].roomsImportant[0].number : '0',
            giuong: dataListhome[i].numberOfBed,
            badroom: dataListhome[i].roomsImportant[2] ? dataListhome[i].roomsImportant[2].number : 0,
            location: dataListhome[i].provinceCode ? mapProvince(dataListhome[i].provinceCode) : '',
            editrecent: format(new Date(dataListhome[i].lastModifiedDate.toString()), 'hh:mm MM/dd/yyyy'),
        });
    }

    return (
        <div className="listdata_history">
            <DataTable rows={rows} />
        </div>
    );
};

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'idHistory', headerName: 'ID', width: 70, hide: true },
    { field: 'name', headerName: 'Tên khách hàng', width: 400 },
    { field: 'status', headerName: 'Tổng thanh toán', width: 130 },
    {
        field: 'bedroom',
        headerName: 'Ngày đặt phòng',
        width: 140,
    },
    {
        field: 'giuong',
        headerName: 'Ngày trả phòng',
        width: 125,
    },
    {
        field: 'badroom',
        headerName: 'Số lượng khách',
        type: 'number',
        width: 140,
    },
    { field: 'location', headerName: 'Phương thức thanh toán', width: 180 },
    { field: 'editrecent', headerName: 'Sửa đổi gần nhất', width: 180 },
];

function DataTable(props: any) {
    return (
        <div style={{ height: 500, width: '100%', marginBottom: '50px' }}>
            <DataGrid
                rows={props.rows}
                columns={columns}
                pageSize={6}
                rowsPerPageOptions={[6]}
                checkboxSelection
                sx={{ fontSize: '17px', overflowX: 'hidden' }}
            />
        </div>
    );
}

export default TableHistoryOwner;
