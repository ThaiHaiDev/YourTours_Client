import { t } from 'i18next';
import './Convenient.scss';

const Convenient = (props: any) => {
    const cutDataLeft = props?.listConvenient?.slice(0, 4);
    const cutDataRight = props?.listConvenient?.slice(4, 8);

    return (
        <div className="convenient-room">
            <h1>{t('contentMain.convenient')}</h1>
            <div className="row">
                <div className="col l-6">
                    {cutDataLeft?.map((convi: any, index: number) => (
                        <div className="convenient-item" key={index}>
                            <img src={convi?.icon} alt="icon-convenient" className="icon-convenient" />
                            <p style={{ textDecorationLine: `${!convi.isConfig ? 'line-through' : 'none'}` }}>
                                {convi?.name}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="col l-6">
                    {cutDataRight?.map((convi: any, index: number) => (
                        <div className="convenient-item" key={index}>
                            <img src={convi?.icon} alt="icon-convenient" className="icon-convenient" />
                            <p style={{ textDecorationLine: `${!convi.isConfig ? 'line-through' : 'none'}` }}>
                                {convi?.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Convenient;
