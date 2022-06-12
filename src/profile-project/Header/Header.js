import LinkedinLogo from '../linkedin.png';
import EmailLogo from '../Mail.png';
import Pictured from "../profile.jpg";
import './header-css.css';

export default function Header(){
    return (
        <header>
            <img className='project--image' src={Pictured} alt="Ted instant"/>
            <section>
                <h1 className='section--detail'>Ted Bataller</h1>
                <h4 className='section--detail'>Frontend Developer</h4>
                <h5 className='section--detail'>tedbataller.website</h5>
            </section>
            <nav>
                <button className='email--button'>
                    <img src={EmailLogo}/>
                    <p>Email</p>
                </button>
                <button className='linkedin--button'>
                    <img src={LinkedinLogo} alt='linkedin logo'/>
                    <p>LinkedIn</p>
                </button>
            </nav>
        </header>
    )
}