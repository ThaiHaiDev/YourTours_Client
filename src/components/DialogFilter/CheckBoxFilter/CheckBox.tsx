import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from 'react';

import './CheckBox.scss';
import filterApi from '../../../services/filterApi';

export default function CheckBox() {
    const [listDataFilterConvenient, setListDataFilterConvenient] = useState<any>([]);
    const [idCheck, setIdCheck] = useState<any>([]);

    useEffect(() => {
        filterApi.getAllFilterNavbar().then((dataResponse: any) => {
            dataResponse.data.content.splice(0, 1);
            setListDataFilterConvenient(dataResponse.data.content);
        });
    }, []);

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
                {listDataFilterConvenient?.map((convenient: any, index: number) => (
                    <div className="col l-6" key={index}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    onChange={handleChangeBox}
                                    value={convenient?.id}
                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                />
                            }
                            label={convenient?.name}
                            sx={{ '.MuiTypography-root': { fontSize: 17 } }}
                        />
                    </div>
                ))}
            </div>
        </FormGroup>
    );
}
