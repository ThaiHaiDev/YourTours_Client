import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import './DialogCountRoom.scss';
import CountNumber from '../CountNumber/CountNumber';
import roomCategoryApi from '../../services/roomCategoryApi';

export default function DialogCountRoom() {
    const [open, setOpen] = React.useState(false);
    const [listCategoryRoom, setListCategoryRoom] = React.useState<any>([]);

    React.useEffect(() => {
        roomCategoryApi.getAllRoomCategory().then((dataResponse) => {
            setListCategoryRoom(dataResponse.data.content);
        });
    }, []);

    console.log(listCategoryRoom);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="dialog-count__room">
            <p onClick={handleClickOpen} className="edit-count">
                Chỉnh sửa phòng và không gian
            </p>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div>
                    <DialogTitle
                        id="alert-dialog-title"
                        sx={{ fontSize: '18px', fontWeight: 'bold', width: '600px', marginBottom: '20px' }}
                    >
                        {'Khách có thể sử dụng những khu vực nào?'}
                    </DialogTitle>
                    <DialogContent sx={{ fontWeight: 'bold' }}>
                        {listCategoryRoom?.map((categoryRoom: any, index: number) => (
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p style={{ fontSize: '15px' }}>{categoryRoom?.name}</p>
                                    <CountNumber />
                                </div>
                                <hr />
                            </div>
                        ))}
                    </DialogContent>
                </div>

                <DialogActions>
                    <Button onClick={handleClose} color="error" sx={{ fontSize: '14px' }}>
                        Close
                    </Button>
                    <Button onClick={handleClose} autoFocus sx={{ fontSize: '14px', textTransform: 'none' }}>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
