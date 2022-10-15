import './Dropdown.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const Dropdown = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                Choose One
                <ExpandMoreIcon />
            </div>
            {isActive && (
                <div className="dropdown-content">
                    <div className="dropdown-item">
                        Người lớn
                        <input type="number" id="quantity" name="quantity" min="1" max="5" defaultValue={1}></input>
                    </div>
                    <div className="dropdown-item">
                        Trẻ em
                        <input type="number" id="quantity" name="quantity" min="1" max="5" defaultValue={0}></input>
                    </div>
                    <div className="dropdown-item">
                        Phòng
                        <input type="number" id="quantity" name="quantity" min="1" max="5" defaultValue={1}></input>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
