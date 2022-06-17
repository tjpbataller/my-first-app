import AirbnbLogo from './airbnb.png';

export default function Header(){
    return (
        <nav>
            <img src={AirbnbLogo} alt='airbnb small' className='nav--logo'/>
            <div className='burger--button'>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}