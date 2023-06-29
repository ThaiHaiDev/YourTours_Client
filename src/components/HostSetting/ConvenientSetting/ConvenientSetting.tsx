import * as React from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';

import './ConvenientSetting.scss';

export default function ConvenientSetting(props: any) {
    const navigate = useNavigate();
    const params = useParams();

    const nameConvenient = `${
        props?.convent && props?.convent.length !== 0 && props?.convent[0]?.name ? props?.convent[0]?.name : ''
    } ${
        props?.convent !== undefined && props?.convent.length !== 0 && props?.convent[1]?.name
            ? `, ${props?.convent[1]?.name}`
            : ''
    }, ...`;

    const handleChange = () => {
        navigate(`/host/setting/convenient/${params.idHome}`);
    };

    return (
        <div style={{ fontSize: '15px', paddingRight: '50px', paddingBottom: '50px' }}>
            <h3>Tiện ích</h3>
            <Accordion onClick={handleChange}>
                <AccordionSummary
                    expandIcon={<NavigateNextIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <p style={{ width: '33%', flexShrink: 0 }}>Tiện ích</p>
                    <p style={{ color: 'text.secondary' }}>{nameConvenient}</p>
                </AccordionSummary>
            </Accordion>
        </div>
    );
}
