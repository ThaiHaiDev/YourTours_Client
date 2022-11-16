// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

import './FilterBar.scss';
import DialogFilter from '../DialogFilter/DialogFilter';

const FilterBar = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 10,
        slidesToScroll: 10,
        initialSlide: 0,
    };
    return (
        <div className="filter-bar">
            <Slider {...settings}>
                <div>
                    <div className="slider__item-filter active">
                        <div className="icon-filter">
                            <img src="https://img.icons8.com/ios-filled/25/null/new.png" alt="icon-filter" />
                        </div>
                        <div className="title-filter">
                            <p>Mới nhất</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slider__item-filter">
                        <div className="icon-filter">
                            <img src="https://img.icons8.com/ios/25/null/sunbathe.png" alt="icon-filter" />
                        </div>
                        <div className="title-filter">
                            <p>View biển</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slider__item-filter">
                        <div className="icon-filter">
                            <img src="https://img.icons8.com/ios-filled/25/null/new.png" alt="icon-filter" />
                        </div>
                        <div className="title-filter">
                            <p>Mới nhất</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slider__item-filter">
                        <div className="icon-filter">
                            <img src="https://img.icons8.com/ios/25/null/sunbathe.png" alt="icon-filter" />
                        </div>
                        <div className="title-filter">
                            <p>View biển</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slider__item-filter">
                        <div className="icon-filter">
                            <img src="https://img.icons8.com/ios-filled/25/null/new.png" alt="icon-filter" />
                        </div>
                        <div className="title-filter">
                            <p>Mới nhất</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slider__item-filter">
                        <div className="icon-filter">
                            <img src="https://img.icons8.com/ios/25/null/sunbathe.png" alt="icon-filter" />
                        </div>
                        <div className="title-filter">
                            <p>View biển</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slider__item-filter">
                        <div className="icon-filter">
                            <img src="https://img.icons8.com/ios-filled/25/null/new.png" alt="icon-filter" />
                        </div>
                        <div className="title-filter">
                            <p>Mới nhất</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slider__item-filter">
                        <div className="icon-filter">
                            <img src="https://img.icons8.com/ios/25/null/sunbathe.png" alt="icon-filter" />
                        </div>
                        <div className="title-filter">
                            <p>View biển</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slider__item-filter">
                        <div className="icon-filter">
                            <img src="https://img.icons8.com/ios-filled/25/null/new.png" alt="icon-filter" />
                        </div>
                        <div className="title-filter">
                            <p>Mới nhất</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slider__item-filter">
                        <div className="icon-filter">
                            <img src="https://img.icons8.com/ios/25/null/sunbathe.png" alt="icon-filter" />
                        </div>
                        <div className="title-filter">
                            <p>View biển</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slider__item-filter">
                        <div className="icon-filter">
                            <img src="https://img.icons8.com/ios-filled/25/null/new.png" alt="icon-filter" />
                        </div>
                        <div className="title-filter">
                            <p>Mới nhất</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slider__item-filter">
                        <div className="icon-filter">
                            <img src="https://img.icons8.com/ios/25/null/sunbathe.png" alt="icon-filter" />
                        </div>
                        <div className="title-filter">
                            <p>View biển</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slider__item-filter">
                        <div className="icon-filter">
                            <img src="https://img.icons8.com/ios-filled/25/null/new.png" alt="icon-filter" />
                        </div>
                        <div className="title-filter">
                            <p>Mới nhất</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="slider__item-filter">
                        <div className="icon-filter">
                            <img src="https://img.icons8.com/ios/25/null/sunbathe.png" alt="icon-filter" />
                        </div>
                        <div className="title-filter">
                            <p>View biển</p>
                        </div>
                    </div>
                </div>
            </Slider>
            <DialogFilter />
        </div>
    );
};

export default FilterBar;
