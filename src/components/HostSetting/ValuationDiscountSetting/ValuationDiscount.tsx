import * as React from 'react';
import { AxiosError } from 'axios';
import format from 'date-fns/format';
import { useSnackbar } from 'notistack';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';

import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import homeApi from '../../../services/homeApi';
import pricesOfHomeApi from '../../../services/pricesOfHomeApi';
import formatPrice from '../../../utils/formatPrice';
import DateRangePickerComp from '../../DateGo/DateGo';
import './ValuationDiscount.scss';

export default function ValuationDiscountSetting(props: any) {
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const [numberLength, setNumberLength] = React.useState<number>(0);
    const [dateDiscountWeek, setDateDiscountWeek] = React.useState<any>(null);
    const [dateDiscountMonth, setDateDiscountMonth] = React.useState<any>(null);

    const { handleSubmit, register, setValue } = useForm();

    const params = useParams();

    const { enqueueSnackbar } = useSnackbar();

    React.useEffect(() => {
        if (props.detailPriceRoom.discounts) {
            setNumberLength(props.detailPriceRoom.discounts.length + 2);
        }
    }, [props.detailPriceRoom]);

    React.useEffect(() => {
        setValue('costPerNightDefault', props?.detailPriceRoom.costPerNightDefault);
        for (var i = 0; i < props?.detailPriceRoom.discounts.length; i++) {
            if (props?.detailPriceRoom.discounts[i].config !== null) {
                setValue(`percent${i}`, props?.detailPriceRoom.discounts[i].config.percent);
            }
        }
        for (var j = 0; j < props?.detailPriceRoom.surcharges.length; j++) {
            if (props?.detailPriceRoom.surcharges[j].cost !== null) {
                setValue(`cost${j}`, props?.detailPriceRoom.surcharges[j].cost);
            }
        }
    }, [
        props?.detailPriceRoom.costPerNightDefault,
        setValue,
        props?.detailPriceRoom.discounts,
        props?.detailPriceRoom.surcharges,
    ]);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleClose = () => {
        setExpanded(false);
    };

    const onSubmit: SubmitHandler<any> = (dataPrice: any) => {
        const newData = {
            data: {
                costPerNightDefault: parseFloat(dataPrice.costPerNightDefault),
            },
            id: params.idHome,
        };
        homeApi
            .updatePriceHome(newData)
            .then((dataResponse: any) => {
                enqueueSnackbar('Cập nhật thành công', { variant: 'success' });
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    const onSubmitDiscount: SubmitHandler<any> = (dataDiscount: any) => {
        const newData = {
            listDiscountOfHomeDetail: [
                {
                    percent: dataDiscount.percent0 ? parseFloat(dataDiscount.percent0) : null,
                    homeId: params.idHome,
                    categoryId: dataDiscount.idCategory_0,
                    dateStart: dateDiscountMonth ? format(dateDiscountMonth[0].startDate, 'yyyy-MM-dd') : null,
                    dateEnd: dateDiscountMonth ? format(dateDiscountMonth[0].endDate, 'yyyy-MM-dd') : null,
                },
                {
                    percent: dataDiscount.percent1 ? parseFloat(dataDiscount.percent1) : null,
                    homeId: params.idHome,
                    categoryId: dataDiscount.idCategory_1,
                    dateStart: dateDiscountWeek ? format(dateDiscountWeek[0].startDate, 'yyyy-MM-dd') : null,
                    dateEnd: dateDiscountWeek ? format(dateDiscountWeek[0].endDate, 'yyyy-MM-dd') : null,
                },
            ],
        };
        pricesOfHomeApi
            .setDiscountOfHome(newData)
            .then((dataResponse: any) => {
                enqueueSnackbar('Cập nhật thành công', { variant: 'success' });
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    const onSubmitSurcharge: SubmitHandler<any> = (dataSurcharge: any) => {
        const newData = {
            listSurchargeHomeDetail: [
                {
                    cost: dataSurcharge.cost0 ? parseFloat(dataSurcharge.cost0) : null,
                    homeId: params.idHome,
                    categoryId: dataSurcharge.categoryIdSurcharge_0,
                },
                {
                    cost: dataSurcharge.cost1 ? parseFloat(dataSurcharge.cost1) : null,
                    homeId: params.idHome,
                    categoryId: dataSurcharge.categoryIdSurcharge_1,
                },
                {
                    cost: dataSurcharge.cost2 ? parseFloat(dataSurcharge.cost2) : null,
                    homeId: params.idHome,
                    categoryId: dataSurcharge.categoryIdSurcharge_2,
                },
                {
                    cost: dataSurcharge.cost3 ? parseFloat(dataSurcharge.cost3) : null,
                    homeId: params.idHome,
                    categoryId: dataSurcharge.categoryIdSurcharge_3,
                },
            ],
        };

        pricesOfHomeApi
            .setSurchargeOfHome(newData)
            .then((dataResponse: any) => {
                enqueueSnackbar('Cập nhật thành công', { variant: 'success' });
            })
            .catch((error: AxiosError<any>) => {
                enqueueSnackbar(error.response?.data.message, { variant: 'error' });
            });
    };

    return (
        <div style={{ fontSize: '15px', paddingRight: '50px', paddingBottom: '50px' }} className="ValuationDiscount">
            <h3>Định giá và phụ phí</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h4>Định giá</h4>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <p style={{ width: '33%', flexShrink: 0 }}>Giá tiền theo đêm</p>
                        <p style={{ color: 'text.secondary' }}>
                            {formatPrice(props?.detailPriceRoom.costPerNightDefault)}
                        </p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="content-input">
                            <h4>Giá theo đêm</h4>
                            <p>Bạn chịu trách nhiệm chọn giá cho thuê nhà/phòng của mình.</p>
                            <input className="input-price-room__setting" {...register('costPerNightDefault')} />
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

            <h4>Giảm giá</h4>

            {props?.detailPriceRoom.discounts?.map((discount: any, index: number) => {
                var i = 2 + index;
                return (
                    <form onSubmit={handleSubmit(onSubmitDiscount)} key={index}>
                        <Accordion expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <p style={{ width: '33%', flexShrink: 0 }}>{discount?.category.name}</p>
                                <p style={{ color: 'text.secondary' }}>
                                    {discount?.config !== null &&
                                    discount?.config.percent &&
                                    discount?.config.percent !== ''
                                        ? discount?.config.percent
                                        : 'Chưa thiết lập'}
                                </p>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="content-input-discount">
                                    <h4>Mô tả {discount?.category.name}</h4>
                                    <p>
                                        {discount?.category.description
                                            ? discount?.category.description
                                            : 'Không có mô tả'}
                                    </p>
                                    {index === 0 ? (
                                        <DateRangePickerComp
                                            setDataDay={setDateDiscountMonth}
                                            dateStart={discount?.config.dateStart}
                                            dateEnd={discount?.config.dateEnd}
                                        />
                                    ) : (
                                        <DateRangePickerComp
                                            setDataDay={setDateDiscountWeek}
                                            dateStart={discount?.config.dateStart}
                                            dateEnd={discount?.config.dateEnd}
                                        />
                                    )}

                                    <input className="input-price-room__setting" {...register(`percent${index}`)} />
                                    <input
                                        {...register(`idCategory_${index}`)}
                                        type="hidden"
                                        defaultValue={discount?.category.id}
                                    />
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
                );
            })}

            <h4>Phụ phí</h4>
            {props?.detailPriceRoom.surcharges?.map((surcharges: any, index: number) => {
                var j = numberLength + index;
                return (
                    <form onSubmit={handleSubmit(onSubmitSurcharge)} key={index}>
                        <Accordion expanded={expanded === `panel${j}`} onChange={handleChange(`panel${j}`)} key={j}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <p style={{ width: '33%', flexShrink: 0 }}>{surcharges?.surchargeCategoryName}</p>
                                <p style={{ color: 'text.secondary' }}>
                                    {surcharges?.cost ? surcharges?.cost : 'Chưa thiết lập'}
                                </p>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="content-input">
                                    <h4>{surcharges?.surchargeCategoryName}</h4>
                                    <p>{surcharges?.description ? surcharges?.description : 'Không có mô tả'}</p>
                                    <input className="input-price-room__setting" {...register(`cost${index}`)} />
                                    <input
                                        {...register(`categoryIdSurcharge_${index}`)}
                                        type="hidden"
                                        defaultValue={surcharges?.surchargeCategoryId}
                                    />
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
                );
            })}
        </div>
    );
}
