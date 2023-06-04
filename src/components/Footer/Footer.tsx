import { t } from 'i18next';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__contact grid wide">
                <div className="footer__contact-name">
                    <h3 className="footer__contact-heading">{t('footer.titleFooter')}</h3>
                    <span className="footer__contact-text">{t('footer.contentFooter')}</span>
                </div>
                <form action="" className="footer__contact-form">
                    <input type="text" name="" id="" className="footer__contact__input" />
                    <label htmlFor="footer__contact-submit" className="footer__contact-submit-btn">
                        {t('common.signup')}
                    </label>
                </form>
            </div>
            <div className="footer__inner">
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-6 m-12 c-12">
                            <img
                                src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg"
                                alt=""
                                className="footer__logo"
                            />
                            <p className="footer__desc">{t('footer.intro')}</p>
                            <div className="footer__inner-contact">
                                <Link to="#" className="footer__contact-logo fab fa-twitter">
                                    <img src="https://img.icons8.com/fluency/40/null/twitter.png" alt="alt-t" />
                                </Link>
                                <Link to="#" className="footer__contact-logo fab fa-youtube">
                                    <img src="https://img.icons8.com/doodle/40/null/youtube-play--v2.png" alt="alt-y" />
                                </Link>
                                <Link to="#" className="footer__contact-logo fab fa-facebook-square">
                                    <img src="https://img.icons8.com/color/40/null/facebook-new.png" alt="alt-f" />
                                </Link>
                                <Link to="#" className="footer__contact-logo fab fa-instagram-square">
                                    <img src="https://img.icons8.com/fluency/40/null/instagram-new.png" alt="alt-i" />
                                </Link>
                            </div>
                        </div>
                        <div className="col l-2 m-4 c-12">
                            <ul className="footer__list">
                                <h3 className="footer__list-heading">{t('footer.contact_1')}</h3>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="/" className="footer__item-link">
                                        {t('footer.contact_link_1')}
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="#" className="footer__item-link">
                                        {t('footer.contact_link_2')}
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="#" className="footer__item-link">
                                        {t('footer.contact_link_3')}
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="#" className="footer__item-link">
                                        {t('footer.contact_link_4')}
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="#" className="footer__item-link">
                                        {t('footer.contact_link_5')}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col l-2 m-4 c-12">
                            <ul className="footer__list">
                                <h3 className="footer__list-heading">{t('footer.contact_2')}</h3>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="#" className="footer__item-link">
                                        {t('footer.contact_link_6')}
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="#" className="footer__item-link">
                                        {t('footer.contact_link_7')}
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="#" className="footer__item-link">
                                        {t('footer.contact_link_8')}
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="#" className="footer__item-link">
                                        {t('footer.contact_link_9')}
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="#" className="footer__item-link">
                                        {t('footer.contact_link_10')}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col l-2 m-4 c-12">
                            <ul className="footer__list">
                                <h3 className="footer__list-heading">{t('footer.contact_3')}</h3>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="#" className="footer__item-link">
                                        {t('footer.contact_link_11')}
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="#" className="footer__item-link">
                                        {t('footer.contact_link_12')}
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="#" className="footer__item-link">
                                        {t('footer.contact_link_13')}
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="#" className="footer__item-link">
                                        {t('footer.contact_link_14')}
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="#" className="footer__item-link">
                                        {t('footer.contact_link_15')}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
