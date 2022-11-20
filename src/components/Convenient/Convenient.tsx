import './Convenient.scss';

import SoupKitchenRoundedIcon from '@mui/icons-material/SoupKitchenRounded';

const Convenient = (props: any) => {
    const cutDataLeft = props?.listConvenient?.slice(0, 4);
    const cutDataRight = props?.listConvenient?.slice(4, 8);

    return (
        <div className="convenient-room">
            <h1>Nơi này có những gì cho bạn</h1>
            <div className="row">
                <div className="col l-6">
                    {cutDataLeft?.map((convi: any, index: number) => (
                        <div className="convenient-item" key={index}>
                            <SoupKitchenRoundedIcon className="icon-convenient" />
                            <p>{convi?.name}</p>
                        </div>
                    ))}
                </div>
                <div className="col l-6">
                    {cutDataRight?.map((convi: any, index: number) => (
                        <div className="convenient-item" key={index}>
                            <SoupKitchenRoundedIcon className="icon-convenient" />
                            <p>{convi?.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Convenient;
