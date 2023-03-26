import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SelectedLocate from '../../../pages/SetupOwner/StepperOne/SelectedLocate';

import './LocationSetting.scss';

import { AxiosError } from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';

import { useParams } from 'react-router-dom';
import homeApi from '../../../services/homeApi';

export default function LocationSetting(props: any) {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const [idProvince, setIdProvince] = React.useState<string>('');

    const { handleSubmit, register, setValue } = useForm();

    const params = useParams();

    const { enqueueSnackbar } = useSnackbar();

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleClose = () => {
        setExpanded(false);
    };

    const [nameProvince, setNameProvince] = React.useState<string>('');
    React.useEffect(() => {
        if (props?.locationRoom.localName) {
            setNameProvince(props.locationRoom.localName);
        }
    }, [props.locationRoom.localName]);

    React.useEffect(() => {
        setValue('address', props?.locationRoom.address);
    }, [props.locationRoom.address, setValue]);

    const onSubmit: SubmitHandler<any> = (dataAddress: any) => {
        const newData = {
            data: {
                address: dataAddress.address,
                provinceCode: idProvince,
            },
            id: params.idHome, 
        };
        homeApi
            .updateAddressHome(newData)
            .then((dataResponse: any) => {
                enqueueSnackbar('Cập nhật thành công', { variant: 'success' });
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    return (
        <div style={{ fontSize: '15px', paddingRight: '50px', paddingBottom: '50px' }}>
            <h3>Vị trí</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <p style={{ width: '33%', flexShrink: 0 }}>Địa chỉ</p>
                        <p style={{ color: 'text.secondary' }}>{nameProvince}</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <SelectedLocate setValueStepOne={setIdProvince} />
                        <input className="input-address" {...register('address')} />
                        <div className="btn">
                            <p onClick={handleClose} className="btn-close">
                                Hủy
                            </p>
                            <button className="btn-save">Lưu</button>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </form>
        </div>
    );
}
