import './ListImage.scss';

const ListImage = (props: any) => {
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
                            {props?.listImage?.map((imgs: any, index: number) => (
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
                <div className="row">
                    <div className="col l-6 c-12">
                        <div className="image-item-thumbnail">
                            <img
                                src="https://a0.muscache.com/im/pictures/c0b5943a-9c0c-449c-ab3b-cf148b8471c3.jpg?im_w=720"
                                alt="room_hot"
                            />
                        </div>
                    </div>
                    <div className="col l-6 c-12">
                        <div className="row">
                            <div className="col l-6 c-6">
                                <div className="image-item">
                                    <img
                                        src="https://a0.muscache.com/im/pictures/c0b5943a-9c0c-449c-ab3b-cf148b8471c3.jpg?im_w=720"
                                        alt="room_hot"
                                    />
                                </div>
                            </div>
                            <div className="col l-6 c-6">
                                <div className="image-item">
                                    <img
                                        src="https://a0.muscache.com/im/pictures/c0b5943a-9c0c-449c-ab3b-cf148b8471c3.jpg?im_w=720"
                                        alt="room_hot"
                                    />
                                </div>
                            </div>
                            <div className="col l-6 c-6">
                                <div className="image-item">
                                    <img
                                        src="https://a0.muscache.com/im/pictures/c0b5943a-9c0c-449c-ab3b-cf148b8471c3.jpg?im_w=720"
                                        alt="room_hot"
                                    />
                                </div>
                            </div>
                            <div className="col l-6 c-6">
                                <div className="image-item">
                                    <img
                                        src="https://a0.muscache.com/im/pictures/c0b5943a-9c0c-449c-ab3b-cf148b8471c3.jpg?im_w=720"
                                        alt="room_hot"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ListImage;
