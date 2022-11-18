// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

import './FilterBar.scss';
import DialogFilter from '../DialogFilter/DialogFilter';
import { useEffect, useState } from 'react';
import filterApi from '../../services/filterApi';

const FilterBar = (props: any) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 10,
        slidesToScroll: 10,
        initialSlide: 0,
    };

    const [listDataFilterNavbar, setListDataFilterNavbar] = useState<any>([]);

    useEffect(() => {
        filterApi.getAllFilterNavbar().then((dataResponse: any) => {
            setListDataFilterNavbar(dataResponse.data.content);
        });
    }, []);

    return (
        <div className="filter-bar">
            <Slider {...settings}>
                {listDataFilterNavbar?.map((filter: any, index: number) => (
                    <div key={index}>
                        <div className={`slider__item-filter ${index === 0 && 'active'}`}>
                            <div className="icon-filter">
                                <img src={filter?.icon} alt="icon-filter" />
                            </div>
                            <div className="title-filter">
                                <p>{filter?.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <DialogFilter filterData={props.filterData}/>
        </div>
    );
};

export default FilterBar;
