import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import './DialogConvenient.scss';

export default function DialogConvenient() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='dialog-convenient'>
            <Button variant="outlined" onClick={handleClickOpen} className='btn-show' >
                Hiện tất cả các tiện nghi
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={true}
                maxWidth='md'
            >
                <DialogTitle id="alert-dialog-title" sx={{fontSize: '18px', fontWeight: 'bold', width: '600px', marginBottom: '20px'}}>{"Nơi này có những gì cho bạn"}</DialogTitle>
                    <DialogContent sx={{fontSize: '16px', fontWeight: 'bold'}}>
                        Phòng tắm
                        <DialogContentText id="alert-dialog-description" sx={{fontSize: '14px', marginTop: '20px'}}>
                            Sản phẩm vệ sinh
                        </DialogContentText>
                        <hr />
                        <DialogContentText id="alert-dialog-description" sx={{fontSize: '14px', marginTop: '20px'}}>
                            Vòi sen tắm ngoài trời
                        </DialogContentText>
                        <hr />
                    </DialogContent>

                    <DialogContent sx={{fontSize: '16px', fontWeight: 'bold'}}>
                        Phòng tắm
                        <DialogContentText id="alert-dialog-description" sx={{fontSize: '14px', marginTop: '20px'}}>
                            Sản phẩm vệ sinh
                        </DialogContentText>
                        <hr />
                        <DialogContentText id="alert-dialog-description" sx={{fontSize: '14px', marginTop: '20px'}}>
                            Vòi sen tắm ngoài trời
                        </DialogContentText>
                        <hr />
                    </DialogContent>

                    <DialogContent sx={{fontSize: '16px', fontWeight: 'bold'}}>
                        Phòng tắm
                        <DialogContentText id="alert-dialog-description" sx={{fontSize: '14px', marginTop: '20px'}}>
                            Sản phẩm vệ sinh
                        </DialogContentText>
                        <hr />
                        <DialogContentText id="alert-dialog-description" sx={{fontSize: '14px', marginTop: '20px'}}>
                            Vòi sen tắm ngoài trời
                        </DialogContentText>
                        <hr />
                    </DialogContent>
                    
                    <DialogContent sx={{fontSize: '16px', fontWeight: 'bold'}}>
                        Phòng tắm
                        <DialogContentText id="alert-dialog-description" sx={{fontSize: '14px', marginTop: '20px'}}>
                            Sản phẩm vệ sinh
                        </DialogContentText>
                        <hr />
                        <DialogContentText id="alert-dialog-description" sx={{fontSize: '14px', marginTop: '20px'}}>
                            Vòi sen tắm ngoài trời
                        </DialogContentText>
                        <hr />
                    </DialogContent>
                    
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
