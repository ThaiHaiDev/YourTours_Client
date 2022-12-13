import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { useForm, SubmitHandler } from 'react-hook-form';

import './UpdateForm.scss';

export default function UpdateForm(props: any) {
    const [open, setOpen] = React.useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<any>();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    React.useEffect(() => {
        for (var i = 0; i < props.fieldData.length; i++) {
            setValue(props.fieldData[i].nameRegister, props.data[props.fieldData[i].nameRegister]);
        }
    }, [setValue, props.data, props.fieldData]);

    const onSubmit: SubmitHandler<any> = async (data: any) => {
        if (props.updateData) {
            props.updateData({
                id: props.data.id,
                data: data,
            });
        }
    };

    return (
        <div>
            <img
                src="https://img.icons8.com/color/48/000000/edit--v1.png"
                alt="icon__update"
                className="icon__btn"
                onClick={handleClickOpen}
            />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" sx={{ paddingBottom: 0, fontSize: '18px', marginLeft: '10px' }}>
                    {'Cập nhật thông tin'}
                </DialogTitle>
                <form className="dialog__update" onSubmit={handleSubmit(onSubmit)}>
                    <DialogContent>
                        <div className="row">
                            {props.fieldData?.map((field: any, index: number) => (
                                <div className="col l-12 key-col" key={index}>
                                    <h2 className="title-field">{field.title}</h2>
                                    <input
                                        type="text"
                                        className="update-form__input"
                                        placeholder={field.placeholder}
                                        {...register(field.nameRegister, {
                                            required: field.nameRequire,
                                        })}
                                    />
                                    {errors[field.nameRegister] && (
                                        <span className="message_error">{`${
                                            errors[field.nameRegister] && errors[field.nameRegister]?.message
                                        }`}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">Update</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}
