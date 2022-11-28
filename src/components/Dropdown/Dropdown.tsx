import './Dropdown.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useRef, useEffect, ChangeEvent } from 'react';

const Dropdown = (props: any) => {
    const [isActive, setIsActive] = useState(false);
    const refOne = useRef<HTMLInputElement | null>(null);

    const [adults, setAdults] = useState<string>('1');
    const [children, setChildren] = useState<string>('0');
    const [baby, setBaby] = useState<string>('0');

    useEffect(() => {
        document.addEventListener('click', hideOnClickOutside, true);
    }, []);

    const hideOnClickOutside = (e: any) => {
        if (refOne.current && !refOne.current.contains(e.target)) {
            setIsActive(false);
        }
    };

    const handleChangeADULTS = (event: ChangeEvent<HTMLInputElement>) => {
        if (props.handleChangeGuests) {
            props.handleChangeGuests([
                {
                    guestCategory: 'ADULTS',
                    number: event.currentTarget?.value,
                },
                {
                    guestCategory: 'CHILDREN',
                    number: children,
                },
                {
                    guestCategory: 'BABY',
                    number: baby,
                },
            ]);
        }
        if (props.setTitleGuests) {
            props.setTitleGuests(`${event.currentTarget?.value} Người lớn, ${children} Trẻ em, ${baby} Trẻ sơ sinh`)
        }
        setAdults(event.currentTarget?.value);
    };

    const handleChangeCHILDREN = (event: ChangeEvent<HTMLInputElement>) => {
        if (props.handleChangeGuests) {
            props.handleChangeGuests([
                {
                    guestCategory: 'ADULTS',
                    number: adults,
                },
                {
                    guestCategory: 'CHILDREN',
                    number: event.currentTarget?.value,
                },
                {
                    guestCategory: 'BABY',
                    number: baby,
                },
            ]);
        }
        if (props.setTitleGuests) {
            props.setTitleGuests(`${adults} Người lớn, ${event.currentTarget?.value} Trẻ em, ${baby} Trẻ sơ sinh`)
        }
        setChildren(event.currentTarget?.value);
    };

    const handleChangeBABY = (event: ChangeEvent<HTMLInputElement>) => {
        if (props.handleChangeGuests) {
            props.handleChangeGuests([
                {
                    guestCategory: 'ADULTS',
                    number: adults,
                },
                {
                    guestCategory: 'CHILDREN',
                    number: children,
                },
                {
                    guestCategory: 'BABY',
                    number: event.currentTarget?.value,
                },
            ]);
        }
        if (props.setTitleGuests) {
            props.setTitleGuests(`${adults} Người lớn, ${children} Trẻ em, ${event.currentTarget?.value} Trẻ sơ sinh`)
        }
        setBaby(event.currentTarget?.value);
    };

    return (
        <div className="dropdown" ref={refOne}>
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                {`${adults} Người lớn, ${children} Trẻ em, ${baby} Trẻ sơ sinh`}
                <ExpandMoreIcon />
            </div>
            {isActive && (
                <div className="dropdown-content">
                    <div className="dropdown-item">
                        Người lớn
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            min="1"
                            max="5"
                            defaultValue={1}
                            onChange={handleChangeADULTS}
                        ></input>
                    </div>
                    <div className="dropdown-item">
                        Trẻ em
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            min="1"
                            max="5"
                            defaultValue={0}
                            onChange={handleChangeCHILDREN}
                        ></input>
                    </div>
                    <div className="dropdown-item">
                        Phòng
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            min="1"
                            max="5"
                            defaultValue={0}
                            onChange={handleChangeBABY}
                        ></input>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
