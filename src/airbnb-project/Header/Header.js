import AirbnbLogo from './airbnb.png';
import './Header.css';

export default function Header(){
    return (
        <nav>
            <img src={AirbnbLogo} alt='airbnb small'/>
        </nav>
    )
}