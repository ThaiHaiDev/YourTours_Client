import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';

import './CheckBox.scss';

export default function CheckBox() {
    const [idCheck, setIdCheck] = useState<any>([]);

    const handleChangeBox = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!idCheck.some((check: any) => check.id === event.target.value)) {
            setIdCheck([...idCheck, { id: event.target.value }]);
        } else {
            setIdCheck(
                idCheck.filter((check: any) => {
                    return check.id !== event.target.value;
                }),
            );
        }
    };

    console.log(idCheck);

    return (
        <FormGroup>
            <div className="row">
                <div className="col l-6">
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={handleChangeBox}
                                value="1"
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                            />
                        }
                        label="Toàn bộ nhà"
                        sx={{ '.MuiTypography-root': { fontSize: 17 } }}
                    />
                </div>
                <div className="col l-6">
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={handleChangeBox}
                                value="2"
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                            />
                        }
                        label="Phòng chung"
                        sx={{ '.MuiTypography-root': { fontSize: 17 } }}
                    />
                </div>
                <div className="col l-6">
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={handleChangeBox}
                                value="3"
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                            />
                        }
                        label="Phòng riêng"
                        sx={{ '.MuiTypography-root': { fontSize: 17 }, '.MuiFormControlLabel-root': { width: '30%' } }}
                    />
                </div>
            </div>
        </FormGroup>
    );
}
