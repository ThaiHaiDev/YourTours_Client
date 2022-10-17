import './App.css';
import SimpleSlider from './components/Advertisement/Advertisement';
import Book from './components/Book/Book';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Popular from './components/Popular/Popular';
import RoomPopular from './components/RoomPopular/RoomPopular';

function App() {
    return (
        <div>
            <Navbar />
            {/* <SimpleSlider /> */}
            {/* <Book /> */}
            <Popular />
            <RoomPopular />
            <Footer />
        </div>
    );
}

export default App;
