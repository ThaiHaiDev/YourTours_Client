import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import './DialogFilter.scss';
import RangePriceFilter from './RangePriceFilter/RangePriceFilter';
import CheckBox from './CheckBoxFilter/CheckBox';
import CountRoomFilter from './CountRoomFilter/CountRoomFilter';

export default function DialogFilter() {
    const [open, setOpen] = useState<boolean>(false);
    const [valuePriceRange, setValuePriceRange] = useState<number[]>([1, 5000000]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChangePriceRange = (value: number[]) => {
        setValuePriceRange(value);
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
                            <CheckBox />
                        </div>
                        <hr />
                    </DialogContent>

                    <DialogContent sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                        Phòng và phòng ngủ
                        <div style={{ marginTop: '30px' }}>
                            <CountRoomFilter />
                            <CountRoomFilter />
                            <CountRoomFilter />
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
                        <Button onClick={handleClose} autoFocus sx={{ fontSize: '14px', textTransform: 'none' }}>
                            OK
                        </Button>
                    </DialogActions>
                </div>
            </Dialog>
        </div>
    );
}