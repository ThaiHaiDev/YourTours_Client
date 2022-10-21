import DateGo from '../DateGo/DateGo';
import Dropdown from '../Dropdown/Dropdown';
import './Book.scss';

import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import SearchData from '../../mockdata/SearchData.json';

interface BookData {
    refOne: React.RefObject<HTMLInputElement>;
}

const Book = (props: BookData) => {
    return (
        <div className="book__tour">
            <div className="card" ref={props.refOne}>
                <div className="info__book">
                    <Link className="link__book" to="/morebook">
                        Tìm ưu đãi khách sạn, chỗ nghỉ dạng nhà và nhiều hơn nữa...
                    </Link>
                    <div className="line">
                        <hr />
                    </div>
                    <div className='content-book'>
                        <p>Thành phố, địa điểm hoặc tên khách sạn:</p>
                        <SearchBar placeholder="Thành phố, khách sạn, điểm đến" data={SearchData} />
                        <div className="date__book">
                            <div className="day start">
                                <p>Nhận phòng:</p>
                            </div>
                            <div className="day end">
                                <p>Trả phòng:</p>
                            </div>
                            <div className="day count">
                                <p>Số đêm:</p>
                            </div>
                            <DateGo size="horizontal" />
                        </div>
                        <div className="count-book">
                            <p>Số khách:</p>
                            <Dropdown />
                        </div>
                    </div>
                </div>
                <button className="btn-search__book">Search</button>
            </div>
        </div>
    );
};

export default Book;
