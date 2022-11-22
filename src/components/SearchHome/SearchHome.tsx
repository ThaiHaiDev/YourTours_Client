import React, { useState, useRef, useEffect } from 'react';
import './SearchHome.scss';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

function SearchHome({ placeholder, data } : any) {
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
        <div className="search-home">
            <div className="searchInputs-home">
                <div className="searchIcon">
                    <SearchIcon />
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
                                <div className='image-item-search'>
                                    <img src='https://a0.muscache.com/im/pictures/miso/Hosting-29172819/original/8dae018e-ee08-4956-ab90-4a451e96e424.jpeg?im_w=720' alt='' />
                                </div>
                                <p>{value.title} </p>
                                <p className='price-item-search'>Từ 450.000 đ</p>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default SearchHome;
