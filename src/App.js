import 'swiper/swiper-bundle.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Routess from './config/Routes';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routess />
            <Footer />
        </BrowserRouter>
    );
}

export default App;