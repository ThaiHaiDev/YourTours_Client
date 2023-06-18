// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

import './FilterBar.scss';
import DialogFilter from '../DialogFilter/DialogFilter';
import { useEffect, useState } from 'react';
import filterApi from '../../services/filterApi';
import { useNavigate } from 'react-router-dom';

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
    const [indexActive, setIndexActive] = useState<number>(0);

    useEffect(() => {
        filterApi.getAllFilterNavbar().then((dataResponse: any) => {
            setListDataFilterNavbar(dataResponse.data.content);
            const index = dataResponse.data.content.find((fi: any) => {
                return fi.id === props.queryParams.slice(10, props.queryParams.length - 1);
            });
            if (dataResponse.data.content.indexOf(index) < 0) {
                setIndexActive(0);
            } else {
                setIndexActive(dataResponse.data.content.indexOf(index));
            }
        });
    }, [props.queryParams]);

    const navigate = useNavigate();

    const handleFilter = (idActive: number, idFilter: string) => {
        setIndexActive(idActive);
        if (idFilter === null) {
            filterApi.getAllRoomsWithFilter({ queryParams: ``, pagi: props?.pagi }).then((dataResponse) => {
                props.filterData(dataResponse.data.content);
            });
            navigate({
                search: ``,
            });
        } else {
            filterApi
                .getAllRoomsWithFilter({ queryParams: `amenityId=${idFilter}&`, pagi: props?.pagi })
                .then((dataResponse) => {
                    props.filterData(dataResponse.data.content);
                });
            navigate({
                search: `amenityId=${idFilter}&`,
            });
        }
    };

    return (
        <div className="filter-bar">
            <Slider {...settings}>
                {listDataFilterNavbar?.map((filter: any, index: number) => (
                    <div key={index}>
                        <div
                            className={`slider__item-filter ${index === indexActive && 'active'}`}
                            onClick={() => handleFilter(index, filter?.id)}
                        >
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
            <DialogFilter filterData={props.filterData} pagi={props?.pagi} />
        </div>
    );
};

export default FilterBar;
