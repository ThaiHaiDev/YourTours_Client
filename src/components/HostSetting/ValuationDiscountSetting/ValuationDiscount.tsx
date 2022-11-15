import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './ValuationDiscount.scss';
import formatPrice from '../../../utils/formatPrice';

export default function ValuationDiscountSetting(props: any) {
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const [numberLength, setNumberLength] = React.useState<number>(0)

    React.useEffect(() => {
        if (props.detailPriceRoom.discounts) {
            setNumberLength(props.detailPriceRoom.discounts.length + 2)
        }
    }, [props.detailPriceRoom])

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleClose = () => {
        setExpanded(false)
    }

    return (
        <div style={{ fontSize: '15px', paddingRight: '50px', paddingBottom: '50px' }}>
            <h3>Định giá và tình trạng phòng</h3>
            <h4>Định giá</h4>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <p style={{ width: '33%', flexShrink: 0 }}>Giá tiền theo đêm</p>
                    <p style={{ color: 'text.secondary' }}>{formatPrice(props?.detailPriceRoom.costPerNightDefault)}</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est,
                        id dignissim quam.
                    </p>
                    <div className='btn'>
                        <p onClick={handleClose} className='btn-close'>Hủy</p>
                        <button className='btn-save'>Lưu</button>
                    </div>
                </AccordionDetails>
            </Accordion>

            <h4>Giảm giá</h4>
            {props?.detailPriceRoom.discounts?.map((discount:any, index: number) => {
                var i = 2 + index;
                return (
                    <Accordion expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)} key={index}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                            <p style={{ width: '33%', flexShrink: 0 }}>{discount?.category.name}</p>
                            <p style={{ color: 'text.secondary' }}>{discount?.config ? discount?.config : 'Chưa thiết lập'}</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est,
                                id dignissim quam.
                            </p>
                            <div className='btn'>
                                <p onClick={handleClose} className='btn-close'>Hủy</p>
                                <button className='btn-save'>Lưu</button>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
            
            

            <h4>Phụ phí</h4>
            {props?.detailPriceRoom.surcharges?.map((surcharges:any, index: number) => {
                var j = numberLength + index;
                return (
                    <Accordion expanded={expanded === `panel${j}`} onChange={handleChange(`panel${j}`)} key={j}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                            <p style={{ width: '33%', flexShrink: 0 }}>{surcharges?.surchargeCategoryName}</p>
                            <p style={{ color: 'text.secondary' }}>{surcharges?.cost ? surcharges?.cost : 'Chưa thiết lập'}</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est,
                                id dignissim quam.
                            </p>
                            <div className='btn'>
                                <p onClick={handleClose} className='btn-close'>Hủy</p>
                                <button className='btn-save'>Lưu</button>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </div>
    );
}
