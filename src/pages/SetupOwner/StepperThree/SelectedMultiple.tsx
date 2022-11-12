import React, { useEffect, useMemo, useState } from 'react';
import Select from 'react-select';
import amenityCategoryApi from '../../../services/amenityCategoryApi';

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

export default function SelectedMultiple(props : any) {
    const [selectedOption, setSelectedOption] = useState<any | []>();
    console.log(selectedOption)

    const A1:any = useMemo(() => [], []);
    const A2:any = useMemo(() => [], []);
    const A3:any = useMemo(() => [], []);

    useEffect(() => {
        props?.setDataStep3(selectedOption)
    }, [selectedOption, props])

    return (
        <div className="App">
            {props.dataList?.map((listCate:any, index: number) => {
                amenityCategoryApi.getAmenityInCategories(listCate.id).then(data => {
                   if (index === 0) {
                        data?.data.content?.map((convi:any) => {
                            return A1.push({value: convi.id, label: convi.name})
                        })
                   } else if (index === 1) {
                    data?.data.content?.map((convi:any) => {
                        return A2.push({value: convi.id, label: convi.name})
                    })
                    } else if (index === 2) {
                        data?.data.content?.map((convi:any) => {
                            return A3.push({value: convi.id, label: convi.name})
                    }) 
               }
                })
                return (
                    <div key={listCate.id}>
                        <p>{listCate.name}</p>
                        {index === 0 && <Select defaultValue={selectedOption} onChange={setSelectedOption} options={A1} isMulti={true} styles={customStyles} />}
                        {index === 1 && <Select defaultValue={selectedOption} onChange={setSelectedOption} options={A2} isMulti={true} styles={customStyles} />}
                        {index === 2 && <Select defaultValue={selectedOption} onChange={setSelectedOption} options={A3} isMulti={true} styles={customStyles} />}
                    </div>
                )
            })}
            
        </div>
    );
}
