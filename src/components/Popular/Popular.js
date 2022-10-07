import { Link } from "react-router-dom";
import './Popular.scss';
import image_1 from '../../assets/img/europe.jpg';

const Popular = () => {
    return (
        <div className="web-content">
            <div className="package-menu grid wide">
                <div className="package-menu__head">
                    <p>OUR PROPOSALS</p>
                    <h3 className="package-menu__heading">OUR <span className="green-underline">DESTINATIONs</span></h3>
                </div>
                <div className="row">
                    <div className="col l-4 m-6 c-12">
                        <div className="package">
                            <div className="package-img">
                            </div>
                            <div className="package-overlay">
                                <img src="./assets/img/arch.png" alt="" className="package-icon" />
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
                                        <Link href="#" className="package-link">berlin</Link>
                                    </li>
                                    <li className="package-item">
                                        <Link href="#" className="package-link">amsterdam</Link>
                                    </li>
                                    <li className="package-item">
                                        <Link href="#" className="package-link">tuscany</Link>
                                    </li>
                                </ul>
                                <div className="package-btn">
                                    <Link href="#" className="package-btn-link">view destination</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-4 m-6 c-12">
                        <div className="package">
                            <div className="package-img">
                            </div>
                            <div className="package-overlay">
                                <img src={image_1}  alt="" className="package-icon"/>
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
                                        <Link href="#" className="package-link">phuket</Link>
                                    </li>
                                </ul>
                                <div className="package-btn">
                                    <Link href="#" className="package-btn-link">view destination</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-4 m-6 c-12">
                        <div className="package">
                            <div className="package-img">
                            </div>
                            <div className="package-overlay">
                                <img src="./assets/img/torii-gate.png" alt="" className="package-icon" />
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
                                        <Link href="#" className="package-link">hong kong</Link>
                                    </li>
                                    <li className="package-item">
                                        <Link href="#" className="package-link">phuket</Link>
                                    </li>
                                </ul>
                                <div className="package-btn">
                                    <Link href="#" className="package-btn-link">view destination</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-4 m-6 c-12">
                        <div className="package">
                            <div className="package-img">
                            </div>
                            <div className="package-overlay">
                                <img src="./assets/img/pisa.png" alt="" className="package-icon" />
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
                                        <Link href="#" className="package-link">tuscany</Link>
                                    </li>
                                </ul>
                                <div className="package-btn">
                                    <Link href="#" className="package-btn-link">view destination</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-4 m-6 c-12">
                        <div className="package">
                            <div className="package-img">
                            </div>
                            <div className="package-overlay">
                                <img src="./assets/img/london-eye.png" alt="" className="package-icon" />
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
                                        <Link href="#" className="package-link">amsterdam</Link>
                                    </li>
                                </ul>
                                <div className="package-btn">
                                    <Link href="#" className="package-btn-link">view destination</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col l-4 m-6 c-12">
                        <div className="package">
                            <div className="package-img">
                            </div>
                            <div className="package-overlay">
                                <img src="./assets/img/golden-gate.png" alt="" className="package-icon" />
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
                                        <Link href="#" className="package-link">san francisco</Link>
                                    </li>
                                </ul>
                                <div className="package-btn">
                                    <Link href="#" className="package-btn-link">view destination</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popular