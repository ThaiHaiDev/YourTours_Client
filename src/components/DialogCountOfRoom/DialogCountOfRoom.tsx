import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { useSnackbar } from 'notistack';
import { AxiosError } from 'axios';

import './DialogCountOfRoom.scss';
import CountNumberBedOfRoom from '../CountNumber/CountNumberBedOfRoom';
import roomOfHomeApi from '../../services/roomOfHome';

export default function DialogCountOfRoom(props: any) {
    const [open, setOpen] = React.useState(false);
    const [dataSetBedCount, setDataSetBedCount] = React.useState<any>([]);
    const [listBedOfRoom, setListBedOfRoom] = React.useState<any>([]);

    const { enqueueSnackbar } = useSnackbar();

    React.useEffect(() => {
        roomOfHomeApi.getAllBedOfRoom(`${props.roomOfHomeId}`).then((dataBed) => {
            setListBedOfRoom(dataBed.data.content);
        });
    }, [props.roomOfHomeId]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

     const Update = (id: string | undefined, data: any) => {
        props.setListRoomOfHome(
            props.listRoomOfHome?.map((item: any) => {
                if (item.id === id) {
                    item.descriptionOfBed = data;
                }
                return item;
            }),
        );
    };

    const handleSetDataBedCount = (value: any) => {
        if (!dataSetBedCount.some((check: any) => check.categoryId === value.categoryId)) {
            setDataSetBedCount([...dataSetBedCount, { ...value, roomOfHomeId: props?.roomOfHomeId }]);
        } else {
            for (const obj of dataSetBedCount) {
                if (obj.categoryId === value.categoryId) {
                    obj.amount = value.amount;
                    break;
                }
            }
        }
    };

    const handleSave = () => {
        const newCount = {
            listBedOfHomeDetail: dataSetBedCount
        };
        roomOfHomeApi
            .saveCountBedOfHome(newCount)
            .then((data: any) => {
                enqueueSnackbar('Lưu thành công', { variant: 'success' });
                setOpen(false);
                Update(props.roomOfHomeId, data.data.bedDescription);
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    return (
        <div className="dialog-count-of__room">
            <p onClick={handleClickOpen} className="edit-count-bed" style={{color: 'black'}}>
                Thêm
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
                        {listBedOfRoom?.map((bed: any, index: number) => (
                            <div key={index}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p style={{ fontSize: '15px' }}>{bed?.name}</p>
                                    <CountNumberBedOfRoom
                                        handleSetDataBedCount={handleSetDataBedCount}
                                        categoryId={bed?.id}
                                        countInit={bed?.numberOfRoom}
                                    />
                                </div>
                                <hr />
                            </div>
                        ))}
                    </DialogContent>
                </div>

                <DialogActions>
                    <Button onClick={handleClose} color="error" sx={{ fontSize: '14px', textTransform: 'none' }}>
                        Close
                    </Button>
                    <Button onClick={handleSave} autoFocus sx={{ fontSize: '14px', textTransform: 'none' }}>
                        Lưu
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
