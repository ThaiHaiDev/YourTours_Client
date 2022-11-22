import SimpleSlider from "../../components/Advertisement/Advertisement"
import Footer from "../../components/Footer/Footer"
import HomeSlider from "../../components/HomeSlider/HomeSlider"
import Navbar from "../../components/Navbar/Navbar"
import Policy from "../../components/Policy/Policy"
import Popular from "../../components/Popular/Popular"
import RoomPopular from "../../components/RoomPopular/RoomPopular"

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <HomeSlider />
            <Popular />
            <SimpleSlider />
            <Policy />
            <RoomPopular />
            <Footer />
        </div>
    )
}

export default HomePage