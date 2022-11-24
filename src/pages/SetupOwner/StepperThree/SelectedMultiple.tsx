import React, { useMemo, useState } from 'react';
import Select from 'react-select';
import amenityCategoryApi from '../../../services/amenityCategoryApi';

const customStyles = {
    menuList: (provided: any, state: any) => ({
        ...provided,
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
    }),

    menuPortal: (provided: any, state: any) => ({
        ...provided,
        width: 40,
    }),

    option: (provided: any, state: any) => ({
        ...provided,
        width: '33.33333333%',
        borderBottom: '1px dotted pink',
        color: state.selectProps.menuColor,
        padding: 40,
        fontSize: '20px',
        textAlign: 'center',
        menuList: (provided: any, state: any) => ({
            ...provided,
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
        }),
    }),
};

export default function SelectedMultiple(props: any) {
    const [selectedOption, setSelectedOption] = useState<any | []>([]);
    const [selectedOption2, setSelectedOption2] = useState<any | []>([]);
    const [selectedOption3, setSelectedOption3] = useState<any | []>([]);


    const A1: any = useMemo(() => [], []);
    const A2: any = useMemo(() => [], []);
    const A3: any = useMemo(() => [], []);

    return (
        <div className="selected-multiple-step3" style={{width: '100%', padding: '0 40px', marginTop: '-60px'}}>
            {props.dataList?.map((listCate: any, index: number) => {
                amenityCategoryApi.getAmenityInCategories(listCate.id).then((data) => {
                    if (index === 0) {
                        data?.data.content?.map((convi: any) => {
                            if (!A1.some((person: any) => person.value === convi.id)) {
                                A1.push({ value: convi.id, label: convi.name });
                            }
                            return A1;
                        });
                    } else if (index === 1) {
                        data?.data.content?.map((convi: any) => {
                            if (!A2.some((person: any) => person.value === convi.id)) {
                                A2.push({ value: convi.id, label: convi.name });
                            }
                            return A2;
                        });
                    } else if (index === 2) {
                        data?.data.content?.map((convi: any) => {
                            if (!A3.some((person: any) => person.value === convi.id)) {
                                A3.push({ value: convi.id, label: convi.name });
                            }
                            return A3;
                        });
                    }
                });
                return (
                    <div key={listCate.id}>
                        <p style={{ fontSize: '16px' }}>{listCate.name}</p>
                        {index === 0 && (
                            <Select
                                defaultValue={selectedOption}
                                onChange={(event) => {
                                    setSelectedOption(event);
                                    if (props?.setDataStep3) {
                                        props?.setDataStep3([...event, ...selectedOption2, ...selectedOption3]);
                                    }
                                }}
                                options={A1}
                                isMulti={true}
                                styles={customStyles}
                            />
                        )}
                        {index === 1 && (
                            <Select
                                defaultValue={selectedOption2}
                                onChange={(event) => {
                                    setSelectedOption2(event);
                                    if (props?.setDataStep3) {
                                        props?.setDataStep3([...event, ...selectedOption, ...selectedOption3]);
                                    }
                                }}
                                options={A2}
                                isMulti={true}
                                styles={customStyles}
                            />
                        )}
                        {index === 2 && (
                            <Select
                                defaultValue={selectedOption3}
                                onChange={(event) => {
                                    setSelectedOption3(event);
                                    if (props?.setDataStep3) {
                                        props?.setDataStep3([...event, ...selectedOption, ...selectedOption2]);
                                    }
                                }}
                                options={A3}
                                isMulti={true}
                                styles={customStyles}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
