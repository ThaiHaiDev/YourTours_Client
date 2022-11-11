import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './ValuationDiscount.scss';

export default function ValuationDiscountSetting(props: any) {
    const [expanded, setExpanded] = React.useState<string | false>(false);

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
                    <p style={{ color: 'text.secondary' }}>1.000.000 vnd</p>
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
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <p style={{ width: '33%', flexShrink: 0 }}>Giảm giá theo tuần</p>
                    <p style={{ color: 'text.secondary' }}>Chưa thiết lập</p>
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
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                    <p style={{ width: '33%', flexShrink: 0 }}>Giảm giá theo tháng</p>
                    <p style={{ color: 'text.secondary' }}>Chưa thiết lập</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p>
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros
                        in elit. Pellentesque convallis laoreet laoreet.
                    </p>
                    <div className='btn'>
                        <p onClick={handleClose} className='btn-close'>Hủy</p>
                        <button className='btn-save'>Lưu</button>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
                    <p style={{ width: '33%', flexShrink: 0 }}>Giảm giá tùy chỉnh theo thời gian ở</p>
                    <p style={{ color: 'text.secondary' }}>Chưa thiết lập</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae
                        egestas augue. Duis vel est augue.
                    </p>
                    <div className='btn'>
                        <p onClick={handleClose} className='btn-close'>Hủy</p>
                        <button className='btn-save'>Lưu</button>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
                    <p style={{ width: '33%', flexShrink: 0 }}>Giảm giá cho khách đặt sớm</p>
                    <p style={{ color: 'text.secondary' }}>Chưa thiết lập</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p>Có cái đéo</p>
                    <div className='btn'>
                        <p onClick={handleClose} className='btn-close'>Hủy</p>
                        <button className='btn-save'>Lưu</button>
                    </div>
                </AccordionDetails>
            </Accordion>

            <h4>Phụ phí</h4>
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <p style={{ width: '33%', flexShrink: 0 }}>Giá tiền theo đêm</p>
                    <p style={{ color: 'text.secondary' }}>1.000.000 vnd</p>
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
            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                    <p style={{ width: '33%', flexShrink: 0 }}>Mô tả</p>
                    <p style={{ color: 'text.secondary' }}>Chưa thiết lập</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p>
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros
                        in elit. Pellentesque convallis laoreet laoreet.
                    </p>
                    <div className='btn'>
                        <p onClick={handleClose} className='btn-close'>Hủy</p>
                        <button className='btn-save'>Lưu</button>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
                    <p style={{ width: '33%', flexShrink: 0 }}>Hướng dẫn</p>
                    <p style={{ color: 'text.secondary' }}>Chưa thiết lập</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae
                        egestas augue. Duis vel est augue.
                    </p>
                    <div className='btn'>
                        <p onClick={handleClose} className='btn-close'>Hủy</p>
                        <button className='btn-save'>Lưu</button>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
                    <p style={{ width: '33%', flexShrink: 0 }}>Chính sách hoàn tiền</p>
                    <p style={{ color: 'text.secondary' }}>Chưa thiết lập</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p>Có cái đéo</p>
                    <div className='btn'>
                        <p onClick={handleClose} className='btn-close'>Hủy</p>
                        <button className='btn-save'>Lưu</button>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
