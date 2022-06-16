import './Main.css';
import Header from './Header/Header.js';
import Hero from './Hero/Hero.js';
import MainComponent from './MainComponent/MainComponent.js';


export default function Main(){
    return (
        <div className='root--container'>
            <Header />
            <div className='main--container'>
                <Hero />
                <MainComponent />
            </div>
        </div>
    )
}