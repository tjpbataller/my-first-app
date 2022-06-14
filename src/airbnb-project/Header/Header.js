import AirbnbLogo from './airbnb.png';

export default function Header(){
    return (
        <nav>
            <img src={AirbnbLogo} alt='airbnb small' className='nav--logo'/>
        </nav>
    )
}