import React from 'react';
import Slider from 'react-slick';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Advertisement.scss';

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
    };
    return (
        <div className="slider__adversiment">
            <Slider {...settings}>
                <div>
                    <img
                        src="https://ik.imagekit.io/tvlk/image/imageResource/2022/09/10/1662778365302-c9e9325dbd8511827f6875ffc1744382.jpeg?tr=h-230,q-75,w-472"
                        alt="advertise"
                        className="slider__item"
                    />
                </div>
                <div>
                    <img
                        src="https://ik.imagekit.io/tvlk/image/imageResource/2022/05/24/1653361423546-077b20125540b2e625c7aa81c1314792.png?tr=h-230,q-75,w-472 1x, https://ik.imagekit.io/tvlk/image/imageResource/2022/05/24/1653361423546-077b20125540b2e625c7aa81c1314792.png?tr=dpr-2,h-230,q-75,w-472 2x, https://ik.imagekit.io/tvlk/image/imageResource/2022/05/24/1653361423546-077b20125540b2e625c7aa81c1314792.png?tr=dpr-3,h-230,q-75,w-472 3x"
                        alt="advertise"
                        className="slider__item"
                    />
                </div>
                <div>
                    <img
                        src="https://ik.imagekit.io/tvlk/image/imageResource/2022/06/21/1655778129313-47d3824cf083c8798fb0462e6da70ba7.jpeg?tr=h-230,q-75,w-472 1x, https://ik.imagekit.io/tvlk/image/imageResource/2022/06/21/1655778129313-47d3824cf083c8798fb0462e6da70ba7.jpeg?tr=dpr-2,h-230,q-75,w-472 2x, https://ik.imagekit.io/tvlk/image/imageResource/2022/06/21/1655778129313-47d3824cf083c8798fb0462e6da70ba7.jpeg?tr=dpr-3,h-230,q-75,w-472 3x"
                        alt="advertise"
                        className="slider__item"
                    />
                </div>
                <div>
                    <img
                        src="https://ik.imagekit.io/tvlk/image/imageResource/2022/01/04/1641280261912-27278e62b8079593cac8dcfafd15e98d.jpeg?tr=h-230,q-75,w-472 1x, https://ik.imagekit.io/tvlk/image/imageResource/2022/01/04/1641280261912-27278e62b8079593cac8dcfafd15e98d.jpeg?tr=dpr-2,h-230,q-75,w-472 2x, https://ik.imagekit.io/tvlk/image/imageResource/2022/01/04/1641280261912-27278e62b8079593cac8dcfafd15e98d.jpeg?tr=dpr-3,h-230,q-75,w-472 3x"
                        alt="advertise"
                        className="slider__item"
                    />
                </div>
                <div>
                    <img
                        src="https://ik.imagekit.io/tvlk/image/imageResource/2022/09/22/1663828892504-f68581b5530c15d0b4684afe9577dd31.jpeg?tr=h-230,q-75,w-472 1x, https://ik.imagekit.io/tvlk/image/imageResource/2022/09/22/1663828892504-f68581b5530c15d0b4684afe9577dd31.jpeg?tr=dpr-2,h-230,q-75,w-472 2x, https://ik.imagekit.io/tvlk/image/imageResource/2022/09/22/1663828892504-f68581b5530c15d0b4684afe9577dd31.jpeg?tr=dpr-3,h-230,q-75,w-472 3x"
                        alt="advertise"
                        className="slider__item"
                    />
                </div>
            </Slider>

            <div className="card__top__book"></div>
        </div>
    );
}
