import React, { useState, useRef, useEffect } from 'react';
import './SearchBar.scss';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Link } from 'react-router-dom';

function SearchBar({ placeholder, data } : any) {
    const [filteredData, setFilteredData] = useState<any>([]);
    const [wordEntered, setWordEntered] = useState('');
    const refOne = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        document.addEventListener('click', hideOnClickOutside, true);
    }, []);

    const hideOnClickOutside = (e : any) => {
        if (refOne.current && !refOne.current.contains(e.target)) {
            setFilteredData([])
        }
        setWordEntered('')
    };

    const handleFilter = (event : any) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value : any) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === '') {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered('');
    };

    return (
        <div className="search">
            <div className="searchInputs">
                <div className="searchIcon">
                    <LocationOnOutlinedIcon />
                </div>

                <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>

                <div className="searchIcon">
                    {filteredData.length === 0 ? '' : <CloseIcon id="clearBtn" onClick={clearInput} />}
                </div>
            </div>
            {filteredData.length !== 0 && (
                <div className="dataResult" ref={refOne}>
                    {filteredData.slice(0, 15)?.map((value:any, key:any) => {
                        return (
                            <Link className="dataItem" to={value.link} target="_blank">
                                <p>{value.title} </p>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default SearchBar;
