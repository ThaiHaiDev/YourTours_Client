import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import homeDetailApi from '../../../services/homeDetailApi';

export default function SelectedIdRoom(props:any) {
    const [idRoom, setIdRoom] = React.useState('');

    const [dataListhome, setDataListHome] = React.useState<any>([])
    React.useEffect(() => {
        homeDetailApi.getListHomeOfHost().then((dataResponse:any) => {
            setDataListHome(dataResponse.data.content)
            setIdRoom(dataResponse.data.content[0].id)
        })
    }, [])

    const handleChange = (event: SelectChangeEvent) => {
        if (props.handleChangeIdRoom) {
            props.handleChangeIdRoom(event.target.value)
        }
        setIdRoom(event.target.value);
    };

    return (
        <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Room</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={idRoom}
                    onChange={handleChange}
                    label="Room"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {dataListhome?.map((room:any) => (
                        <MenuItem value={room.id} key={room.id}>{room.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
