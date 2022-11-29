import { DataGrid, GridColDef } from '@mui/x-data-grid';

// import './TableDataHostSummary.scss';
import { useState } from 'react';
import formatPrice from '../../../utils/formatPrice';

const TableDataHostSummary = (props: any) => {
    const [listSelected, setListSelected] = useState<any>([]);

    console.log(props.data);

    const rows = [];
    for (var i = 0; i < props.data.length; i++) {
        rows.push({
            id: i,
            // idroom: dataListhome[i].id,
            name: props.data[i]?.homeName ? props.data[i].homeName : '',
            nameCustomer: props.data[i]?.customerName ? props.data[i].customerName : '',
            dateStart: props.data[i]?.dateStart ? props.data[i].dateStart : '',
            dateEnd: props.data[i]?.dateEnd ? props.data[i].dateEnd : '',
            guests: props.data[i]?.guests ? props.data[i].guests : '1',
            price: props.data[i]?.totalCost ? formatPrice(props.data[i].totalCost)  : '1 đ',
        });
    }

    const handleSelectedChange = (value: any) => {
        setListSelected(value);
    };

    return (
        <div className="listdata_summary">
            <DataTable rows={rows} listSelected={handleSelectedChange} />
        </div>
    );
};

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'idroom', headerName: 'ID', width: 70, hide: true },
    { field: 'name', headerName: 'Nhà / phòng cho thuê', width: 300 },
    { field: 'nameCustomer', headerName: 'Tên khách hàng', width: 140 },
    {
        field: 'dateStart',
        headerName: 'Ngày nhận phòng',
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
    { field: 'price', headerName: 'Tổng tiền', width: 180 },
];

function DataTable(props: any) {
    return (
        <div style={{ height: 400, width: '100%', marginBottom: '50px' }}>
            <DataGrid
                rows={props.rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                sx={{ fontSize: '17px', overflowX: 'hidden' }}
                onSelectionModelChange={(ids) => {
                    const selectedIDs = new Set(ids);
                    const selectedRows = props.rows.filter((row: any) => selectedIDs.has(row.id));
                    props.listSelected(selectedRows);
                }}
            />
        </div>
    );
}

export default TableDataHostSummary;
