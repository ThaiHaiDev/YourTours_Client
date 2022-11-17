import { Link } from 'react-router-dom';
import './Popular.scss';

import Provice from '../../mockdata/ProvinceVN.json';
import { useEffect, useState } from 'react';
import provinceApi from '../../services/provinceApi';
import SkeletonProvince from '../Skeleton/SkeletonProvince';

const Popular = () => {
    const [listProvince, setListProvince] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        provinceApi.getProvincePopular().then((dataResponse: any) => {
            if (dataResponse.data.content.length < 8) {
                setListProvince(Provice.slice(0, 8));
                setLoading(false);
            } else {
                setListProvince(dataResponse.data.content);
                setLoading(false);
            }
            setLoading(false);
        });
    }, []);

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
                    {loading ? (
                        <SkeletonProvince />
                    ) : (
                        listProvince?.map((province: any, index: number) => {
                            const dataResult = Provice.find((d: any) => {
                                // return d.code === province.provinceCode;
                                return d.code === 1;
                            });
                            return (
                                <div className="col l-3 m-6 c-12" key={index}>
                                    <div className="package">
                                        <div className="package-overlay">
                                            <img src={dataResult?.thumbnail} alt="" className="package-thumbnail" />
                                            <div className="package-info">
                                                <h3 className="package-heading">{dataResult?.name}</h3>
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
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
};

export default Popular;
