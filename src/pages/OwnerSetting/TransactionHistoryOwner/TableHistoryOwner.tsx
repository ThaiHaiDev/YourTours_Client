import { DataGrid, GridColDef } from '@mui/x-data-grid';

// import './TableHistoryOwner.scss';
import { useEffect, useState } from 'react';

import bookingApi from '../../../services/bookingApi';
import formatPrice from '../../../utils/formatPrice';

const TableHistoryOwner = () => {
    const [dataListHistory, setDataListHistory] = useState<any>([]);

    useEffect(() => {
        bookingApi.getHistoryOfHost().then((dataResponse: any) => {
            setDataListHistory(dataResponse.data.content);
        });
    }, []);

    console.log(dataListHistory);

    const rows = [];
    for (var i = 0; i < dataListHistory.length; i++) {
        rows.push({
            id: i,
            idHistory: dataListHistory[i].id,
            nameCustomer: dataListHistory[i]?.customerName ? dataListHistory[i].customerName : '',
            totalCost: dataListHistory[i]?.totalCost ? formatPrice(dataListHistory[i].totalCost) : '',
            dateStart: dataListHistory[i]?.dateStart ? dataListHistory[i].dateStart : '',
            dateEnd: dataListHistory[i]?.dateStart ? dataListHistory[i].dateStart : '',
            guests: dataListHistory[i]?.numberOfGuests ? dataListHistory[i].numberOfGuests : '0',
            nameHome: dataListHistory[i].homeName ? dataListHistory[i].homeName : '',
        });
    }

    return (
        <div className="listdata_history">
            <DataTable rows={rows} />
        </div>
    );
};

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'idHistory', headerName: 'ID', width: 70, hide: true },
    { field: 'nameCustomer', headerName: 'Tên khách hàng', width: 250 },
    { field: 'totalCost', headerName: 'Tổng thanh toán', width: 160 },
    {
        field: 'dateStart',
        headerName: 'Ngày đặt phòng',
        width: 160,
    },
    {
        field: 'dateEnd',
        headerName: 'Ngày trả phòng',
        width: 160,
    },
    {
        field: 'guests',
        headerName: 'Lượng khách',
        width: 140,
    },
    { field: 'nameHome', headerName: 'Tên nhà thuê', width: 180 },
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
