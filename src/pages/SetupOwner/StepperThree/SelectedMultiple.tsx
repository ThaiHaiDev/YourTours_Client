import React, { useState } from 'react';
import Select from 'react-select';

const options = [
    { value: 'Thắng', label: 'Thắng' },
    { value: 'Ơi', label: 'Ơi' },
    { value: 'Là', label: 'Là' },
    { value: 'Thắng', label: 'Thắng' },
    { value: 'Hải', label: 'Hải' },
    { value: 'Làm', label: 'Làm' },
    { value: 'Đây', label: 'Đây' },
    { value: 'Nè', label: 'Nè' },
    { value: 'Hi', label: 'Hi' },
];

const customStyles = {
    menuList: (provided:any, state:any) => ({
        ...provided,
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap'
    }),

    menuPortal: (provided:any, state:any) => ({
        ...provided,
        width: 40,
        
    }),

    option: (provided:any, state:any) => ({
        ...provided,
        width: '33.33333333%',
        borderBottom: '1px dotted pink',
        color: state.selectProps.menuColor,
        padding: 40,
        fontSize: '20px',
        textAlign: 'center',
        menuList: (provided:any, state:any) => ({
            ...provided,
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap'
        }),
    }),
};

export default function SelectedMultiple() {
    const [selectedOption, setSelectedOption] = useState<any>(null);

    return (
        <div className="App">
            <Select defaultValue={selectedOption} onChange={setSelectedOption} options={options} isMulti={true} styles={customStyles} />
        </div>
    );
}
