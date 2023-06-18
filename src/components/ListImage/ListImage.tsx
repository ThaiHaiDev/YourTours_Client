import './ListImage.scss';

const ListImage = (props: any) => {
    const cutDataImage = props?.listImage?.slice(0, 4);
    return (
        <div className="list-image">
            {props.listImage ? (
                <div className="row">
                    <div className="col l-6 c-12">
                        <div className="image-item-thumbnail">
                            <img src={`${props?.thumbnail}`} alt="room_hot" />
                        </div>
                    </div>
                    <div className="col l-6 c-12">
                        <div className="row">
                            {cutDataImage?.map((imgs: any, index: number) => (
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
            ) : (
                <></>
            )}
        </div>
    );
};

export default ListImage;
