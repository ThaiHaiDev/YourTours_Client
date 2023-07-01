import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import { Box, Checkbox, FormControlLabel, Popover } from '@mui/material';

import { setupDataAdminFilter } from '../../helpers/setupDataFilter';
import './FilterAdmin.scss';

const FilterAdmin = () => {
    const location = useLocation();
    const [categoryFilters, setCategoryFilters] = useState<any>([]);
    const dataFilter = setupDataAdminFilter(location.pathname);

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleCategoryChange = (event: any) => {
        const { value, checked } = event.target;
        if (checked) {
            setCategoryFilters((prevFilters: any) => [...prevFilters, value]);
        } else {
            setCategoryFilters((prevFilters: any) => prevFilters.filter((filter: any) => filter !== value));
        }
    };

    console.log('filter', categoryFilters);

    return (
        <div className="filter-admin">
            <button style={{ padding: '10px 20px', display: 'flex', alignItems: 'center' }} onClick={handleClick}>
                <FilterAltIcon sx={{ marginRight: '5px' }} />
                Filter
            </button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <div
                    className="filter-header"
                    style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}
                >
                    <button>Clear</button>
                    <h2>Filter</h2>
                    <button>Done</button>
                </div>
                <hr />
                {dataFilter && dataFilter.length !== 0 ? (
                    dataFilter?.map((it: any) => (
                        <Box key={it.title}>
                            <h3>{it.title}</h3>
                            {it?.filterData?.map((item: any, index: number) => (
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={categoryFilters.includes(`${item.id}`)}
                                            onChange={handleCategoryChange}
                                            value={item.id}
                                            sx={{ transform: 'scale(1.4)', marginRight: '5px' }}
                                        />
                                    }
                                    label={item.value}
                                    key={index}
                                    sx={{ width: '100%', padding: '0px 10px' }}
                                    componentsProps={{ typography: { variant: 'h6' } }}
                                />
                            ))}
                        </Box>
                    ))
                ) : (
                    <></>
                )}
                <br />
            </Popover>
        </div>
    );
};

export default FilterAdmin;
