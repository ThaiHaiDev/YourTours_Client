import SimpleSlider from '../../components/Advertisement/Advertisement';
import Footer from '../../components/Footer/Footer';
import HomeSlider from '../../components/HomeSlider/HomeSlider';
import Navbar from '../../components/Navbar/Navbar';
import Policy from '../../components/Policy/Policy';
import Popular from '../../components/Popular/Popular';
import RoomPopular from '../../components/RoomPopular/RoomPopular';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const HomePage = () => {
    console.log('check env', API_BASE_URL);
    return (
        <div>
            <Navbar />
            <HomeSlider />
            <SimpleSlider />
            <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                <Popular />
            </div>
            <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-delay="20"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                <Policy />
            </div>

            <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="1200"
                data-aos-delay="80"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                <RoomPopular />
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
