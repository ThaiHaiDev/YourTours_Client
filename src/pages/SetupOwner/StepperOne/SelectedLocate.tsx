import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Province from '../../../mockdata/ProvinceVN.json';

export default function SelectedLocate(props:any) {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
        props.setValueStepOne(event.target.value)
    };

    return (
        <div className='selected-locate'>
            <FormControl sx={{ m: 1, minWidth: 120, width: '50%' }}>
                <InputLabel id="demo-simple-select-helper-label" style={{zIndex: '80', background: 'white', paddingRight: '5px'}}>Tỉnh thành</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {Province?.map((province) => (
                        <MenuItem value={province.code} style={{fontSize: '15px'}} key={province.code}>{province.name}</MenuItem>
                    ))}
                </Select>
                <FormHelperText sx={{fontSize: '10px'}}>Vui lòng chọn tỉnh thành</FormHelperText>
            </FormControl>
        </div>
    );
}
