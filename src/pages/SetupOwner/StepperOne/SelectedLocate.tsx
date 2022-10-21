import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectedLocate(props:any) {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
        props.setValueStepOne(event.target.value)
    };

    

    return (
        <div className='selected-locate'>
            <FormControl sx={{ m: 1, minWidth: 120, width: '50%' }}>
                <InputLabel id="demo-simple-select-helper-label">Tỉnh thành</InputLabel>
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
                    <MenuItem value={10}>Đà Nẳng</MenuItem>
                    <MenuItem value={20}>Hội An</MenuItem>
                    <MenuItem value={30}>Hồ Chí Minh</MenuItem>
                </Select>
                <FormHelperText>With label + helper text</FormHelperText>
            </FormControl>
        </div>
    );
}
