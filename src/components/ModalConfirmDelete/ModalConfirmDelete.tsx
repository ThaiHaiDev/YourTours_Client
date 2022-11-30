import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import bookingApi from '../../services/bookingApi';

import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalConfirmDelete(props: any) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { enqueueSnackbar } = useSnackbar();

    const handleCancelBooking = () => {
        const dataCancel = {
            bookingId: props.idRemove,
        };
        bookingApi
            .cancelBooking(dataCancel)
            .then((data) => {
                console.log(data);
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    return (
        <div>
            <button onClick={handleOpen}>Hủy đặt</button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h4" component="h2">
                            Bạn có chắc rằng muốn xóa hay không ?
                        </Typography>
                        <div style={{ display: 'flex', justifyContent: 'right', marginTop: '10px' }}>
                            <button style={{ marginRight: '5px' }} onClick={handleClose}>
                                Không
                            </button>
                            <button onClick={handleCancelBooking}>Có</button>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
