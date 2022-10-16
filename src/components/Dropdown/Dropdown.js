import './Dropdown.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useRef, useEffect } from 'react';

const Dropdown = () => {
    const [isActive, setIsActive] = useState(false);
    const refOne = useRef(null);

    useEffect(() => {
        document.addEventListener('click', hideOnClickOutside, true);
    }, []);

    const hideOnClickOutside = (e) => {
        if (refOne.current && !refOne.current.contains(e.target)) {
            setIsActive(false);
        }
    };

    return (
        <div className="dropdown" ref={refOne}>
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
