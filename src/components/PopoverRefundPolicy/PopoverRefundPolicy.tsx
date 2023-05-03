import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';

export default function PopoverRefundPolicy(props: any) {
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
            <Button
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
                sx={{ marginRight: '15px', textTransform: 'none' }}
            >
                Chính sách trả phòng
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
                <h2 style={{ width: '300px', textAlign: 'center', paddingBottom: '6px' }}>Chính sách hủy phòng</h2>

                <div
                    className="item-price-detail"
                    style={{
                        display: 'flex',
                        margin: '0 8px',
                        justifyContent: 'space-between',
                        padding: '5px 15px',
                        alignItems: 'center',
                    }}
                >
                    <p style={{ fontSize: '14px', margin: 0 }}>
                        {props?.dataShow === 'BEFORE_ONE_DAY'
                            ? 'Chỉ được hủy phòng trước 1 ngày'
                            : 'Chỉ được hủy phòng trước 7 ngày'}
                    </p>
                </div>

                <br />
            </Popover>
        </div>
    );
}
