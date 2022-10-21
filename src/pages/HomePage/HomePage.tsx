import SimpleSlider from "../../components/Advertisement/Advertisement"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import Popular from "../../components/Popular/Popular"
import RoomPopular from "../../components/RoomPopular/RoomPopular"

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Popular />
            <SimpleSlider />
            <RoomPopular />
            <Footer />
        </div>
    )
}

export default HomePage