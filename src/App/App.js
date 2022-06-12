import MainContent from '../components/Main.js';
import Navbar from '../components/Navbar.js';
import './style.css';

export default function RenderContent(){
    return(
    <div className="container">
        <Navbar />
        <MainContent />
    </div>
    )
}
