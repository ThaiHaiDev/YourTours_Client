import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { AxiosError } from 'axios';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';

import './TitleSetting.scss';
import { useParams } from 'react-router-dom';
import homeApi from '../../../services/homeApi';

export default function TittleSetting(props: any) {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const { handleSubmit, register, setValue, formState: { isSubmitting }, } = useForm();
    const [refundTitle, setRefundTitle] = React.useState<string>('');

    const params = useParams();

    const { enqueueSnackbar } = useSnackbar();

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleClose = () => {
        setExpanded(false);
    };

    console.log(props.infoRoom.refundPolicy)
    React.useEffect(() => {
        setValue('name', props?.infoRoom?.name);
        setValue('description', props.infoRoom.desc);
        setValue('guide', props.infoRoom.guide);
        if (props.infoRoom.refundPolicy === 'BEFORE_ONE_DAY') {
            setValue('refundPolicy', 'Trước 1 ngày');
            setRefundTitle('Trước 1 ngày');
        } else if (props.infoRoom.refundPolicy === 'NO_REFUND') {
            setValue('refundPolicy', 'Không hoàn tiền');
            setRefundTitle('Không hoàn tiền');
        } else if (props.infoRoom.refundPolicy === 'BEFORE_SEVEN_DAYS') {
            setValue('refundPolicy', 'Trước 7 ngày');
            setRefundTitle('Trước 7 ngày');
        }
    }, [props.infoRoom.name, props.infoRoom.desc, props.infoRoom.guide, props.infoRoom.refundPolicy, setValue]);

    const onSubmit: SubmitHandler<any> = (data: any) => {
        if (data.refundPolicy === 'Trước 1 ngày' || data.refundPolicy === 'Không hoàn tiền' || data.refundPolicy === 'Trước 7 ngày') {
            var tempRefund : string = '';
            if (data.refundPolicy === 'Trước 1 ngày') {
                tempRefund = 'BEFORE_ONE_DAY';
            } else if (data.refundPolicy === 'Không hoàn tiền') {
                tempRefund = 'NO_REFUND';
            } else if (data.refundPolicy === 'Trước 7 ngày') {
                tempRefund = 'BEFORE_SEVEN_DAYS';
            }
            const newData = {
                data: {
                    name: data.name,
                    description: data.description,
                    guide: data.guide,
                    refundPolicy: tempRefund,
                },
                id: params.idHome,
            };
            homeApi
                .updateTitleHome(newData)
                .then((dataResponse: any) => {
                    enqueueSnackbar('Cập nhật thành công', { variant: 'success' });
                })
                .catch((error: AxiosError<any>) => {
                    enqueueSnackbar(error.response?.data.message, { variant: 'error' });
                });
        } else {
            enqueueSnackbar('Vui lòng điền đúng format của chính sách hoàn tiền', { variant: 'warning' });
        }
       
    };

    return (
        <div style={{ fontSize: '15px', paddingRight: '50px', paddingBottom: '50px' }}>
            <h3>Thông tin cơ bản</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <p style={{ width: '33%', flexShrink: 0 }}>Tiêu đề phòng cho thuê</p>
                        <p style={{ color: 'text.secondary' }}>{props?.infoRoom?.name}</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="content-input">
                            <h4>Tiêu đề nhà/phòng cho thuê</h4>
                            <p>Tiêu đề nhà/phòng cho thuê của bạn cần nổi bật được những điểm đặc biệt của chỗ ở.</p>
                            <input className="input-info" {...register('name')} />
                        </div>
                        <div className="btn">
                            <p onClick={handleClose} className="btn-close">
                                Hủy
                            </p>
                            <button className="btn-save" disabled={isSubmitting}>Lưu</button>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <p style={{ width: '33%', flexShrink: 0 }}>Mô tả</p>
                        <p style={{ color: 'text.secondary' }}>{props.infoRoom.desc}</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="content-input">
                            <h4>Mô tả nhà/phòng cho thuê</h4>
                            <p>
                                Hãy giúp khách hình dung về cảm giác khi ở chỗ của bạn, bao gồm cả lý do tại sao họ sẽ
                                thích ở đó.
                            </p>
                            <textarea className="text-input" {...register('description')} />
                        </div>
                        <div className="btn">
                            <p onClick={handleClose} className="btn-close">
                                Hủy
                            </p>
                            <button className="btn-save">Lưu</button>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <p style={{ width: '33%', flexShrink: 0 }}>Hướng dẫn</p>
                        <p style={{ color: 'text.secondary' }}>{props.infoRoom.guide}</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="content-input">
                            <h4>Hướng dẫn nhà/phòng cho thuê</h4>
                            <p>Thêm hướng dẫn cho nơi ở của bạn để khách có thể dể dàng tiếp cận hơn.</p>
                            <input className="input-info" {...register('guide')} />
                        </div>
                        <div className="btn">
                            <p onClick={handleClose} className="btn-close">
                                Hủy
                            </p>
                            <button className="btn-save">Lưu</button>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <p style={{ width: '33%', flexShrink: 0 }}>Chính sách hoàn tiền</p>
                        <p style={{ color: 'text.secondary' }}>{refundTitle}</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="content-input">
                            <h4>Chính sách hoàn tiền cho căn nhà của bạn</h4>
                            <p>Vui lòng điền theo mẫu: Không hoàn tiền, Trước 1 ngày, Trước 7 ngày</p>
                            <input className="input-info" {...register('refundPolicy')} />
                        </div>
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
