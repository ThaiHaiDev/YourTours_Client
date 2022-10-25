import { Link } from 'react-router-dom';
import './Popular.scss';

import Provice from '../../mockdata/ProvinceVN.json'

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
                                <img src={Provice[0].thumbnail} alt="" className="package-thumbnail" />
                                <div className="package-info">
                                    <h3 className="package-heading">{Provice[0].name}</h3>
                                    <span className="package-desc">3 packages</span>
                                </div>
                            </div>

                            <Link to="#" className="mobile-package__link"></Link>
                            <div className="package-cover hide-on-mobile-tablet">
                                <h4 className="package-cover-head">packages</h4>
                                <ul className="package-list">
                                    <li className="package-item">
                                        <Link to="#" className="package-link">
                                            berlin
                                        </Link>
                                    </li>
                                    <li className="package-item">
                                        <Link to="#" className="package-link">
                                            amsterdam
                                        </Link>
                                    </li>
                                    <li className="package-item">
                                        <Link to="#" className="package-link">
                                            tuscany
                                        </Link>
                                    </li>
                                </ul>
                                <div className="package-btn">
                                    <Link to="#" className="package-btn-link">
                                        view destination
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-3 m-6 c-12">
                        <div className="package">
                            <div className="package-overlay">
                                <img src={Provice[1].thumbnail} alt="" className="package-thumbnail" />
                                <div className="package-info">
                                    <h3 className="package-heading">{Provice[1].name}</h3>
                                    <span className="package-desc">1 package</span>
                                </div>
                            </div>

                            <Link to="#" className="mobile-package__link"></Link>
                            <div className="package-cover hide-on-mobile-tablet">
                                <h4 className="package-cover-head">packages</h4>
                                <ul className="package-list">
                                    <li className="package-item">
                                        <Link to="#" className="package-link">
                                            phuket
                                        </Link>
                                    </li>
                                </ul>
                                <div className="package-btn">
                                    <Link to="#" className="package-btn-link">
                                        view destination
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-3 m-6 c-12">
                        <div className="package">
                            <div className="package-overlay">
                                <img src={Provice[2].thumbnail} alt="" className="package-thumbnail" />
                                <div className="package-info">
                                    <h3 className="package-heading">{Provice[2].name}</h3>
                                    <span className="package-desc">2 packages</span>
                                </div>
                            </div>

                            <Link to="#" className="mobile-package__link"></Link>
                            <div className="package-cover hide-on-mobile-tablet">
                                <h4 className="package-cover-head">packages</h4>
                                <ul className="package-list">
                                    <li className="package-item">
                                        <Link to="#" className="package-link">
                                            hong kong
                                        </Link>
                                    </li>
                                    <li className="package-item">
                                        <Link to="#" className="package-link">
                                            phuket
                                        </Link>
                                    </li>
                                </ul>
                                <div className="package-btn">
                                    <Link to="#" className="package-btn-link">
                                        view destination
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-3 m-6 c-12">
                        <div className="package">
                            <div className="package-overlay">
                                <img src={Provice[3].thumbnail} alt="" className="package-thumbnail" />
                                <div className="package-info">
                                    <h3 className="package-heading">{Provice[3].name}</h3>
                                    <span className="package-desc">1 packages</span>
                                </div>
                            </div>

                            <Link to="#" className="mobile-package__link"></Link>
                            <div className="package-cover hide-on-mobile-tablet">
                                <h4 className="package-cover-head">packages</h4>
                                <ul className="package-list">
                                    <li className="package-item">
                                        <Link to="#" className="package-link">
                                            tuscany
                                        </Link>
                                    </li>
                                </ul>
                                <div className="package-btn">
                                    <Link to="#" className="package-btn-link">
                                        view destination
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-3 m-6 c-12">
                        <div className="package">
                            <div className="package-overlay">
                                <img src={Provice[4].thumbnail} alt="" className="package-thumbnail" />
                                <div className="package-info">
                                    <h3 className="package-heading">{Provice[4].name}</h3>
                                    <span className="package-desc">1 package</span>
                                </div>
                            </div>

                            <Link to="#" className="mobile-package__link"></Link>
                            <div className="package-cover hide-on-mobile-tablet">
                                <h4 className="package-cover-head">packages</h4>
                                <ul className="package-list">
                                    <li className="package-item">
                                        <Link to="#" className="package-link">
                                            amsterdam
                                        </Link>
                                    </li>
                                </ul>
                                <div className="package-btn">
                                    <Link to="#" className="package-btn-link">
                                        view destination
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-3 m-6 c-12">
                        <div className="package">
                            <div className="package-overlay">
                                <img src={Provice[5].thumbnail} alt="" className="package-thumbnail" />
                                <div className="package-info">
                                    <h3 className="package-heading">{Provice[5].name}</h3>
                                    <span className="package-desc">1 package</span>
                                </div>
                            </div>

                            <Link to="#" className="mobile-package__link"></Link>
                            <div className="package-cover hide-on-mobile-tablet">
                                <h4 className="package-cover-head">packages</h4>
                                <ul className="package-list">
                                    <li className="package-item">
                                        <Link to="#" className="package-link">
                                            san francisco
                                        </Link>
                                    </li>
                                </ul>
                                <div className="package-btn">
                                    <Link to="#" className="package-btn-link">
                                        view destination
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-3 m-6 c-12">
                        <div className="package">
                            <div className="package-overlay">
                                <img src={Provice[6].thumbnail} alt="" className="package-thumbnail" />
                                <div className="package-info">
                                    <h3 className="package-heading">{Provice[6].name}</h3>
                                    <span className="package-desc">1 package</span>
                                </div>
                            </div>

                            <Link to="#" className="mobile-package__link"></Link>
                            <div className="package-cover hide-on-mobile-tablet">
                                <h4 className="package-cover-head">packages</h4>
                                <ul className="package-list">
                                    <li className="package-item">
                                        <Link to="#" className="package-link">
                                            san francisco
                                        </Link>
                                    </li>
                                </ul>
                                <div className="package-btn">
                                    <Link to="#" className="package-btn-link">
                                        view destination
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-3 m-6 c-12">
                        <div className="package">
                            <div className="package-overlay">
                                <img src={Provice[7].thumbnail} alt="" className="package-thumbnail" />
                                <div className="package-info">
                                    <h3 className="package-heading">{Provice[7].name}</h3>
                                    <span className="package-desc">1 package</span>
                                </div>
                            </div>

                            <Link to="#" className="mobile-package__link"></Link>
                            <div className="package-cover hide-on-mobile-tablet">
                                <h4 className="package-cover-head">packages</h4>
                                <ul className="package-list">
                                    <li className="package-item">
                                        <Link to="#" className="package-link">
                                            san francisco
                                        </Link>
                                    </li>
                                </ul>
                                <div className="package-btn">
                                    <Link to="#" className="package-btn-link">
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
