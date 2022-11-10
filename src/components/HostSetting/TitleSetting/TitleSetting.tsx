import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function TittleSetting(props: any) {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div style={{ fontSize: '15px', paddingRight: '50px', paddingBottom: '50px' }}>
            <h3>Thông tin cơ bản</h3>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <p style={{ width: '33%', flexShrink: 0 }}>Tiêu đề phòng cho thuê</p>
                    <p style={{ color: 'text.secondary' }}>{props.infoRoom.name}</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est,
                        id dignissim quam.
                    </p>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                    <p style={{ width: '33%', flexShrink: 0 }}>Mô tả</p>
                    <p style={{ color: 'text.secondary' }}>{props.infoRoom.desc}</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p>
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros
                        in elit. Pellentesque convallis laoreet laoreet.
                    </p>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
                    <p style={{ width: '33%', flexShrink: 0 }}>Hướng dẫn</p>
                    <p style={{ color: 'text.secondary' }}>{props.infoRoom.guide}</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae
                        egestas augue. Duis vel est augue.
                    </p>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
                    <p style={{ width: '33%', flexShrink: 0 }}>Chính sách hoàn tiền</p>
                    <p style={{ color: 'text.secondary' }}>{props.infoRoom.refundPolicy}</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p>Có cái đéo</p>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
