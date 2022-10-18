import { Link } from 'react-router-dom';
import './Popular.scss';
// import image_0 from '../../assets/img/italy.jpg';
import image_1 from '../../assets/img/europe.jpg';
import image_2 from '../../assets/img/berlin.jpg';
import image_3 from '../../assets/img/japan.jpg';
import image_4 from '../../assets/img/phuket.jpg';
import image_5 from '../../assets/img/thailand.jpg';

const Popular = () => {
    return (
        <div className="web-content">
            <div className="package-menu">
                <div className="package-menu__head">
                    <p>Khám phá Việt Nam</p>
                    <h3 className="package-menu__heading">
                        {' '}
                        <img
                            src="https://raw.githubusercontent.com/ThaiHaiDev/ThaiHaiDev/566f3f60394bbabf5b103a5694618e9424a79ea0/vietnamlg.gif"
                            alt=""
                        />{' '}
                        <span className="green-underline">Điểm đến hot nhất do Yourtours đề xuất</span>
                    </h3>
                </div>
                <div className="row">
                    <div className="col l-3 m-6 c-12">
                        <div className="package">
                            <div className="package-overlay">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/07/17/1531814622858-5300a3226e630822d61007a9aab8baef.jpeg?tr=q-75" alt="" className="package-thumbnail" />
                                <div className="package-info">
                                    <h3 className="package-heading">europe</h3>
                                    <span className="package-desc">3 packages</span>
                                </div>
                            </div>

                            <Link href="#" className="mobile-package__link"></Link>
                            <div className="package-cover hide-on-mobile-tablet">
                                <h4 className="package-cover-head">packages</h4>
                                <ul className="package-list">
                                    <li className="package-item">
                                        <Link href="#" className="package-link">
                                            berlin
                                        </Link>
                                    </li>
                                    <li className="package-item">
                                        <Link href="#" className="package-link">
                                            amsterdam
                                        </Link>
                                    </li>
                                    <li className="package-item">
                                        <Link href="#" className="package-link">
                                            tuscany
                                        </Link>
                                    </li>
                                </ul>
                                <div className="package-btn">
                                    <Link href="#" className="package-btn-link">
                                        view destination
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-3 m-6 c-12">
                        <div className="package">
                            <div className="package-overlay">
                                <img src={image_1} alt="" className="package-thumbnail" />
                                <div className="package-info">
                                    <h3 className="package-heading">thailand</h3>
                                    <span className="package-desc">1 package</span>
                                </div>
                            </div>

                            <Link href="#" className="mobile-package__link"></Link>
                            <div className="package-cover hide-on-mobile-tablet">
                                <h4 className="package-cover-head">packages</h4>
                                <ul className="package-list">
                                    <li className="package-item">
                                        <Link href="#" className="package-link">
                                            phuket
                                        </Link>
                                    </li>
                                </ul>
                                <div className="package-btn">
                                    <Link href="#" className="package-btn-link">
                                        view destination
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-3 m-6 c-12">
                        <div className="package">
                            <div className="package-overlay">
                                <img src={image_2} alt="" className="package-thumbnail" />
                                <div className="package-info">
                                    <h3 className="package-heading">asia</h3>
                                    <span className="package-desc">2 packages</span>
                                </div>
                            </div>

                            <Link href="#" className="mobile-package__link"></Link>
                            <div className="package-cover hide-on-mobile-tablet">
                                <h4 className="package-cover-head">packages</h4>
                                <ul className="package-list">
                                    <li className="package-item">
                                        <Link href="#" className="package-link">
                                            hong kong
                                        </Link>
                                    </li>
                                    <li className="package-item">
                                        <Link href="#" className="package-link">
                                            phuket
                                        </Link>
                                    </li>
                                </ul>
                                <div className="package-btn">
                                    <Link href="#" className="package-btn-link">
                                        view destination
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-3 m-6 c-12">
                        <div className="package">
                            <div className="package-overlay">
                                <img src={image_3} alt="" className="package-thumbnail" />
                                <div className="package-info">
                                    <h3 className="package-heading">italy</h3>
                                    <span className="package-desc">1 packages</span>
                                </div>
                            </div>

                            <Link href="#" className="mobile-package__link"></Link>
                            <div className="package-cover hide-on-mobile-tablet">
                                <h4 className="package-cover-head">packages</h4>
                                <ul className="package-list">
                                    <li className="package-item">
                                        <Link href="#" className="package-link">
                                            tuscany
                                        </Link>
                                    </li>
                                </ul>
                                <div className="package-btn">
                                    <Link href="#" className="package-btn-link">
                                        view destination
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-3 m-6 c-12">
                        <div className="package">
                            <div className="package-overlay">
                                <img src={image_4} alt="" className="package-thumbnail" />
                                <div className="package-info">
                                    <h3 className="package-heading">netherlands</h3>
                                    <span className="package-desc">1 package</span>
                                </div>
                            </div>

                            <Link href="#" className="mobile-package__link"></Link>
                            <div className="package-cover hide-on-mobile-tablet">
                                <h4 className="package-cover-head">packages</h4>
                                <ul className="package-list">
                                    <li className="package-item">
                                        <Link href="#" className="package-link">
                                            amsterdam
                                        </Link>
                                    </li>
                                </ul>
                                <div className="package-btn">
                                    <Link href="#" className="package-btn-link">
                                        view destination
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-3 m-6 c-12">
                        <div className="package">
                            <div className="package-overlay">
                                <img src={image_5} alt="" className="package-thumbnail" />
                                <div className="package-info">
                                    <h3 className="package-heading">United states</h3>
                                    <span className="package-desc">1 package</span>
                                </div>
                            </div>

                            <Link href="#" className="mobile-package__link"></Link>
                            <div className="package-cover hide-on-mobile-tablet">
                                <h4 className="package-cover-head">packages</h4>
                                <ul className="package-list">
                                    <li className="package-item">
                                        <Link href="#" className="package-link">
                                            san francisco
                                        </Link>
                                    </li>
                                </ul>
                                <div className="package-btn">
                                    <Link href="#" className="package-btn-link">
                                        view destination
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-3 m-6 c-12">
                        <div className="package">
                            <div className="package-overlay">
                                <img src={image_5} alt="" className="package-thumbnail" />
                                <div className="package-info">
                                    <h3 className="package-heading">United states</h3>
                                    <span className="package-desc">1 package</span>
                                </div>
                            </div>

                            <Link href="#" className="mobile-package__link"></Link>
                            <div className="package-cover hide-on-mobile-tablet">
                                <h4 className="package-cover-head">packages</h4>
                                <ul className="package-list">
                                    <li className="package-item">
                                        <Link href="#" className="package-link">
                                            san francisco
                                        </Link>
                                    </li>
                                </ul>
                                <div className="package-btn">
                                    <Link href="#" className="package-btn-link">
                                        view destination
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-3 m-6 c-12">
                        <div className="package">
                            <div className="package-overlay">
                                <img src={image_5} alt="" className="package-thumbnail" />
                                <div className="package-info">
                                    <h3 className="package-heading">United states</h3>
                                    <span className="package-desc">1 package</span>
                                </div>
                            </div>

                            <Link href="#" className="mobile-package__link"></Link>
                            <div className="package-cover hide-on-mobile-tablet">
                                <h4 className="package-cover-head">packages</h4>
                                <ul className="package-list">
                                    <li className="package-item">
                                        <Link href="#" className="package-link">
                                            san francisco
                                        </Link>
                                    </li>
                                </ul>
                                <div className="package-btn">
                                    <Link href="#" className="package-btn-link">
                                        view destination
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;
