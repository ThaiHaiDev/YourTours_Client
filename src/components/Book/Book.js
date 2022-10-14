import './Book.scss';

const Book = () => {
    return (
        <div className="book__tour">
            <div className="card">
                <div className="info__book">
                    <p>Thành phố, địa điểm hoặc tên khách sạn:</p>
                    <div className="date__book">
                        <p>Nhận phòng:</p>
                        <p>Trả phòng:</p>
                        <p>Số đêm:</p>
                    </div>
                    <p>Số khách:</p>
                </div>
                <button className='btn-search__book'>Search</button>
            </div>
        </div>
    );
};

export default Book;
