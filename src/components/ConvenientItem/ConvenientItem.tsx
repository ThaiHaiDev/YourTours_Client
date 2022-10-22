import './ConvenientItem.scss';

import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const ConvenientItem = () => {
    return (
        <div className="convenient-item">
            <div className="item">
                <p>Điều hòa nhiệt độ</p>
                <Switch {...label} />
            </div>
            <hr />
            <div className="item">
                <p>Điều hòa nhiệt độ</p>
                <Switch {...label} />
            </div>
            <hr />
            <div className="item">
                <p>Điều hòa nhiệt độ</p>
                <Switch {...label} />
            </div>
            <hr />
            <div className="item">
                <p>Điều hòa nhiệt độ</p>
                <Switch {...label} />
            </div>
            <hr />
            <div className="item">
                <p>Điều hòa nhiệt độ</p>
                <Switch {...label} />
            </div>
            <hr />
        </div>
    );
};

export default ConvenientItem;
