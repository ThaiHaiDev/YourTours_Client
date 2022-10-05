import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div class="footer__contact grid wide">
                <div class="footer__contact-name">
                    <span class="footer__contact-text">KEEP IN TOUCH</span>
                    <h4 class="footer__contact-heading">Travel with Us</h4>
                </div>
                <form action="" class="footer__contact-form">
                    <input type="text" name="" id="" class="footer__contact__input" />
                    <label for="footer__contact-submit" class="footer__contact-submit-btn">
                        SEND
                    </label>
                    <input type="submit" value="" hidden id="footer__contact-submit" />
                </form>
            </div>
            <div className="footer__inner">
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-6 m-12 c-12">
                            <img src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg" alt="" className="footer__logo" />
                            <p className="footer__desc">
                                Mọi nội dung tại đây © 2005 – 2022 Công ty TNHH Tư nhân Yourtours. Bảo Lưu Mọi Quyền.
                                Yourtours.com là thành viên của Tập đoàn Min Close, nhà cung cấp dịch vụ du lịch trực
                                tuyến & các dịch vụ có liên quan hàng đầu thế giới.
                            </p>
                            <div className="footer__inner-contact">
                                <Link to="#" className="footer__contact-logo fab fa-twitter">
                                    T
                                </Link>
                                <Link to="#" className="footer__contact-logo fab fa-youtube">
                                    Y
                                </Link>
                                <Link to="#" className="footer__contact-logo fab fa-facebook-square">
                                    F
                                </Link>
                                <Link to="#" className="footer__contact-logo fab fa-instagram-square">
                                    Y
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
