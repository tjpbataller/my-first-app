import AirbnbLogo from './airbnb.png';

export default function Header(){
    return (
        <nav>
            <img src={AirbnbLogo} alt='airbnb small' className='nav--logo'/>
            <div className='burger--button'>
                <span className='burger--layer'></span>
                <span className='burger--layer'></span>
                <span className='burger--layer'></span>
            </div>
        </nav>
    )
}