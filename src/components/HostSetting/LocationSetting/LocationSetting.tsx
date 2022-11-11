import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SelectedLocate from '../../../pages/SetupOwner/StepperOne/SelectedLocate';

import './LocationSetting.scss';

export default function LocationSetting() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleClose = () => {
        setExpanded(false);
    };

    return (
        <div style={{ fontSize: '15px', paddingRight: '50px', paddingBottom: '50px' }}>
            <h3>Vị trí</h3>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <p style={{ width: '33%', flexShrink: 0 }}>Địa chỉ</p>
                    <p style={{ color: 'text.secondary' }}>Hồ Chí Minh</p>
                </AccordionSummary>
                <AccordionDetails>
                    <SelectedLocate />
                    <div className="btn">
                        <p onClick={handleClose} className="btn-close">
                            Hủy
                        </p>
                        <button className="btn-save">Lưu</button>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
