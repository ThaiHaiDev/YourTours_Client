import './ListImage.scss';

const ListImage = (props: any) => {
    return (
        <div className="list-image">
            <div className="row">
                <div className="col l-6 c-12">
                    <div className="image-item">
                        <img
                            src={`${props?.thumbnail}`}
                            alt="room_hot"
                        />
                    </div>
                </div>
                <div className="col l-6 c-12">
                    <div className="row">
                        {props?.listImage?.map((imgs:any, index:number) => (
                            <div className="col l-6 c-6" key={index}>
                                <div className="image-item">
                                    <img
                                        src={`${props?.listImage && props?.listImage[index]?.path}`}
                                        alt="room_hot"
                                    />
                                </div>
                            </div>
                        ))}
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListImage;
