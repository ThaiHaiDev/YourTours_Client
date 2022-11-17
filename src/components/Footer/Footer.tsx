import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__contact grid wide">
                <div className="footer__contact-name">
                    <h3 className="footer__contact-heading">Tiết kiệm thời gian và tiền bạc!</h3>
                    <span className="footer__contact-text">Hãy đăng ký và chúng tôi sẽ gửi những ưu đãi tốt nhất cho bạn</span>
                </div>
                <form action="" className="footer__contact-form">
                    <input type="text" name="" id="" className="footer__contact__input" />
                    <label htmlFor="footer__contact-submit" className="footer__contact-submit-btn">
                        Đăng ký
                    </label>
                    <input type="submit" value="" hidden className="footer-input" />
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
                            <p className="footer__desc">
                                Mọi nội dung tại đây © 2005 – 2022 Công ty TNHH Tư nhân Yourtours. Bảo Lưu Mọi Quyền.
                                Yourtours.com là thành viên của Tập đoàn Min Close, nhà cung cấp dịch vụ du lịch trực
                                tuyến & các dịch vụ có liên quan hàng đầu thế giới.
                            </p>
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
                                <h3 className="footer__list-heading">Về Yourtours</h3>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="/" className="footer__item-link">
                                        Cách đặt chỗ
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="#" className="footer__item-link">
                                        Liên hệ chúng tôi
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="#" className="footer__item-link">
                                        Trợ giúp
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="#" className="footer__item-link">
                                        Tuyển dụng
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="#" className="footer__item-link">
                                        Về chúng tôi
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col l-2 m-4 c-12">
                            <ul className="footer__list">
                                <h3 className="footer__list-heading">Đối tác</h3>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="#" className="footer__item-link">
                                        Booking
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="#" className="footer__item-link">
                                        RentalCar
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="#" className="footer__item-link">
                                        HostelWorld
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="#" className="footer__item-link">
                                        Trivago
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="#" className="footer__item-link">
                                        TripAdvisor
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col l-2 m-4 c-12">
                            <ul className="footer__list">
                                <h3 className="footer__list-heading">Khác</h3>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="#" className="footer__item-link">
                                        London
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="#" className="footer__item-link">
                                        California
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="#" className="footer__item-link">
                                        Indonesia
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="#" className="footer__item-link">
                                        Europe
                                    </Link>
                                </li>
                                <li className="footer__item">
                                    <i className="footer__item-icon fas fa-chevron-right"></i>
                                    <Link to="#" className="footer__item-link">
                                        Oceania
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
