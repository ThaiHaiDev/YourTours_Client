import { t } from 'i18next';
import './Policy.scss';

const Policy = () => {
    return (
        <div className="policy-card">
            <h1>{t('title.whySelected')}</h1>
            <div className="row">
                <div className="col l-3">
                    <img
                        src="https://raw.githubusercontent.com/ThaiHaiDev/StoreImage/main/icon_policy/1.jpg"
                        alt="icon-policy"
                    />
                    <p>{t('contentMain.policy.label_1')}</p>
                    <span>{t('contentMain.policy.content_1')}</span>
                </div>
                <div className="col l-3">
                    <img
                        src="https://raw.githubusercontent.com/ThaiHaiDev/StoreImage/main/icon_policy/2.jpg"
                        alt="icon-policy"
                    />
                    <p>{t('contentMain.policy.label_2')}</p>
                    <span>{t('contentMain.policy.content_2')}</span>
                </div>
                <div className="col l-3">
                    <img
                        src="https://raw.githubusercontent.com/ThaiHaiDev/StoreImage/main/icon_policy/3.jpg"
                        alt="icon-policy"
                    />
                    <p>{t('contentMain.policy.label_3')}</p>
                    <span>{t('contentMain.policy.content_3')}</span>
                </div>
                <div className="col l-3">
                    <img
                        src="https://raw.githubusercontent.com/ThaiHaiDev/StoreImage/main/icon_policy/4.jpg"
                        alt="icon-policy"
                    />
                    <p>{t('contentMain.policy.label_4')}</p>
                    <span>{t('contentMain.policy.content_4')}</span>
                </div>
            </div>
        </div>
    );
};

export default Policy;
