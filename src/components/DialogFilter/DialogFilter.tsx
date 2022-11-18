import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import './DialogFilter.scss';
import RangePriceFilter from './RangePriceFilter/RangePriceFilter';
import CheckBox from './CheckBoxFilter/CheckBox';
import CountRoomFilter from './CountRoomFilter/CountRoomFilter';
import filterApi from '../../services/filterApi';
import { useNavigate } from 'react-router-dom';

export default function DialogFilter(props: any) {
    const [open, setOpen] = useState<boolean>(false);
    const [valuePriceRange, setValuePriceRange] = useState<any>([1, 5000000]);
    const [filterAmenities, setFilterAmenities] = useState<any>([]);
    const [numberOfBed, setNumberOfBed] = useState<string>('');
    const [numberOfBedRoom, setNumberOfBedRoom] = useState<string>('');
    const [numberOfBathRoom, setNumberOfBathRoom] = useState<string>('');
    const [filter, setFilter] = useState<string>('');

    useEffect(() => {
        setFilter(`${valuePriceRange}${numberOfBed}&${numberOfBedRoom}&${numberOfBathRoom}&${filterAmenities}`)
    }, [filterAmenities, valuePriceRange, numberOfBed, numberOfBedRoom, numberOfBathRoom])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const navigate = useNavigate();

    const handleFilter = () => {
        filterApi.getAllRoomsWithFilter(filter).then((dataResponse: any) => {
            if (props.filterData) {
                props.filterData(dataResponse.data.content);
            }
            navigate({
                search: filter,
            });
            setOpen(false);
        });
    };

    const handleChangePriceRange = (value: number[]) => {
        setValuePriceRange(`priceFrom=${value[0]}&priceTo=${value[1]}&`);
    };

    const handleChangeFilterAmenities = (value: string) => {
        setFilterAmenities(`amenities=${value}&`);
    };
    const handleChangeNumberOfBed = (value: number) => {
        if (value !== 0) {
            setNumberOfBed(`numberOfBed=${value}`);
        } else {
            setNumberOfBed('')
        }
    };
    const handleChangeNumberOfBedRoom = (value: number) => {
        if (value !== 0) {
            setNumberOfBedRoom(`numberOfBedRoom=${value}`)
        } else {
            setNumberOfBedRoom('')
        }
    };
    const handleChangeNumberOfBathRoom = (value: number) => {
        if (value !== 0) {
            setNumberOfBathRoom(`numberOfBathRoom=${value}`)
        } else {
            setNumberOfBathRoom('')
        }
    };

    // console.log(valuePriceRange)

    return (
        <div className="dialog-filter">
            <Button variant="outlined" onClick={handleClickOpen} className="btn-show">
                Bộ lọc
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={true}
                maxWidth="md"
            >
                <div>
                    <DialogTitle
                        id="alert-dialog-title"
                        sx={{ fontSize: '18px', fontWeight: 'bold', width: '600px', marginBottom: '20px' }}
                    >
                        {'Bộ lọc'}
                    </DialogTitle>
                    <DialogContent sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                        Khoảng giá
                        <div style={{ marginTop: '30px' }}>
                            <RangePriceFilter handleChangePriceRange={handleChangePriceRange} />
                        </div>
                        <br /> <hr />
                    </DialogContent>

                    <DialogContent sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                        Loại nơi ở
                        <div style={{ marginTop: '30px' }}>
                            <CheckBox setFilterAmenities={handleChangeFilterAmenities} />
                        </div>
                        <hr />
                    </DialogContent>

                    <DialogContent sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                        Phòng và phòng ngủ
                        <div style={{ marginTop: '30px' }}>
                            <CountRoomFilter name='Phòng ngủ' handleChangeNumberOfBed={handleChangeNumberOfBed} />
                            <CountRoomFilter name='Gường'handleChangeNumberOfBedRoom={handleChangeNumberOfBedRoom} />
                            <CountRoomFilter name='Phòng tắm' handleChangeNumberOfBathRoom={handleChangeNumberOfBathRoom} />
                        </div>
                        <hr />
                    </DialogContent>

                    <DialogContent sx={{ fontSize: '16px', fontWeight: 'bold', paddingBottom: '50px' }}>
                        Tiện ích
                        <hr />
                    </DialogContent>
                </div>
                <div
                    style={{ position: 'fixed', bottom: 0, marginBottom: '33px', background: 'white', width: '885px' }}
                >
                    <DialogActions>
                        <Button onClick={handleClose} color="error" sx={{ fontSize: '14px' }}>
                            Close
                        </Button>
                        <Button onClick={handleFilter} autoFocus sx={{ fontSize: '14px', textTransform: 'none' }}>
                            OK
                        </Button>
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    );
}
