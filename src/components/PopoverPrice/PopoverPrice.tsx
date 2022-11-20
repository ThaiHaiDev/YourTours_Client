import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import formatPrice from '../../utils/formatPrice';

export default function PopoverPrice(props: any) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className="popover-price">
            <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                Chi tiết
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            >
                <h2 style={{ width: '300px', textAlign: 'center' }}>Chi tiết giá cơ sở</h2>
                {props?.detailPrice.map((detail: any, index: number) => (
                    <div
                        className="item-price-detail"
                        style={{ display: 'flex', justifyContent: 'space-between', padding: '0 18px' }}
                        key={index}
                    >
                        <p style={{ fontSize: '14px', margin: 0, marginBottom: '10px' }}>{detail?.day}</p>
                        <p style={{ fontSize: '14px', margin: 0, marginBottom: '10px' }}>{formatPrice(detail?.cost)}</p>
                    </div>
                ))}
            </Popover>
        </div>
    );
}
