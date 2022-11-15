import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectedIdRoom(props:any) {
    const [idRoom, setIdRoom] = React.useState(props.idFirst ? props?.idFirst : '');
    
    React.useEffect(() => {
        if (props.handleChangeIdRoom) {
            props.handleChangeIdRoom(idRoom)
        }
    })

    const handleChange = (event: SelectChangeEvent) => {
        setIdRoom(event.target.value);
    };

    return (
        <div style={{marginLeft: '20px', width: '500px'}}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '400px' }}>
                <InputLabel id="demo-simple-select-standard-label">Room</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={idRoom}
                    onChange={handleChange}
                    label="Room"
                >
                    {props.dataListhome?.map((room:any) => (
                        <MenuItem value={room.id} key={room.id}>{room.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
