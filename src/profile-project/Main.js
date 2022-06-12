import './style.css';
import Header from './Header/Header.js';
import MainComponent from './MainComponent/MainComponent.js';
import Footer from './Footer/Footer.js';
// 

export default function Main(){
    return(
        <div className="project--body">
            <Header />
            <MainComponent />
            <Footer />
        </div>
    )
}