import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import './RangePriceFilter.scss';

interface RangePriceFilterData {
    handleChangePriceRange: (value: number[]) => void;
}

export default function RangePriceFilter(props: RangePriceFilterData) {
    const [value, setValue] = React.useState<number[]>([1, 5000000]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
        if (props?.handleChangePriceRange) {
            props.handleChangePriceRange(newValue as number[]);
        }
    };

    return (
        <Box sx={{ width: '100%', paddingRight: '30px', paddingLeft: '30px' }}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                max={10000000}
            />
            <div className='show-rang__price'>
                <p style={{marginRight: '10px'}}>Giá tối thiểu</p>
                <input
                    type="number"
                    className="input-pricerange"
                    value={value[0]}
                    onChange={(event) => setValue([parseInt(event.target.value), value[1]])}
                />
                <input
                    type="number"
                    className="input-pricerange"
                    value={value[1]}
                    onChange={(event) => setValue([value[0], parseInt(event.target.value)])}
                />
                <p>Giá tối đa</p>
            </div>
        </Box>
    );
}
