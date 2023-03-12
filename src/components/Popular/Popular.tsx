import { Link } from 'react-router-dom';
import './Popular.scss';

import { useEffect, useState } from 'react';
import provinceApi from '../../services/provinceApi';
import SkeletonProvince from '../Skeleton/SkeletonProvince';

const Popular = () => {
    const [listProvince, setListProvince] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        provinceApi.getProvincePopular().then((dataResponse: any) => {
            setListProvince(dataResponse.data.content);
            setLoading(false);
        });
    }, []);

    return (
        <div className="web-content">
            <div className="package-menu">
                <div className="package-menu__head">
                    <p>Khám phá Việt Nam</p>
                </div>
                <div className="row">
                    {loading ? (
                        <SkeletonProvince />
                    ) : (
                        listProvince?.map((province: any, index: number) => {
                            return (
                                <div className="col l-3 m-6 c-12" key={index}>
                                    <div className="package">
                                        <div className="package-overlay">
                                            <img src={province?.thumbnail} alt="" className="package-thumbnail" />
                                            <div className="package-info">
                                                <h3 className="package-heading">{province?.name}</h3>
                                                <span className="package-desc">{`${province?.numberBooking} lượt đặt`}</span>
                                            </div>
                                        </div>

                                        <Link to="#" className="mobile-package__link"></Link>
                                        <div className="package-cover hide-on-mobile-tablet">
                                            <div className="package-btn">
                                                <Link to="#" className="package-btn-link">
                                                    Xem chi tiết
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
