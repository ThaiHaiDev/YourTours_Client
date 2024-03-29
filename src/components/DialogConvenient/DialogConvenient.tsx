import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import './DialogConvenient.scss';
import { t } from 'i18next';

export default function DialogConvenient(props: any) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="dialog-convenient">
            <Button variant="outlined" onClick={handleClickOpen} className="btn-show">
                {t('common.convenient')}
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
                        {t('title.convenient')}
                    </DialogTitle>
                    {props?.listConvenient?.map((convi: any, index: number) => (
                        <DialogContent
                            sx={{
                                fontSize: '16px',
                                fontWeight: 'bold',
                                textDecorationLine: `${!convi.isConfig ? 'line-through' : 'none'}`,
                            }}
                            key={index}
                        >
                            {convi?.name}
                            <DialogContentText
                                id="alert-dialog-description"
                                sx={{
                                    fontSize: '14px',
                                    marginTop: '20px',
                                    textDecorationLine: `${!convi.isConfig ? 'line-through' : 'none'}`,
                                }}
                            >
                                {convi?.description}
                            </DialogContentText>
                            <hr />
                        </DialogContent>
                    ))}
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
