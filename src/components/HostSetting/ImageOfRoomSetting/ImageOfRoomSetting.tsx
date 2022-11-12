import './ImageOfRoomSetting.scss';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { ChangeEvent, useState } from 'react';

const ImageOfRoomSetting = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const [previewSource, setPreviewSource] = React.useState<any>('');
    const [fileImage, setFileImage] = useState<File>()

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleClose = () => {
        setExpanded(false);
    };

    const previewFile = (file: any) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0];
            previewFile(file);
            setFileImage(file)
        } 
    }

    return (
        <div className="image-of-room__setting">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <p style={{ width: '33%', flexShrink: 0, fontSize: '18px', fontWeight: 'bold' }}>Phòng ngủ</p>
                </AccordionSummary>
                <AccordionDetails>
                    <form>
                        <div className="content-input-image">
                            <p>{!previewSource && 'Không có ảnh.'}</p>
                            <input type="file" value="" onChange={handleFileInputChange}/>
                        </div>
                        {previewSource && <img src={previewSource} alt="chosen" style={{ height: '180px', width: '180px', marginBottom: '10px' }} />}
                        <div className="btn">
                            <p onClick={handleClose} className="btn-close">
                                Hủy
                            </p>
                            <button className="btn-save">Lưu</button>
                        </div>
                    </form>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default ImageOfRoomSetting;
