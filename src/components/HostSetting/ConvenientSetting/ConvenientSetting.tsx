import './ConvenientSetting.scss';

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';

export default function ConvenientSetting() {
    const navigate = useNavigate()

    const handleChange = () => {
        navigate('/host/setting/convenient')
    }

    return (
        <div style={{ fontSize: '15px', paddingRight: '50px', paddingBottom: '50px' }}>
            <h3>Tiện ích</h3>
            <Accordion onClick={handleChange}>
                <AccordionSummary expandIcon={<NavigateNextIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <p style={{ width: '33%', flexShrink: 0 }}>Tiện ích</p>
                    <p style={{ color: 'text.secondary' }}>Wifi, ...</p>
                </AccordionSummary>
            </Accordion>  
        </div>
    );
}
