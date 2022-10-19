import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import Popular from "../../components/Popular/Popular"
import RoomPopular from "../../components/RoomPopular/RoomPopular"

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Popular />
            <RoomPopular />
            <Footer />
        </div>
    )
}

export default HomePage