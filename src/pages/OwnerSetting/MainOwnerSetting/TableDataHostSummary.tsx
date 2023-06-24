import { DataGrid, GridColDef } from '@mui/x-data-grid';

// import './TableDataHostSummary.scss';
import { useState } from 'react';
import summaryHomeApi from '../../../services/summaryHostApi';
import formatPrice from '../../../utils/formatPrice';

import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

const TableDataHostSummary = (props: any) => {
    const [listSelected, setListSelected] = useState<any>([]);

    const { enqueueSnackbar } = useSnackbar();

    const rows = [];
    for (var i = 0; i < props.data.length; i++) {
        rows.push({
            id: i,
            idroom: props.data[i].id,
            name: props.data[i]?.homeName ? props.data[i].homeName : '',
            nameCustomer: props.data[i]?.customerName ? props.data[i].customerName : '',
            dateStart: props.data[i]?.dateStart ? props.data[i].dateStart : '',
            dateEnd: props.data[i]?.dateEnd ? props.data[i].dateEnd : '',
            guests: props.data[i]?.guests ? props.data[i].guests : '1',
            price: props.data[i]?.totalCost ? formatPrice(props.data[i].totalCost) : '1 đ',
            priceBefore: props.data[i]?.moneyPayed ? formatPrice(props.data[i].moneyPayed) : '0 đ',
        });
    }

    const handleSelectedChange = (value: any) => {
        setListSelected(value);
    };

    const handleCheck = () => {
        if (listSelected.length > 1) {
            enqueueSnackbar('Vui lòng chọn từng nhà để thao tác', { variant: 'warning' });
        } else {
            const dataCheckIn = {
                bookingId: listSelected[0].idroom,
            };
            if (props.idTab === '0') {
                summaryHomeApi
                    .setCheckIn(dataCheckIn)
                    .then((dataResponse) => {
                        enqueueSnackbar('Check in thành công', { variant: 'success' });
                        if (props?.setDataCheckIn) {
                            props?.setDataCheckIn(dataCheckIn);
                        }
                    })
                    .catch((error: AxiosError<any>) => {
                        enqueueSnackbar(error.response?.data.message, { variant: 'error' });
                    });
            } else if (props.idTab === '1') {
                summaryHomeApi
                    .setCheckOut(dataCheckIn)
                    .then((dataResponse) => {
                        enqueueSnackbar('Check out thành công', { variant: 'success' });
                    })
                    .catch((error: AxiosError<any>) => {
                        enqueueSnackbar(error.response?.data.message, { variant: 'error' });
                    });
            }
        }
    };

    return (
        <div className="listdata_summary">
            <DataTable rows={rows} listSelected={handleSelectedChange} handleCheck={handleCheck} idTab={props.idTab} />
        </div>
    );
};

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'idroom', headerName: 'ID', width: 70, hide: true },
    { field: 'name', headerName: 'Nhà / phòng cho thuê', width: 260 },
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
        width: 120,
    },
    { field: 'price', headerName: 'Tổng tiền', width: 130 },
    { field: 'priceBefore', headerName: 'Đã thanh toán', width: 140 },
];

function DataTable(props: any) {
    return (
        <div style={{ height: 400, width: '100%', marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'right' }}>
                {props?.idTab === '0' ? (
                    <button onClick={props.handleCheck} className="btn-check-status">
                        Check in
                    </button>
                ) : (
                    <button onClick={props.handleCheck} className="btn-check-status">
                        Check out
                    </button>
                )}
            </div>

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
